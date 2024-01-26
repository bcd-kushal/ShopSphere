
const ERROR_CODES = { 
    NO_DATA_FOUND:{
        "status": 404,
        "message": "No data found"
    },

    MALFORMED_FILTER:{
        "status": 404,
        "message": "Malformed Filter"
    },

    INSERT_ERROR:{
        "status": 500,
        "message": "Insertion of Row failed"
    },

    SYNTAX_ERROR:{
        "status": 404,
        "message": "Syntax Error, check again"
    }

};

export default ERROR_CODES;
