
export const ERROR_CODES = { 
    NO_DATA_FOUND:{
        status: 403,
        error: "No data found"
    },

    MALFORMED_FILTER:{
        status: 403,
        error: "Malformed Filter"
    },

    INSERT_ERROR:{
        status: 500,
        error: "Insertion of Row failed"
    },

    SYNTAX_ERROR:{
        status: 403,
        error: "Syntax Error, check again"
    },

    NOT_AN_OBJECT: {
        status: 403,
        error: "Params passed needs to be object, found to be not an object"
    },

    EMPTY_PARAMS: {
        status: 403,
        error: "Params passed is empty"
    },

    EMPTY_VALID_PARAMS: {
        status: 403,
        error: "Valid params passed is none"
    },

    INCOMPLETE_REQUIRED_FIELDS_COMPLETION: {
        status: 403,
        error: "All required fields not passed to the table"
    },

    MISSING_PRIMARY_KEY: {
        status: 403,
        error: "No primary key registered for table being accessed"
    },

    UNREGISTERED_TABLE_NAME:{
        status: 403,
        error: "Unregistered table name"
    }

}
