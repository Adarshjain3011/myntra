const express = require("express");

const router = express.Router();

const {SignUp,LogIn} = require("../controllers/User");

const {Auth} = require("../middleware/Auth");

const{createCategory,getSpecificCategory,getAllSpecificTagCategory,getAllCategory } = require("../controllers/Category");

const {createTags,getTags,getAllTags} = require("../controllers/Tags");

const{createProducts,getAllProdct,getAllRelatedProduct,getProdctByID} = require("../controllers/Products");

// const{imageUpload, videoUpload, imageReducerUpload, localFileUpload} = require("../controllers/FileUpload");

const{ localFileUpload, imageUpload, videoUpload} = require("../controllers/FileUpload");

// const {AddToCart,getAllAdd_To_Cart} = require("../controllers/User");
// cart related operations ------------>

const {AddToCart,getAllAdd_To_Cart,removeCart,DeleteCart} = require("../controllers/Cart");


//  wishlist related operations ---->


const {AddToWishlist,removeProductWishlist,getAllWishlist}  = require("../controllers/Wishlist");


// const {che} = require("../controllers/paymentController");


router.post("/signup",SignUp);

router.post("/login",LogIn);

router.post("/tokenlogin",Auth);

router.post("/createCategory",createCategory);

router.get("/getSpecificCategory",getSpecificCategory); // tagname  + category name 

router.get("/getAllSpecificTagCategory",getAllSpecificTagCategory );

router.get("/getAllCategory",getAllCategory)



router.post("/createTags",createTags);
router.get("/getTags",getTags);
router.get("/getAllTags",getAllTags);



router.post("/createProducts",createProducts);
router.get("/getAllProduct",getAllProdct);
router.get("/getAllRelatedProduct/:id",getAllRelatedProduct);
router.get("/getProdctByID/:id",getProdctByID);




// upload files on the server

router.post("/localfileUpload",localFileUpload);
// router.post("/imageUpload",imageUpload);
router.post("/imageUpload",imageUpload);
router.post("/videoUpload",videoUpload);



//  cart-operations 

router.post("/add-to-cart/:productId",AddToCart);

router .post("/remove-from-cart/:productId",removeCart);

router.get("/getallcart",getAllAdd_To_Cart);

router.post("/deletecart/:productId",DeleteCart);

// wishlist opeartions ------------------>


router.post("/add-to-wishlist/:productId",AddToWishlist);

router .post("/remove-from-wishlist/:productId",removeProductWishlist);

router.get("/getallwishlist",getAllWishlist);

// -----------------------------------------------------------------------

// router.post('/createOrder',Checkout);


module.exports = router;

