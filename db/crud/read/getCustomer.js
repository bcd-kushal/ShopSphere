import supabase from "../../client/postresClient";
import ERROR_CODES from "../../error_codes/errorCodes";
import { checkIsArray, checkIsObject } from "@/app/helpers/checkDataType"; 

async function getCustomer(rows) {
    const CUSTOMER_COLS = ['buyer_id', 'gender', 'name', 'password', 'email', 'phone', 'last_ordered', 'is_verified', 'addresses', 'country', 'last_login', 'login_ip', 'login_geo'];

    const TABLE = "Buyers";
    const LIMIT = 5;
    let FILTER = {};
    let COLS = [];

    async function readCustomerData(cols, filter, table = TABLE, limit = LIMIT) {


        console.log("\n\n\n\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n");
        console.log("TABLE =", TABLE);
        console.log(".COLS =", COLS);
        console.log("FILTR =", FILTER);

        if(checkIsArray(cols))
            cols = cols.join(",");


        console.log("-=-=-=-=-=-==-=-=::",cols);

            

        let query = supabase.from( table ).select( cols );

        const filterKeys = Object.keys(filter);
        for(let i=0; i<filterKeys.length; i++){

            if(filter.hasOwnProperty(filterKeys[i])){
                
                console.log("\n````````````::",filterKeys[i]," = ",filter[filterKeys[i]]);
                query = query.eq( filterKeys[i], filter[filterKeys[i]] );
            }

        }

        const { data, err } = await query.limit( limit );

        if(err)
            return err;

        return data;


        return 100;
    }



    // syntax: { "cols": [], "filter": {} }

    // check syntax.....
    if (!(checkIsArray(rows.cols) && checkIsObject(rows.filter))) {
        return ERROR_CODES.SYNTAX_ERROR;
    }


    // columns check -----------------------
    if (rows.cols.length === 0)
        COLS = "*";
    else {

        for (let i = 0; i < rows.cols.length; i++) {
            if (CUSTOMER_COLS.indexOf(rows.cols[i]) >= 0)
                COLS.push(rows.cols[i]);
        }

        if (COLS.length === 0)
            return ERROR_CODES.SYNTAX_ERROR;

    }
    

    // filters check ------------------------
    const filterKeys = Object.keys(rows.filter);
    if (filterKeys.length > 0) {

        for (let i = 0; i < filterKeys.length; i++) {
            if (CUSTOMER_COLS.indexOf(filterKeys[i]) >= 0) {
                FILTER[filterKeys[i]] = rows.filter[filterKeys[i]];
            }
        }

    }

    const DATA = readCustomerData(COLS, FILTER);


    return DATA;

}

export default getCustomer;