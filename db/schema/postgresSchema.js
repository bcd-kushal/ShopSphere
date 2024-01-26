const POSTGRES_FIELDS = {
    "Buyers": [ 
        'buyer_id', 
        'name', 
        'email', 
        'phone', 
        'password', 
        'gender', 
        'addresses', 
        'is_verified', 
        'last_ordered', 
        'last_login', 
        'login_ip', 
        'longitude', 
        'latitude' 
    ],


    "Sellers": [ 
        'seller_id', 
        'created_at', 
        'name', 
        'password', 
        'email', 
        'phone', 
        'company', 
        'is_verified', 
        'address', 
        'country', 
        'last_login', 
        'login_ip', 
        'login_geo', 
        'payment_options', 
        'description', 
        'business_address' 
    ],


    "Products": [ 
        'sql_prod_id', 
        'nosql_prod_id', 
        'created_at' 
    ],


    "Wishlist": [ 
        'wishlist_id', 
        'buyer_id', 
        'product_id', 
        'created_at' 
    ],


    "Reviews": [ 
        'review_id', 
        'created_at', 
        'buyer_id', 
        'product_id', 
        'rating', 
        'comment', 
        'date', 
        'image' 
    ],

    
}


export default POSTGRES_FIELDS;