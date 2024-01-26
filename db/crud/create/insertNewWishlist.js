import supabase from "../../client/postresClient";
import POSTGRES_FIELDS from "../../schema/postgresSchema";
import ERROR_CODES from "../../error_codes/errorCodes";
import newID from "@/app/helpers/newID";


// rows param:  - an object of one row data

async function createWishlist(rows) {

    const TABLE = "Wishlist";
    let QUERY_ROWS = [];

    let LOCAL_ROW_OBJ = {
        wishlist_id: "",
        buyer_id: "",
        product_id: ""
    };



    async function addWishlistRow(rows, table = TABLE) {

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

        const creds = newID("wl");

        LOCAL_ROW_OBJ = {
            wishlist_id: creds.id,
            buyer_id: rows.cid || undefined,
            product_id: rows.pid || undefined
        };

        if (LOCAL_ROW_OBJ.buyer_id === undefined || LOCAL_ROW_OBJ.product_id === undefined)
            return ERROR_CODES.SYNTAX_ERROR;


        QUERY_ROWS.push(LOCAL_ROW_OBJ);
    }


    if (QUERY_ROWS.length === 0) {
        return ERROR_CODES.SYNTAX_ERROR;
    }

    const DATA = await addWishlistRow(QUERY_ROWS);
    return DATA;

}

export default createWishlist;