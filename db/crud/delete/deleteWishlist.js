import supabase from "../../client/postresClient";
import ERROR_CODES from "../../error_codes/errorCodes";


async function deleteWishlist( rows ){

    const TABLE = "Wishlist";
    const FIELD = {
        buyer_id: "",
        product_id: ""
    };

    async function deleteThisWishlist(field, table=TABLE){
        
        
        console.log(`\n$$$$$$$$$$( deleteing from ${table} )$$$$$$$$$$$$$$$$$$$$$$$`);
        console.log("\n...... TABLE = ",table);
        console.log("\n...... FIELD = ",field);


        const { err } = await supabase
            .from( table )
            .delete()
            .eq( "buyer_id", field.buyer_id )
            .eq( "product_id", field.product_id )
            .select();

        if(err)
            return err;


        return { "data": "Deleted successfully" };

    }


    // syntax = { "cid": "", "pid": "" }

    if( Object.prototype.toString.call(rows) === '[object Object]' ){
        FIELD.buyer_id = rows.cid || undefined;
        FIELD.product_id = rows.pid || undefined;

        if(FIELD.buyer_id === undefined || typeof(FIELD.buyer_id) !== 'string' || FIELD.product_id === undefined || typeof(FIELD.product_id) !== 'string')
            return ERROR_CODES.SYNTAX_ERROR;

        const DATA = deleteThisWishlist(FIELD);
        return DATA;

    }
    
    return ERROR_CODES.SYNTAX_ERROR;

}


export default deleteWishlist;