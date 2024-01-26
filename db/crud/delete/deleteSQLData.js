import supabase from "../../client/postresClient";
import ERROR_CODES from "../../error_codes/errorCodes";
import SQL_TABLE_COLS from "@/app/utils/db_cols";
import { checkIsArray, checkIsString, checkIsObject, checkIsArray } from "@/app/helpers/checkDataType";



async function deleteSQLData( rows ){


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


    const FIELD = {
        col: "",
        val: ""
    };





    async function deleteThisSQLData(field, table=TABLE){
        
        
        console.log(`\n$$$$$$$$$$( deleteing from ${table} )$$$$$$$$$$$$$$$$$$$$$$$`);
        console.log("\n...... TABLE = ",table);
        console.log("\n...... FIELD = ",field);


        const { err } = await supabase
            .from( table )
            .delete()
            .eq( field.col, field.val );

        if(err)
            return err;


        return { "data": "Deleted successfully" };

    }


    // syntax = { "table": "", "filter": "" }

    if( checkIsObject(rows) ){
        FIELD.col = rows.col || undefined;
        FIELD.val = rows.sid || undefined;

        if(FIELD.col === undefined || typeof(FIELD.col) !== 'string' || FIELD.val === undefined || typeof(FIELD.val) !== 'string')
            return ERROR_CODES.SYNTAX_ERROR;

        if(FIELD.col === "seller_id" || FIELD.col === "name" || FIELD.col === "company" || FIELD.col === "email" || FIELD.col === "is_verified" || FIELD.col === "country"){
            const DATA = deleteThisSQLData(FIELD);
            return DATA;
        } 
        
        return ERROR_CODES.SYNTAX_ERROR;

    }
    
    return ERROR_CODES.SYNTAX_ERROR;

}


export default deleteSQLData;