import supabase from "../../client/postresClient";
import ERROR_CODES from "../../error_codes/errorCodes";
import { checkIsArray, checkIsInteger, checkIsObject, checkIsString } from "@/app/helpers/checkDataType"; 
import SQL_ALLOWED_COLS_TO_UPDATE from "@/app/utils/db_cols_update_allowed";
import SQL_TABLE_COLS from "@/app/utils/db_cols";


async function updateSQLData(rows) {
    const SQL_TABLES = Object.keys(SQL_ALLOWED_COLS_TO_UPDATE);
    let TABLE_COLS;
    let ALLOWED_TABLE_COLS;

    let TABLE = "";
    let LIMIT = 10;

    if(rows.table && checkIsString(rows.table) && SQL_TABLES.indexOf(rows.table) >= 0){
        TABLE = rows.table;
        TABLE_COLS = SQL_TABLE_COLS[rows.table];
        ALLOWED_TABLE_COLS = SQL_ALLOWED_COLS_TO_UPDATE[rows.table];
        
        if(rows.limit && checkIsInteger(rows.limit)){
            LIMIT = rows.limit || LIMIT;

            if(LIMIT >= 25)
                LIMIT = 25;

        }

    } else {
        return ERROR_CODES.SYNTAX_ERROR;
    }

    let FILTER = {};
    let TO_UPDATE = {};

    async function updateThisSQLData(update_field, filter, table = TABLE, limit = LIMIT) {


        console.log("\n\n\n\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n");
        console.log("....TABLE =", TABLE);
        console.log("TO UPDATE =", update_field);
        console.log("...FILTER =", FILTER);

            

        let query = supabase.from( table ).update( update_field );

        const filterKeys = Object.keys(filter);
        
        for(let i=0; i<filterKeys.length; i++)
            if(filter.hasOwnProperty(filterKeys[i]))
                query = query.eq( filterKeys[i], filter[filterKeys[i]] );


        const { data, err } = await query.select();

        if(err)
            return err;

        return data;


        return 100;
    }



    // syntax: { "table":"", "update": {}, "filter": {} }

    // check syntax.....
    if (!(checkIsObject(rows.update) && checkIsObject(rows.filter))) {
        return ERROR_CODES.SYNTAX_ERROR;
    }



    // updates check -----------------------
    const updateKeys = Object.keys(rows.update);
    if (updateKeys.length > 0) {

        for (let i = 0; i < updateKeys.length; i++) {
            if (ALLOWED_TABLE_COLS.indexOf(updateKeys[i]) < 0) {
                delete rows.update[updateKeys[i]];
            }
        }

        if(Object.keys(rows.update).length === 0)
            return ERROR_CODES.SYNTAX_ERROR;

        TO_UPDATE = rows.update;

    } 
    else {
        return ERROR_CODES.SYNTAX_ERROR;
    }
    
    

    // filters check ------------------------
    const filterKeys = Object.keys(rows.filter);
    if (filterKeys.length > 0) {

        for (let i = 0; i < filterKeys.length; i++) {
            if (TABLE_COLS.indexOf(filterKeys[i]) >= 0) {
                FILTER[filterKeys[i]] = rows.filter[filterKeys[i]];
            }
        }

    }

    const DATA = updateThisSQLData(TO_UPDATE, FILTER);


    return DATA;

}

export default updateSQLData;