import Image from 'next/image'
import getAllReviews from '../../db/crud/read/allReviews';
import getReviewByProductID from '../../db/crud/read/getReviewByProductID';
import addReview from '../../db/crud/create/insertNewReview';
import addCustomer from '../../db/crud/create/insertNewCustomer';
import addSeller from '../../db/crud/create/insertNewSeller';
import createWishlist from '../../db/crud/create/insertNewWishlist';
import getTimeDateByID from './helpers/getDateTimeByID';
import addProductSQL from '../../db/crud/create/insertNewProduct';
import deleteProduct from '../../db/crud/delete/deleteProduct';
import deleteWishlist from '../../db/crud/delete/deleteWishlist';
import deleteReview from '../../db/crud/delete/deleteReview';
import deleteCustomer from '../../db/crud/delete/deleteCustomer';
import getSQLData from '../../db/crud/read/getData';
import updateSQLData from '../../db/crud/update/updateSQLData';






const res = await updateSQLData({
  table: "Reviews",
  update: {
    rating: 4.1,
    comment: "Overall, value for money."
  },
  filter: {
    review_id: "rv6a6909de234d2801409c2024bfc2149b9e57a81b05c39a325"
  }
});

console.log("\n+++++++++++++++++++++\n",res);



/* console.log("\n\n\n\n\n\n\n\n\n", await createWishlist({
  cid: "cs5b26e17f203c9c01446d2024812812b3de22f0de066202242",
  pid: "90c1aa3aea95932ab2a36a8d"
}));
 */

/* 
console.log("\n+++++++++++++++++++++\n",await addProductSQL({
  "atlas_pid": "90c1aa3aea95932ab2a36a8d"
}));
 */


/* 
console.log("\n+++++++++++++++++++++\n",await createWishlist({
  "cid": "cs5b26e17f203c9c01446d2024812812b3de22f0de066202242",
  "pid": "65a8da3aea959940c0df5b6a"
}));
 */



/* console.log("\n\n***************\n\n",await addSeller( [
  {
    name: "RetailNet",
    email: "retailnet@gmail.com",
    phone: "9123469038",
    password: "1234",
    is_verified: false,
    country: "canada",
    address: "yes, ohio",
    business_address: "yes, ohio",
    payment_options: {
      "online": ["upi","card","QR","netbanking"],
    }
  }
])); */





// console.log("\n\n***************\n\n",await getAllReviews(["date","rating","image"]));
 
// console.log("\n\n***************\n\n",await getReviewByProductID("65a8da3aea959940c0df5b6a","review_id","date","rating"));
 

/* console.log("\n\n***************\n\n",await addReview([
  {
    cid: "cs5b26e17f203c9c01446d2024812812b3de22f0de066202242",
    pid: "90c1aa3aea95932ab2a36a8d",
    rating: 5,
    comment: "Yes its great"
  }
]));
 */

/* 
console.log("\n\n***************\n\n",await addCustomer( [
  {
    name: "Naveen Mehta",
    email: "naveen@smart.com",
    phone: "4200246996",
    password: "naveenkumar500",
    gender: "female",
    address: {
      home: "somewhere",
      work: "bhu",
      work: "at home"
    }
  }
]));

 */


export default function Home() {
  return( 
    <>YES</>
  )
}
