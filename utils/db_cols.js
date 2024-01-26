const CUSTOMER_COLS = [
    'buyer_id', 
    'gender', 
    'name', 
    'password', 
    'email', 
    'phone', 
    'last_ordered', 
    'is_verified', 
    'addresses', 
    'country', 
    'last_login', 
    'login_ip', 
    'login_geo'
];

const REVIEW_COLS = [
    'review_id', 
    'rating', 
    'date', 
    'buyer_id', 
    'product_id', 
    'comment', 
    'image', 
    'created_at'
];

const SELLER_COLS = [
    'seller_id', 
    'created_at', 
    'name', 
    'password', 
    'email', 
    'phone', 
    'comment', 
    'is_verified', 
    'address', 
    'country', 
    'last_login', 
    'login_ip', 
    'login_geo', 
    'payment_options', 
    'description', 
    'business_address'
];

const WISHLIST_COLS = [
    'wishlist_id', 
    'buyer_id', 
    'product_id', 
    'created_at'
];


module.exports = { CUSTOMER_COLS, REVIEW_COLS, WISHLIST_COLS, SELLER_COLS };