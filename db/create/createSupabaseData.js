import supabase from "../../client/postresClient";
import ERROR_CODES from "../../error_codes/errorCodes";
import SQL_TABLE_COLS from "../../utils/db_cols";
import { checkIsArray, checkIsString, checkIsObject } from "../../helpers/checkDataType";
import DEFAULTS from "../../defaults/defaults";
import SQL_TABLE_CREATE_REQUIRED_FIELDS from "../../utils/db_create_required_cols";
import SQL_TABLE_CREATE_ALLOWED_FIELDS from "../../utils/db_create_allowed_cols";
import SQL_TABLE_PRIMARY_KEYS from "../../utils/db_pk";
import newID from "../../helpers/newID";


async function createSQLData( rows ){


    if( !checkIsObject(rows) )
        return ERROR_CODES.NOT_AN_OBJECT;


    const SQL_TABLES = Object.keys(SQL_TABLE_CREATE_REQUIRED_FIELDS);
    let TABLE_COLS;
    let TABLE_ALLOWED_COLS;

    let TABLE = "";

    if(rows.table && checkIsString(rows.table) && SQL_TABLES.indexOf(rows.table) >= 0){
        TABLE = rows.table;
        TABLE_COLS = SQL_TABLE_COLS[rows.table];
        TABLE_ALLOWED_COLS = SQL_TABLE_CREATE_ALLOWED_FIELDS[rows.table];
    } else {
        return ERROR_CODES.UNREGISTERED_TABLE_NAME;
    }

    let DATA_TO_ADD = {};

    async function createNewSQLRow(rows, table){
        
        
        console.log(`\n$$$$$$$$$$( creating data into ${table} )$$$$$$$$$$$$$$$$$$$$$$$`);
        console.log("\n...... TABLE = ",table);
        console.log("\n...... FIELD = ",rows);

        if(!checkIsArray(rows) || !checkIsString(table) || rows.length<=0)
            return ERROR_CODES.SYNTAX_ERROR;


        let { data, err } = await supabase
            .from( table )
            .insert( rows )
            .select();
        
        if(err)
            return err;

        if(data)
            return { "success": true, "data": "Deleted successfully" };

        return { "success": false, "error": "Couldnt connect to supabase" };

    }


    // syntax = { 
    //      "table": "table_name", 
    //      "data": {
    //          "col_name": "value",
    //          "col_name": "value",
    //      } 
    // }

    let REQUIRED_FIELD_CHECK = SQL_TABLE_CREATE_REQUIRED_FIELDS[rows.table];

    if( checkIsObject(rows) && rows.data && checkIsObject(rows.data) ){
        const dataKeys = Object.keys(rows.data);

        // filter authentic data fields
        if(dataKeys.length>0){
            for(let i=0;i<dataKeys.length;i++){
                if(rows.data[dataKeys[i]]!==undefined && rows.data[dataKeys[i]]!==null && rows.data[dataKeys[i]]!==Infinity){
                    
                    if(TABLE_COLS.indexOf(dataKeys[i])>-1 && TABLE_ALLOWED_COLS.indexOf(dataKeys[i])>-1){
                        DATA_TO_ADD[dataKeys[i]] = rows.data[dataKeys[i]];  
                    
                        const CHECK_INDEX = REQUIRED_FIELD_CHECK.indexOf(dataKeys[i]);
                        if(CHECK_INDEX>-1){
                            REQUIRED_FIELD_CHECK.splice(CHECK_INDEX,1);
                        }
                    }
                    
                }
            }

            if(REQUIRED_FIELD_CHECK.length!==0 || Object.keys(DATA_TO_ADD).length===0){
                return ERROR_CODES.INCOMPLETE_REQUIRED_FIELDS_COMPLETION;
            }

        }
        else{
            return ERROR_CODES.EMPTY_VALID_PARAMS;
        }

        // after appending authentic data from request
        // now add primary key to it...
        const PRIMARY_KEY = SQL_TABLE_PRIMARY_KEYS[rows.table] ? SQL_TABLE_PRIMARY_KEYS[rows.table] : null;
        if(PRIMARY_KEY){
            const suffix = PRIMARY_KEY.suffix;
            const PK = newID(suffix);
            DATA_TO_ADD[PRIMARY_KEY.pk] = PK.id;
        }
        else{
            return ERROR_CODES.MISSING_PRIMARY_KEY;
        }

        const DATA = createNewSQLRow([DATA_TO_ADD],TABLE);
        return DATA;
    }
    else
        return ERROR_CODES.NOT_AN_OBJECT;


}


export default createSQLData;