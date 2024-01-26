import supabase from "../../client/postresClient";
import POSTGRES_FIELDS from "../../schema/postgresSchema";
import ERROR_CODES from "../../error_codes/errorCodes";
import timeRN from "@/app/helpers/timeRN";
import newID from "@/app/helpers/newID";


// rows param:  - an object of one row data
//              - an array of objects for multiple row data

async function addReview(rows){
    
    const TABLE = "Reviews";
    let QUERY_ROWS = [];

    let LOCAL_ROW_OBJ = {
        review_id: "",
        buyer_id: "",
        product_id: "",
        rating: "",
        comment: "",
        date: "",
        image: {}
    };

    

    async function addReviewRow( rows, table=TABLE ){

        console.log(`\n$$$$$$$$$$( inserting into ${table} )$$$$$$$$$$$$$$$$$$$$$$$`);
        console.log("\n...... TABLE = ",table);
        console.log("\n...... ROWS = ",rows);

        let { data, err } = await supabase
        .from( table )
        .insert( rows )
        .select();
        

        if(err){
            return ERROR_CODES.INSERT_ERROR
        }
        
        return data;

        return 100;
    }



    if(!(typeof(rows)==='object' || Array.isArray(rows))){
        return ERROR_CODES.SYNTAX_ERROR
    }



    if(Array.isArray(rows)){

        for(let i=0;i<rows.length;i++){
            
            const x = rows[i];

            if(typeof(x)!=='object'){
                return ERROR_CODES.SYNTAX_ERROR
            }

            const creds = newID("rv");

            LOCAL_ROW_OBJ = {
                review_id: creds.id,
                buyer_id: x.cid || undefined,   
                product_id: x.pid || undefined,
                rating: parseFloat(x.rating) || undefined,
                comment: x.comment || "",
                date: creds.time,
                image: {}
            };  


            if(LOCAL_ROW_OBJ.buyer_id === undefined || LOCAL_ROW_OBJ.product_id === undefined || LOCAL_ROW_OBJ.rating === undefined)
                continue;

                
            QUERY_ROWS.push(LOCAL_ROW_OBJ);

            

        }

    }
    else if(typeof(rows) === 'object'){

        const instantaneousTime = timeRN();
        const creds = newID("rv");


        LOCAL_ROW_OBJ = {
            review_id: creds.id,
            buyer_id: rows.cid || undefined,   
            product_id: rows.pid || undefined,
            rating: parseFloat(rows.rating) || undefined,
            comment: rows.comment || "",
            date: creds.time,
            image: {}
        };  


        if(LOCAL_ROW_OBJ.buyer_id === undefined || LOCAL_ROW_OBJ.product_id === undefined || LOCAL_ROW_OBJ.rating === undefined){
            return ERROR_CODES.SYNTAX_ERROR;
        } else {
            QUERY_ROWS.push(LOCAL_ROW_OBJ);
        }

    }
    else{
        return ERROR_CODES.SYNTAX_ERROR;
    }


    if(QUERY_ROWS.length === 0){
        return ERROR_CODES.SYNTAX_ERROR;
    }

    const DATA =  await addReviewRow(QUERY_ROWS);
    return DATA;
    
}

export default addReview;