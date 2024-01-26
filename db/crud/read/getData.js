import supabase from "../../client/postresClient";
import ERROR_CODES from "../../error_codes/errorCodes";
import { checkIsArray, checkIsObject, checkIsString } from "@/app/helpers/checkDataType"; 
import SQL_TABLE_COLS from "@/app/utils/db_cols";

async function getSQLData(rows) {
    const SQL_TABLES = Object.keys(SQL_TABLE_COLS);
    let TABLE_COLS;

    let TABLE = "";

    if(rows.table && checkIsString(rows.table) && SQL_TABLES.indexOf(rows.table) >= 0){
        TABLE = rows.table;
        TABLE_COLS = SQL_TABLE_COLS[rows.table];
    } else {
        return ERROR_CODES.SYNTAX_ERROR;
    }


    const LIMIT = 5;
    let FILTER = {};
    let COLS = [];

    async function readSQLData(cols, filter, table = TABLE, limit = LIMIT) {


        console.log("\n\n\n\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n");
        console.log("TABLE =", TABLE);
        console.log(".COLS =", COLS);
        console.log("FILTR =", FILTER);

        if(checkIsArray(cols))
            cols = cols.join(",");
            

        let query = supabase.from( table ).select( cols );

        const filterKeys = Object.keys(filter);
        
        for(let i=0; i<filterKeys.length; i++)
            if(filter.hasOwnProperty(filterKeys[i]))
                query = query.eq( filterKeys[i], filter[filterKeys[i]] );


        const { data, err } = await query.limit( limit );

        if(err)
            return err;

        return data;


        return 100;
    }



    // syntax: { "table":"", "cols": [], "filter": {} }

    // check syntax.....
    if (!(checkIsArray(rows.cols) && checkIsObject(rows.filter))) {
        return ERROR_CODES.SYNTAX_ERROR;
    }


    // columns check -----------------------
    if (rows.cols.length === 0)
        COLS = "*";
    else {

        for (let i = 0; i < rows.cols.length; i++) {
            if (TABLE_COLS.indexOf(rows.cols[i]) >= 0)
                COLS.push(rows.cols[i]);
        }

        if (COLS.length === 0)
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

    const DATA = readSQLData(COLS, FILTER);


    return DATA;

}

export default getSQLData;