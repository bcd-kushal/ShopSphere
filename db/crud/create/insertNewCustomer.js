import supabase from "../../client/postresClient";
import POSTGRES_FIELDS from "../../schema/postgresSchema";
import ERROR_CODES from "../../error_codes/errorCodes";
import newID from "@/app/helpers/newID";


// rows param:  - an object of one row data
//              - an array of objects for multiple row data

async function addCustomer(rows){
    
    const TABLE = "Buyers";
    let QUERY_ROWS = [];

    let LOCAL_ROW_OBJ = {
        buyer_id: "",
        name: "",
        email: "",
        phone: "",
        password: "",
        gender: "",
        addresses: {},
        is_verified: "",
        last_ordered: "",
        last_login: "",
        login_ip: "",
        latitude: "",
        longitude: ""
    };

    

    async function addCustomerRow( rows, table=TABLE ){

        console.log(`\n$$$$$$$$$$( inserting into ${table} )$$$$$$$$$$$$$$$$$$$$$$$`);
        console.log("\n...... TABLE = ",table);
        console.log("\n...... ROWS = ",rows);

        /* 
        for(let i=0; i<rows.length;i++){
            console.log("-------->> ", JSON.stringify(rows[i].addresses));
            rows[i].addresses = JSON.stringify(rows[i].addresses);
            console.log("--------:: ", rows[i].addresses);
            
        } */



        let { data, err } = await supabase
        .from( table )
        .insert( rows )
        .select();
        

        if(err){
            return ERROR_CODES.INSERT_ERROR
        }
  
        
        return data;

        // return 100;
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


            const creds = newID("cs");

            LOCAL_ROW_OBJ = {
                buyer_id: creds.id,
                name: x.name || undefined,
                email: x.email || undefined,
                phone: x.phone || null,
                password: x.password || undefined,
                gender: x.gender || "rather not say",
                addresses: x.address || null,
                is_verified: false,
            };  


            if( LOCAL_ROW_OBJ.name === undefined || 
                LOCAL_ROW_OBJ.email === undefined || 
                LOCAL_ROW_OBJ.phone === undefined ||
                LOCAL_ROW_OBJ.password === undefined )
                    continue;

            if( LOCAL_ROW_OBJ.addresses && Object.prototype.toString.call(LOCAL_ROW_OBJ.addresses) !== "[object Object]" )
                continue;
                
            if(!(LOCAL_ROW_OBJ.gender=="male" || LOCAL_ROW_OBJ.gender=="female" || LOCAL_ROW_OBJ.gender=="rather not say" ))
                continue;


            QUERY_ROWS.push(LOCAL_ROW_OBJ);

            

        }

    }
    else if(typeof(rows) === 'object'){

        // const instantaneousTime = timeRN();
        const creds = newID("cs");

        LOCAL_ROW_OBJ = {
            buyer_id: creds.id,
            name: rows.name || undefined,
            email: rows.email || undefined,
            phone: rows.phone || null,
            password: rows.password || undefined,
            gender: rows.gender || "rather not say",
            addresses: rows.address || null,
            is_verified: false,
            last_ordered: null,
            last_login: null,
            login_ip: null,
            latitude: null,
            longitude: null,
        };  


        if( LOCAL_ROW_OBJ.name === undefined || 
            LOCAL_ROW_OBJ.email === undefined || 
            LOCAL_ROW_OBJ.phone === undefined ||
            LOCAL_ROW_OBJ.password === undefined )
                return ERROR_CODES.SYNTAX_ERROR;

        else if( LOCAL_ROW_OBJ.addresses && Object.prototype.toString.call(LOCAL_ROW_OBJ.addresses) !== "[object Object]")
                return ERROR_CODES.SYNTAX_ERROR;

        else if(!(LOCAL_ROW_OBJ.gender=="male" || LOCAL_ROW_OBJ.gender=="female" || LOCAL_ROW_OBJ.gender=="rather not say" ))
                return ERROR_CODES.SYNTAX_ERROR;


        else {
            QUERY_ROWS.push(LOCAL_ROW_OBJ);
        }

    }
    else{
        return ERROR_CODES.SYNTAX_ERROR;
    }


    if(QUERY_ROWS.length === 0){
        return ERROR_CODES.SYNTAX_ERROR;
    }

    const DATA =  await addCustomerRow(QUERY_ROWS);
    return DATA;
    
}

export default addCustomer;