import supabase from "../../client/postresClient";
import ERROR_CODES from "../../error_codes/errorCodes";


async function deleteSeller( rows ){

    const TABLE = "Sellers";
    const FIELD = {
        col: "",
        val: ""
    };

    async function deleteThisSeller(field, table=TABLE){
        
        
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


    // syntax = { "col": "", "sid": "" }

    if( Object.prototype.toString.call(rows) === '[object Object]' ){
        FIELD.col = rows.col || undefined;
        FIELD.val = rows.sid || undefined;

        if(FIELD.col === undefined || typeof(FIELD.col) !== 'string' || FIELD.val === undefined || typeof(FIELD.val) !== 'string')
            return ERROR_CODES.SYNTAX_ERROR;

        if(FIELD.col === "seller_id" || FIELD.col === "name" || FIELD.col === "company" || FIELD.col === "email" || FIELD.col === "is_verified" || FIELD.col === "country"){
            const DATA = deleteThisSeller(FIELD);
            return DATA;
        } 
        
        return ERROR_CODES.SYNTAX_ERROR;

    }
    
    return ERROR_CODES.SYNTAX_ERROR;

}


export default deleteSeller;