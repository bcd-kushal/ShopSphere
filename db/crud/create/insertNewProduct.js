import supabase from "../../client/postresClient";
import POSTGRES_FIELDS from "../../schema/postgresSchema";
import ERROR_CODES from "../../error_codes/errorCodes";
import newID from "@/app/helpers/newID";


// rows param:  - an object of one row data

async function addProductSQL(rows) {

    const TABLE = "Products";
    let QUERY_ROWS = [];

    let LOCAL_ROW_OBJ = {
        sql_prod_id: "",
        nosql_prod_id: ""
    };



    async function addProduct(rows, table = TABLE) {

        console.log(`\n$$$$$$$$$$( inserting into ${table} )$$$$$$$$$$$$$$$$$$$$$$$`);
        console.log("\n...... TABLE = ", table);
        console.log("\n...... ROWS = ", rows);

        let { data, err } = await supabase
            .from(table)
            .insert(rows)
            .select();


        if (err) {
            return ERROR_CODES.INSERT_ERROR
        }

        return data;

        return 100;
    }



    if (Object.prototype.toString.call(rows) !== '[object Object]') {
        return ERROR_CODES.SYNTAX_ERROR
    } else {

        const creds = newID("pd");

        LOCAL_ROW_OBJ = {
            sql_prod_id: creds.id,
            nosql_prod_id: rows.atlas_pid || undefined
        };

        if (LOCAL_ROW_OBJ.nosql_prod_id === undefined)
            return ERROR_CODES.SYNTAX_ERROR;


        QUERY_ROWS.push(LOCAL_ROW_OBJ);
    }


    if (QUERY_ROWS.length === 0) {
        return ERROR_CODES.SYNTAX_ERROR;
    }

    const DATA = await addProduct(QUERY_ROWS);
    return DATA;

}

export default addProductSQL;