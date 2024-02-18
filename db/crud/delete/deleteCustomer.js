import supabase from "../../client/postresClient";
import ERROR_CODES from "../../error_codes/errorCodes";


async function deleteCustomer( rows ){

    const TABLE = "Buyers";
    const FIELD = {
        buyer_id: "",
        // name: "",
        // email: "",
        // phone: "",
        // gender: "",
        // is_verified: ""
    };

    async function deleteThisCustomer(field, table=TABLE){
        
        
        console.log(`\n$$$$$$$$$$( deleteing from ${table} )$$$$$$$$$$$$$$$$$$$$$$$`);
        console.log("\n...... TABLE = ",table);
        console.log("\n...... FIELD = ",field);

        let query = supabase.from( table ).delete();
        let count = 0;

        for(const key in field){
            if(field.hasOwnProperty(key)){
                if(field[key]===undefined)
                    continue;
                query = query.eq( key, field[key] );
                count += 1;
            }
        }


        if(count>0){
            const { err } = await query.select();

            if(err)
                return err;

            else 
                return { "data": "Deleted successfully" };
        }
       

        return { "data": "Deleted successfully" };

    }


    // syntax = { "cid": "" }

    if( Object.prototype.toString.call(rows) === '[object Object]' ){
        FIELD.buyer_id = rows.cid || undefined;
        /* FIELD.name = rows.name || undefined;
        FIELD.email = rows.email || undefined;
        FIELD.phone = rows.phone || undefined;
        FIELD.gender = rows.gender || undefined;
        FIELD.is_verified = rows.is_verified || undefined; */

        if(FIELD.buyer_id === undefined || typeof(FIELD.buyer_id) !== 'string')
            return ERROR_CODES.SYNTAX_ERROR;

        /* if((FIELD.rating && typeof(FIELD.rating)!=='number') || (FIELD.date && typeof(FIELD.date)!=='string') || (FIELD.comment && typeof(FIELD.comment)!=='string') || (FIELD.product_id && typeof(FIELD.product_id)!=='string'))
            return ERROR_CODES.SYNTAX_ERROR; */

        const DATA = deleteThisCustomer(FIELD);
        return DATA;

    }
    
    return ERROR_CODES.SYNTAX_ERROR;

}


export default deleteCustomer;