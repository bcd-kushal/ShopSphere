const SQL_TABLE_CREATE_ALLOWED_FIELDS = {
  Buyers: [
    "name",
    "email",
    "password",
    "gender",
    "is_verified",
    "phone",
    "addresses",
    "login_ip",
    "login_geo",
  ],

  Products: [
    "nosql_prod_id",
  ],

  Reviews: [
    "rating",
    "date",
    "buyer_id",
    "product_id",
    "comment",
    "image",
  ],

  Sellers: [
    "name",
    "password",
    "email",
    "phone",
    "is_verified",
    "address",
    "country",
    "last_login",
    "payment_options",
    "business_address",
    "company",
    "login_ip",
    "login_geo",
    "description",
  ],

  Wishlist: ["buyer_id", "product_id"],
  };
  
  // exports ======================================================
  export default SQL_TABLE_CREATE_ALLOWED_FIELDS;
  