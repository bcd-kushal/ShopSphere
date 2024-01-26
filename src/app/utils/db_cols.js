const SQL_TABLE_COLS = {
  Buyers: [
    "buyer_id",
    "gender",
    "name",
    "password",
    "email",
    "phone",
    "last_ordered",
    "is_verified",
    "addresses",
    "country",
    "last_login",
    "login_ip",
    "login_geo",
  ],

  Reviews: [
    "review_id",
    "rating",
    "date",
    "buyer_id",
    "product_id",
    "comment",
    "image",
    "created_at",
  ],

  Sellers: [
    "seller_id",
    "created_at",
    "name",
    "password",
    "email",
    "phone",
    "comment",
    "is_verified",
    "address",
    "country",
    "last_login",
    "login_ip",
    "login_geo",
    "payment_options",
    "description",
    "business_address",
  ],

  Wishlist: ["wishlist_id", "buyer_id", "product_id", "created_at"],
};

// exports ======================================================
export default SQL_TABLE_COLS;
