const SQL_TABLE_CREATE_REQUIRED_FIELDS = {
    Buyers: [
      "name",
      "email",
      "password",
      "gender",
    ],

    Products: [
      "nosql_prod_id",
    ],
  
    Reviews: [
      "buyer_id",
      "product_id",
      "rating",
      "date",
    ],
  
    Sellers: [
      "name",
      "password",
      "email",
      "phone",
      "address",
      "country",
      "business_address",
    ],
  
    Wishlist: ["buyer_id", "product_id"],
  };
  
  // exports ======================================================
  export default SQL_TABLE_CREATE_REQUIRED_FIELDS;
  