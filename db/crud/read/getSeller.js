import supabase from "../../client/postresClient";
import ERROR_CODES from "../../error_codes/errorCodes";
import { checkIsArray, checkIsObject } from "@/app/helpers/checkDataType"; 

async function getSeller(rows) {
    const SELLER_COLS = ['seller_id', 'created_at', 'name', 'password', 'email', 'phone', 'comment', 'is_verified', 'address', 'country', 'last_login', 'login_ip', 'login_geo', 'payment_options', 'description', 'business_address'];

    const TABLE = "Sellers";
    let FILTER = {};
    let COLS = [];

    async function readSellerData(cols, filter, table = TABLE) {


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

        const { data, err } = await query;

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
            if (SELLER_COLS.indexOf(rows.cols[i]) >= 0)
                COLS.push(rows.cols[i]);
        }

        if (COLS.length === 0)
            return ERROR_CODES.SYNTAX_ERROR;

    }
    

    // filters check ------------------------
    const filterKeys = Object.keys(rows.filter);
    if (filterKeys.length > 0) {

        for (let i = 0; i < filterKeys.length; i++) {
            if (SELLER_COLS.indexOf(filterKeys[i]) >= 0) {
                FILTER[filterKeys[i]] = rows.filter[filterKeys[i]];
            }
        }

    }

    const DATA = readSellerData(COLS, FILTER);


    return DATA;

}

export default getSeller;