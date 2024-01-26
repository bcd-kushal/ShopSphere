import supabase from "../../client/postresClient";
import ERROR_CODES from "../../error_codes/errorCodes";


async function deleteProduct( rows ){

    const TABLE = "Products";
    const FIELD = {
        col: "",
        val: ""
    };

    async function deleteThisProduct(field, table=TABLE){
        
        
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


    // syntax = { "atlas_pid": "" }

    if( Object.prototype.toString.call(rows) === '[object Object]' ){
        FIELD.col = "nosql_prod_id";
        FIELD.val = rows.atlas_pid || undefined;

        if(FIELD.val === undefined || typeof(FIELD.val) !== 'string')
            return ERROR_CODES.SYNTAX_ERROR;

        const DATA = deleteThisProduct(FIELD);
        return DATA;

    }
    
    return ERROR_CODES.SYNTAX_ERROR;

}


export default deleteProduct;