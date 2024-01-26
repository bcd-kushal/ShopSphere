import supabase from "../../client/postresClient";
import ERROR_CODES from "../../error_codes/errorCodes";


async function deleteReview( rows ){

    const TABLE = "Reviews";
    const FIELD = {
        rating: "",
        date: "",
        buyer_id: "",
        product_id: "",
        comment: ""
    };

    async function deleteThisReview(field, table=TABLE){
        
        
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

        // console.log("\n\nQUERY = \n",query);

        

        if(count>0){
            const { err } = await query.select();

            if(err)
                return err;

            else 
                return { "data": "Deleted successfully" };
        }
       

        return { "data": "Deleted successfully" };

    }


    // syntax = { "cid": "", "pid": "", "rating": "", "date": "" }

    if( Object.prototype.toString.call(rows) === '[object Object]' ){
        FIELD.buyer_id = rows.cid || undefined;
        FIELD.product_id = rows.pid || undefined;
        FIELD.date = rows.date || undefined;
        FIELD.rating = rows.rating || undefined;
        FIELD.comment = rows.comment || undefined;

        if(FIELD.buyer_id === undefined || typeof(FIELD.buyer_id) !== 'string')
            return ERROR_CODES.SYNTAX_ERROR;

        if((FIELD.rating && typeof(FIELD.rating)!=='number') || (FIELD.date && typeof(FIELD.date)!=='string') || (FIELD.comment && typeof(FIELD.comment)!=='string') || (FIELD.product_id && typeof(FIELD.product_id)!=='string'))
            return ERROR_CODES.SYNTAX_ERROR;

        const DATA = deleteThisReview(FIELD);
        return DATA;

    }
    
    return ERROR_CODES.SYNTAX_ERROR;

}


export default deleteReview;