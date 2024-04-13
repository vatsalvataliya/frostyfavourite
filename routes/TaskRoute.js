const { Router } = require("express");



const {
  getTasks,
  saveTask,
  deleteTask,
  updateTask,
  getCategoryTasks,
  getItemTasks,
  getcate_item,
  getuser_data,
  addtocart,
  getcartdata,
  getpay_letter,
  getdelete_cart,
  addCategories,
  addItems,
  getdelete_item,
  //  getAdminUsers,
  getRestaurant,
  getTopRestro
} = require("../controllers/TaskControllers");

const {
  sendCartData,
  delete_order_detail,
  get_OrderDetail,
  sendContact,
  getRestroItem


} = require("../controllers/SendMailControllers");

const { pay_now } = require("../controllers/PaymentControllers");

const router = Router();

router.get("/get", getTasks);

router.get("/catedata_get", getCategoryTasks);
router.get("/itemdata_get", getItemTasks);
router.get("/restaurant", getRestaurant);
router.get("/top_restro", getTopRestro);
router.post("/get_OrderDetail", get_OrderDetail);


router.post("/add_category", addCategories);
router.post("/add_item", addItems);
// router.get("/get_Admin_Users", getAdminUsers);
// router.post("/save", saveTask);

router.post("/category_id", getcate_item);
router.post("/user_signup", saveTask);
router.post("/user_data", getuser_data);
router.post("/add_to_cart", addtocart);
router.post("/getcartdata",getcartdata);
router.post("/pay_letter",getpay_letter);

router.post("/delete_cart",getdelete_cart);
router.post("/delete_item",getdelete_item);

router.post("/sendCartDataMail",sendCartData);
router.post("/sendContact",sendContact);
router.post("/delete_order_detail",delete_order_detail);




router.put("/update/:id", updateTask);
router.post("/delete", deleteTask);
router.post("/pay_now",pay_now)

router.post("/get_restro_item", getRestroItem);


module.exports = router;
