
import { supabase } from "@supabase/auth-ui-shared";
import POSTGRES_FIELDS from "../schema/postgresSchema";


const NO_DATA_FOUND = {
    "status": 404,
    "message": "No data found"
}

const MALFORMED_FILTER = {
    "status": 404,
    "message": "Malformed Filter"
}


                // SQL QUERIES: Supabase ]==================================




// reviews ________________

async function readReview( filter ){

    const TABLE = "Reviews";
    const FILTER = "";


    async function getReviewData( table=TABLE, col ){
        let { data:Reviews, err } = await supabase
        .from( table )
        .select( col );
    
        return data;
    }

    if(filter===undefined){
        return await getReviewData("*");
    }


    // filter is malformed
    if(typeof(filter) === Array){
        
        let queryCols = "";

        for(let i=0;i<filter.length;i++){
            if(POSTGRES_FIELDS.Reviews.indexOf(filter[i]) >= 0){
                queryCols += filter[i] + ",";
            }
        }

        if(queryCols === ""){
            queryCols = undefined;
        }
        else{
            queryCols = queryCols.substring(0,queryCols.length-1);
        }

        FILTER = queryCols;

    }
    else if(typeof(filter) === String){
        if(POSTGRES_FIELDS.Reviews.indexOf(filter) < 0){
            return MALFORMED_FILTER;
        }
        FILTER = filter;
    }
    else{
        return MALFORMED_FILTER;
    }

    return await getReviewData(col=FILTER);

}



// read a specific review __________




                // NOSQL QUERIES: Mongoose ]==================================