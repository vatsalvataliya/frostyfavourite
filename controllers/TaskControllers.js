const UserModel = require("../models/TaskModel");
const CategoryModel = require("../models/CategoryModel");
const ItemModel = require("../models/ItemModel");
const Addtocart = require("../models/CartModel");
const paycartdata = require("../models/PayCartModel");





module.exports.getTasks = async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
  // res.send('hiii');

};

module.exports.getCategoryTasks = async (req, res) => {
  const Catetasks = await CategoryModel.find();
  res.send(Catetasks);
  // res.send('hiii');

};

module.exports.getItemTasks = async (req, res) => {
  const Itemtasks = await ItemModel.find();
  res.send(Itemtasks);
  // res.send('hiii');

};

module.exports.saveTask = (req, res) => {
  const { F_Name,L_Name,Number,Email,Password,ConfirmPassword } = req.body;
  // const { L_name } = req.body;


  UserModel.create({ F_Name,L_Name,Number,Email,Password,ConfirmPassword })
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.getcartdata = async (req, res) => {
  const { Auth_id } = req.body;

  const Usertasks = await Addtocart.find();
  const Itemtasks = await ItemModel.find();
  

  var cart_item = [];
  for (let i = 0; i < Usertasks.length; i++) {
    const Item_id = Usertasks[i].Item_Id;
    const UserId = Usertasks[i].User_Id;

    // const password = UserTask[i].Password;

    if(UserId == Auth_id){
      //   // user_data.push(Usertasks[i])
      for (let j = 0; j < Itemtasks.length; j++) {
        const item_id = Itemtasks[j]._id;
        // const Item_id = Itemtasks[i]._id;
        
        
        // const password = UserTask[i].Password;
        
        if(Item_id == item_id){
          cart_item.push(Itemtasks[j])
        }
      }
    }
  }
  res.send({ cart_data: cart_item, cart_id: Usertasks });
  // res.send('hiii');

};

module.exports.getpay_letter = async (req, res) => {
  const { Auth_id } = req.body;

  const Usertasks = await Addtocart.find();


  // const Usertasks = await Addtocart.find();
  var Cart = [];
  for (let i = 0; i < Usertasks.length; i++) {
    const UserId = Usertasks[i].User_Id;
    // res.send(UserId);
    if(UserId == Auth_id){
    Cart.push(Usertasks[i])
    }
}
paycartdata.create({ Cart })
.then((data) => {
  console.log("Order Placed Successfully...");
  res.status(201).send(data);
})
.catch((err) => {
  console.log(err);
  res.send({ error: err, msg: "Something went wrong!" });
});
  // res.send({ cart_data: cart_item, cart_id: Usertasks );

};

module.exports.addtocart = async(req, res) => {
  const { Item_Id,User_Id } = req.body;

  const Itemtasks = await ItemModel.find();
  const Usertasks = await UserModel.find();


  // const { L_name } = req.body;
  // var user_data = [];
  // var item_data = [];

  // for (let i = 0; i < Usertasks.length; i++) {
  //   const User_id = Usertasks[i]._id;
  //   // const password = UserTask[i].Password;

  //   if(User_id == User_Id){
  //     user_data.push(Usertasks[i])
  //   }
  // }

  // for (let i = 0; i < Itemtasks.length; i++) {
  //   const item_id = Itemtasks[i]._id;
  //   // const password = UserTask[i].Password;

  //   if(Item_Id == item_id){
  //     item_data.push(Itemtasks[i])
  //   }
  // }
  

  Addtocart.create({ Item_Id,User_Id })
    .then((data) => {
      console.log("Add Cart Data Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.getuser_data = async (req, res) => {
  const { Email } = req.body;
 
  const UserTask = await UserModel.find();
  var array = [];
  for (let i = 0; i < UserTask.length; i++) {
    const Email_id = UserTask[i].Email;
    // const password = UserTask[i].Password;

    if(Email_id == Email){
      array.push(UserTask[i])
    }
  }
  res.send(array);
  
};

module.exports.getcate_item = async (req, res) => {
  const { Cate_id } = req.body;
  // const { L_name } = req.body;


  // TaskModel.create({ F_name,L_name,Number,Email,Password })
  //   .then((data) => {
  //     console.log("Saved Successfully...");
  //     res.status(201).send(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.send({ error: err, msg: "Something went wrong!" });
  //   });
  const Itemtasks = await ItemModel.find();
  var array = [];
  for (let i = 0; i < Itemtasks.length; i++) {
    const element = Itemtasks[i].Cate_id;
    if(element == Cate_id){
      array.push(Itemtasks[i])
    }
  }
  res.send(array);
  
};

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  TaskModel.findByIdAndUpdate(id, { task })
    .then(() => res.send("Updated successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;

  TaskModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.getdelete_cart = async(req, res) => {
  const { Auth_id } = req.body;

  const Usertasks = await Addtocart.find();


  // const Usertasks = await Addtocart.find();
  var delete_data = [];
  for (let i = 0; i < Usertasks.length; i++) {
    const UserId = Usertasks[i].User_Id;
    // res.send(UserId);
    var id = 0;
    if(UserId == Auth_id){
      id = Usertasks[i]._id;
        Addtocart.findByIdAndDelete(id)
        .then((data) => {
          console.log("Order Place And Delete Successfully...");
          // res.status(201).send(data);
        })
      .catch((err) => {
        console.log(err);
        // res.send({ error: err, msg: "Something went wrong!" });
      });
      // delete_data.push()
    }
}
res.send('Order Place And Delete Successfully...')

};
