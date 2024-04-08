const nodemailer = require("nodemailer");
const order_receipt = require("../models/OrderDetail");
const Addtocart = require("../models/CartModel");
const paycartdata = require("../models/PayCartModel");
// const client = new MongoClient(process.env.MONGO_URI);
const stripe = require("stripe")("sk_test_51P2zgcSIgQtCn65OYs8kE8JVEQ2Y8h3S4x3ArOeKq2Exyuq3xhqdK8fAKETDTwDZFgjARDQsBUbT1cLLNIeXKrCt00LsXmoBcC")
module.exports.sendCartData = async(req, res) => {
  const { Auth_id,Name,Email,Number,Address,Cart_data,Total } = req.body;
  const Usertasks = await Addtocart.find();
  const order_data = await paycartdata.find();




const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: "vatsalvataliya00@gmail.com",
        pass: "iubnmgeqwqmpsruu"
    }
});
// mhncudbqcehokkxj
// const mailoptions = {
//     from: Email,
//     to: "vatsalvataliya00@gmail.com",
//     subject: "Frosty Favourite",
//     text:
//     "Name : " + Name + 
//     "Subject : " + Subject + 
//     "Message : "+ Message
    
// };

// transporter.sendMail(mailoptions, function(error, info){
//     if(error){
//         console.log(error);
//         res.send(error);
//     }else{
//         console.log("Email Send:" + info.response);
//         res.send("Message Send Successfully ... ...");

//     }
// })

// const data = () => {
//     for (let index = 0; index < Cart_data.length; index++) {
//         "<h1>Item_Name : "+ Cart_data[index].Item_name + "</h1><br/>"
//         "<h1>Item_Name : "+ Cart_data[index].Price + "</h1><br/>"
        
//     }
//     // Cart_data.forEach(element => {
        
//     //     "Item_Name : "+ element.Item_name +
//     //     "Item_Price : "+ element.Price
    
//     // })
// }
var item_name =  [];
var item_price =  [];
var total_price = 0;


for (let index = 0; index < Cart_data.length; index++) {
    // const element = array[index];
    item_name.push(
            "<div style='padding: 0.1rem;'>"+
              "<h5 style='display:flex;justify-content:space-between;'>"+
                "<div>"+Cart_data[index].Item_name+"("+Cart_data[index].Item_qty+")</div>"+
                "<div></div>"+
                "<div style='margin-left:81%;'>Rs."+Cart_data[index].Price+"</div>"+     
              "</h5>"+
            "</div>"  
        );

    total_price += parseInt(Cart_data[index].Price);

}
const mailoptionsuser = {
        from: "vatsalvataliya00@gmail.com",
        to: Email,
        subject: "Frosty Favourite",
        html: 
        // "<style>#main h5{font-size: 300px;}</style>"+
        "<div id='main' style='text-align: center; width: 90%;justify-content: center;margin-left: 2%;padding-left: 5%;border: 1px solid black;border-radius: 10px;margin-top: 2%;'>"+
        "<div style='padding: 0.1rem;'>"+
        "<div style='padding: 0.1rem;'>"+
        "<div style='padding: 0.1rem;'>"+
            "<div style='padding: 0.1rem;'>"+
                "<h5 style='display: flex;justify-content: space-between;'>"+
                    "<div>Restaurent Name </div>"+
                    "<div></div>"+
                    "<div style='margin-left:71%;'>Frosty Favourite</div>"+     
                "</h5>"+
            "</div>"+
            "<div style='padding: 0.1rem;'>"+
                "<h5 style='display: flex;justify-content: space-between;'>"+
                    "<div>Coustomer Name</div>"+
                    "<div></div>"+
                    "<div style='margin-left:70%;'>"+Name+"</div>"+     
                "</h5>"+
            "</div>"+
            "<div style='padding: 0.1rem;'>"+
                "<h5 style='display: flex;justify-content: space-between;'>"+
                    "<div>Contact Number</div>"+
                    "<div></div>"+
                    "<div style='margin-left:72%;'>"+Number+"</div>"+     
                "</h5>"+
            "</div>"+
            "<div style='padding: 0.1rem;'>"+
                "<h5 style='display: flex;justify-content: space-between;'>"+
                    "<div>Email</div>"+
                    "<div></div>"+
                    "<div style='margin-left:73%;'>"+Email+"</div>"+     
                "</h5>"+
            "</div>"+
            "<div style='padding: 0.1rem;'>"+
                "<h5 style='display: flex;justify-content: space-between;'>"+
                    "<div>Address</div>"+
                    "<div></div>"+
                    "<div style='margin-left:75%;'>"+Address+"</div>"+     
                "</h5>"+
            "</div>"+
      "</div>"+
            "<div style='padding: 0.1rem;'><h3>Item Data</h3></div><hr style='width: 70%;margin-left: 10%;'/>"+
            "<div style='padding: 0.1rem;'>"+ item_name +"</div><hr style='width: 70%;margin-left: 10%;'/>"+
            "<div style='padding: 0.1rem;'>"+
                "<h5 style='display: flex;justify-content: space-between;'>"+
                    "<div>Total Amount</div>"+
                    "<div></div>"+
                    "<div style='margin-left:77%;'>Rs."+total_price+"</div>"+     
                "</h5>"+
            "</div>"+ 
        "</div>"+
        "</div>"+
        "</div>"
        
        };

        var Cart_Id = [];
        var CartId = [];
        var order_id = '';
        for (let i = 0; i < Usertasks.length; i++) {
          const UserId = Usertasks[i].User_Id;
          // res.send(UserId);
          if(UserId == Auth_id){
          Cart_Id.push(Usertasks[i])
          CartId.push(Usertasks[i]._id)
          }
       }

    //    for (let i = 0; i < order_data.length; i++) {
    //     const cart_data = order_data[i].Cart;
    //     // res.send(UserId);
    //       for (let j = 0; j < cart_data.length; j++) {
    //       const UserId = cart_data[j].User_Id;
    //       const Cart_Id = cart_data[j]._id;
    //         if(UserId == Auth_id){
    //           for (let k = 0; k < Usertasks.length; k++) {
    //             const UserId = Usertasks[k].User_Id;
    //             const Cart_id = Usertasks[k]._id;

    //             if(UserId == Auth_id && Cart_Id == Cart_id){
    //               var order_id = order_data[i]._id;
    //             }
    //           }
    //           // Cart_Id.push(Usertasks[i])
    //           // var CartId = Usertasks[i]._id;
    //         }

    //       }
    //  }
    // for (let i = 0; i < order_data.length; i++) {
    //   const User_Id = order_data[i].Auth_id;
    //   if(User_Id == Auth_id){
    //     const latestEntry = await paycartdata.find({ sort: { _id: -1 } });
    //     var order_id = latestEntry._id;
    //   }
    // }

        order_receipt.create({ Auth_id,Name,Email,Number,Address,Cart_data,Cart_Id,Total,order_id })
        .then((data) => {
          console.log("Oredr Reciept Add Successfully...");
          res.status(201).send(data);
        })
        .catch((err) => {
          console.log(err);
          res.send({ error: err, msg: "Something went wrong on order Reciept!" });
        });

