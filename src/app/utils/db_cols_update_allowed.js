const SQL_ALLOWED_COLS_TO_UPDATE = {
  Buyers: [
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
    "rating",
    "comment",
    "image",
  ],

  Sellers: [
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

  // Wishlist: none
};

// exports ======================================================
export default SQL_ALLOWED_COLS_TO_UPDATE;
