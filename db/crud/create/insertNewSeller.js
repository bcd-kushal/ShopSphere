import supabase from "../../client/postresClient";
import POSTGRES_FIELDS from "../../schema/postgresSchema";
import ERROR_CODES from "../../error_codes/errorCodes";
import newID from "@/app/helpers/newID";


// rows param:  - an object of one row data
//              - an array of objects for multiple row data

async function addSeller(rows) {

    const TABLE = "Sellers";
    let QUERY_ROWS = [];

    let LOCAL_ROW_OBJ = {
        seller_id: "",
        name: "",
        password: "",
        email: "",
        phone: "",
        company: "",
        is_verified: false,
        address: "",
        country: "",
        payment_options: "",
        business_address: "",
        description: ""
    };



    async function addSellerRow(rows, table = TABLE) {

        console.log(`\n$$$$$$$$$$( inserting into ${table} )$$$$$$$$$$$$$$$$$$$$$$$`);
        console.log("\n...... TABLE = ", table);
        console.log("\n...... ROWS = ", rows);

        /* 
        for(let i=0; i<rows.length;i++){
            console.log("-------->> ", JSON.stringify(rows[i].addresses));
            rows[i].addresses = JSON.stringify(rows[i].addresses);
            console.log("--------:: ", rows[i].addresses);
            
        } */



        let { data, err } = await supabase
            .from(table)
            .insert(rows)
            .select();


        if (err) {
            return ERROR_CODES.INSERT_ERROR
        }

        return data;

        return 100;
    }



    if (!(typeof (rows) === 'object' || Array.isArray(rows))) {
        return ERROR_CODES.SYNTAX_ERROR
    }



    if (Array.isArray(rows)) {

        for (let i = 0; i < rows.length; i++) {

            const x = rows[i];

            if (typeof (x) !== 'object') {
                return ERROR_CODES.SYNTAX_ERROR
            }


            const creds = newID("sl");

            LOCAL_ROW_OBJ = {
                seller_id: creds.id,
                name: x.name || undefined,
                password: x.password || undefined,
                email: x.email || undefined,
                phone: x.phone || undefined,
                company: x.company || null,
                is_verified: false,
                address: x.address || undefined,
                country: x.country || undefined,
                payment_options: x.payment_options || undefined,
                business_address: x.business_address || undefined,
                description: x.description || null
            };


            if (LOCAL_ROW_OBJ.name === undefined ||
                LOCAL_ROW_OBJ.password === undefined ||
                LOCAL_ROW_OBJ.email === undefined ||
                LOCAL_ROW_OBJ.phone === undefined ||
                LOCAL_ROW_OBJ.address === undefined ||
                LOCAL_ROW_OBJ.country === undefined ||
                LOCAL_ROW_OBJ.payment_options === undefined ||
                LOCAL_ROW_OBJ.business_address === undefined)
                continue;

            if (LOCAL_ROW_OBJ.payment_options && Object.prototype.toString.call(LOCAL_ROW_OBJ.payment_options) !== "[object Object]")
                continue;


            const keys = Object.keys(LOCAL_ROW_OBJ.payment_options);

            // console.log("-----))",keys);
            if (keys.length > 2 || keys.length == 0) {
                continue;
            } else if (keys.length == 2) {
                if (keys.indexOf("online") < 0 || keys.indexOf("offline") < 0)
                    continue;
            } else {
                if (keys[0] !== "online" && keys[0] !== "offline")
                    continue;
                else{
                    if(keys[0]==="online")
                        LOCAL_ROW_OBJ.payment_options.offline = false;
                    else 
                        LOCAL_ROW_OBJ.payment_options.online = false;
                }
            }

            if(!LOCAL_ROW_OBJ.payment_options.online && !LOCAL_ROW_OBJ.payment_options.offline)
                continue;


            QUERY_ROWS.push(LOCAL_ROW_OBJ);


        }

    }
    else if (typeof (rows) === 'object') {

        // const instantaneousTime = timeRN();
        const creds = newID("sl");

        LOCAL_ROW_OBJ = {
            seller_id: creds.id,
            name: rows.name || undefined,
            password: rows.password || undefined,
            email: rows.email || undefined,
            phone: rows.phone || undefined,
            company: rows.company || null,
            is_verified: false,
            address: rows.address || undefined,
            country: rows.country || undefined,
            payment_options: rows.payment_options || undefined,
            business_address: rows.business_address || undefined,
            description: rows.description || null
        };


        if (LOCAL_ROW_OBJ.name === undefined ||
            LOCAL_ROW_OBJ.password === undefined ||
            LOCAL_ROW_OBJ.email === undefined ||
            LOCAL_ROW_OBJ.phone === undefined ||
            LOCAL_ROW_OBJ.address === undefined ||
            LOCAL_ROW_OBJ.country === undefined ||
            LOCAL_ROW_OBJ.payment_options === undefined ||
            LOCAL_ROW_OBJ.business_address === undefined)
            return ERROR_CODES.SYNTAX_ERROR;

        if (LOCAL_ROW_OBJ.payment_options && Object.prototype.toString.call(LOCAL_ROW_OBJ.payment_options) !== "[object Object]")
            return ERROR_CODES.SYNTAX_ERROR;


        const keys = Object.keys(LOCAL_ROW_OBJ.payment_options);
        if (keys.length > 2 || keys.length == 0) {
            return ERROR_CODES.SYNTAX_ERROR;
        } else if (keys.length == 2) {
            if (keys.indexOf("online") < 0 || keys.indexOf("offline") < 0)
                return ERROR_CODES.SYNTAX_ERROR;
        } else {
            if (keys[0] !== "online" || keys[0] !== "offline")
                return ERROR_CODES.SYNTAX_ERROR;
        }


        QUERY_ROWS.push(LOCAL_ROW_OBJ);

    }
    else {
        return ERROR_CODES.SYNTAX_ERROR;
    }


    if (QUERY_ROWS.length === 0) {
        return ERROR_CODES.SYNTAX_ERROR;
    }

    const DATA = await addSellerRow(QUERY_ROWS);
    return DATA;

}

export default addSeller;