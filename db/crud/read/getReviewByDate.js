import supabase from "../../client/postresClient";
import POSTGRES_FIELDS from "../../schema/postgresSchema";
import ERROR_CODES from "../../error_codes/errorCodes";
import DEFAULTS from "../../defaults/defaults";


function checkIsObject(v){
    return (typeof(v) === 'object' && v !== null && !Array.isArray(v));
}


// reviews ________________

async function getReviewByDate( dt, ...filter ){
    
    const TABLE = "Reviews";
    let FILTER = "";


    async function getReviewData( col, table=TABLE ){

        console.log("\n\n...... TABLE = ",table);
        console.log("\n\n...... COL = ",col);

        let { data, err } = await supabase
        .from( table )
        .select( col )
        .eq('date',dt);
        

        if(err){
            return ERROR_CODES.NO_DATA_FOUND
        }
        
        return data;
    }



    if(filter===undefined){
        return await getReviewData("*");
    }

    
    // filter is malformed
    console.log("&&&---> ", filter);
    console.log("$$$---> ", Array.isArray(filter));


    if(Array.isArray(filter)){
        
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
        console.log("///---> ", queryCols);


    }
    else if(typeof(filter) === String){
        if(POSTGRES_FIELDS.Reviews.indexOf(filter) < 0){
            return ERROR_CODES.MALFORMED_FILTER;
        }
        FILTER = filter;
    }
    else{
        return ERROR_CODES.MALFORMED_FILTER;
    }




    const DATA =  await getReviewData(FILTER);
    return DATA;
    
}

export default getReviewByDate;