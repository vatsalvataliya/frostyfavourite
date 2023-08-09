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
} = require("../controllers/TaskControllers");

const {
  sendCartData,
} = require("../controllers/SendMailControllers");

const router = Router();

router.get("/get", getTasks);

router.get("/catedata_get", getCategoryTasks);
router.get("/itemdata_get", getItemTasks);


// router.post("/save", saveTask);

router.post("/category_id", getcate_item);
router.post("/user_signup", saveTask);
router.post("/user_data", getuser_data);
router.post("/add_to_cart", addtocart);
router.post("/getcartdata",getcartdata);
router.post("/pay_letter",getpay_letter);
router.post("/delete_cart",getdelete_cart);
router.post("/sendCartDataMail",sendCartData);





router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