transporter.sendMail(mailoptionsuser, function(error, info){
    if(error){
        console.log(error);
        res.send(error);
        // alert(error);
    }else{
        console.log("Email Send:" + info.response);
        res.send({msg:"Cart Data Send Successfully ... ...",cart_item:Cart_data,total:total_price,name:Name,email:Email,address:Address,number:Number});

    }
})
};

module.exports.delete_order_detail = async(req, res) => {
    const { Auth_id } = req.body;
  
    const order = await order_receipt.find();
  
  
    // const Usertasks = await Addtocart.find();
//     var delete_data = [];
    for (let i = 0; i < order.length; i++) {
      const UserId = order[i].Auth_id;
//       // res.send(UserId);
//       var id = 0;
      if(UserId == Auth_id){
//         id = Usertasks[i]._id;
          order_receipt.findByIdAndDelete(order[i]._id)
          .then((data) => {
            console.log("Order receipt Delete Successfully...");
            // res.status(201).send(data);
          })
        .catch((err) => {
          console.log(err);
          // res.send({ error: err, msg: "Something went wrong!" });
        });
//         // delete_data.push()
      }
  }
//   res.send(order)
  
  };

module.exports.get_OrderDetail = async(req, res) => {
    const { Auth_id } = req.body;
  
    const order = await order_receipt.find();
  
  
    // const Usertasks = await Addtocart.find();
    var data = [];
    for (let i = 0; i < order.length; i++) {
      const UserId = order[i].Auth_id;
//       // res.send(UserId);
//       var id = 0;
      if(UserId == Auth_id){
        data.push(order[i])
    }
}
res.send(data)
//   res.send(order)
  
  };

  module.exports.sendContact = async(req, res) => {
    const { Auth_id,Name,Email,Subject,Message,Cart_data,Total } = req.body;
    const Usertasks = await Addtocart.find();
    const order_data = await paycartdata.find();
  
  
  
  
  const transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
          user: "vatsalvataliya00@gmail.com",
          pass: "iubnmgeqwqmpsruu"
      }
  });
  // mhncudbqcehokkxj
  const mailoptions = {
      from: Email,
      to: "vatsalvataliya00@gmail.com",
      subject: "Frosty Favourite",
      text:
      "Name : " + Name + 
      "Subject : " + Subject + 
      "Message : "+ Message
      
  };
  
  transporter.sendMail(mailoptions, function(error, info){
      if(error){
          console.log(error);
          res.send(error);
      }else{
          console.log("Email Send:" + info.response);
          res.send("Message Send Successfully ... ...");
  
      }
  })
  
  // const data = () => {
  //     for (let index = 0; index < Cart_data.length; index++) {
  //         "<h1>Item_Name : "+ Cart_data[index].Item_name + "</h1><br/>"
  //         "<h1>Item_Name : "+ Cart_data[index].Price + "</h1><br/>"
          
  //     }
  //     // Cart_data.forEach(element => {
          
  //     //     "Item_Name : "+ element.Item_name +
  //     //     "Item_Price : "+ element.Price
      
  //     // })
  // }
  
  };

//   function getRandomWholeNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   const randomWholeNumber = getRandomWholeNumber(5, 15); // Generates random integer between 5 and 15
//   console.log(randomWholeNumber);
module.exports.pay_now = async(req, res) => {
 const products = req.body;
 const total = req.body;
 const qty = req.body;


const data = products.body;

const lineItems = data.map((product) => ({
    price_data:{
        currency:"inr",
        product_data:{
            name:product.Item_name,
        },
        
        unit_amount:20*100,

    },
    quantity:2
}));

const session = await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/order',
    cancel_url: 'https://example.com/cancel',

  });

  
// const customer = await stripe.customers.create({
//     name: 'Jenny Rosen',
//     address: {
//       line1: '510 Townsend St',
//       postal_code: '98140',
//       city: 'Ahmedabad',
//       state: 'GJ',
//       country: 'IN',
//     },
//   });

  res.json({id:session.id})
  
  };