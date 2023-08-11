const nodemailer = require("nodemailer");
const order_receipt = require("../models/OrderDetail");
const Addtocart = require("../models/CartModel");

module.exports.sendCartData = async(req, res) => {
  const { Auth_id,Name,Email,Number,Address,Cart_data,Total } = req.body;
  const Usertasks = await Addtocart.find();



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

// for (let index = 0; index < Cart_data.length; index++) {
//     // const element = array[index];
//     item_name.push(
//         "<div style='border:1px solid black;width:80%;height:30%;background-color: gray;text-align: center;display: flex;padding: 0.5rem;justify-content: space-between;padding-right: 10%;border-radius: 10px;'>"+
//         "<div>"+
//         "<img style='width:70%;height:95%;border-radius:10px;' src="+ Cart_data[index].Image +">"+
//         "</div>"+
//         "<div style='padding: 1rem;'>"+
//             "<table>"+
//                 "<thead>"+
//                     "<th><h3>"+ 
//                     Cart_data[index].Item_name + 
//                     "</th></h1>"+
//                 "</thead>"+
//                 "<tbody>"+
//                     "<td><h4>"+ 
//                     Cart_data[index].Price +
//                     "</td></h2>"+
//                 "</tbody>"+
//             "</table>"+
//         "</div>"+
//         "</div>");
//     // item_price.push(Cart_data[index].Price);
//     total_price += parseInt(Cart_data[index].Price);

// } 

for (let index = 0; index < Cart_data.length; index++) {
    // const element = array[index];
    item_name.push(
            "<div style='padding: 0.1rem;'>"+
              "<h5 style='display:flex;justify-content:space-between;'>"+
                "<div>"+Cart_data[index].Item_name+"("+Cart_data[index].Item_qty+")</div>"+
                "<div></div>"+
                "<div style='margin-left:81%;'>"+Cart_data[index].Price+"</div>"+     
              "</h5>"+
            "</div>"  
        );

    //     <div>
    //     <div>
    //       <h3 className='data'>
    //         <div>Restaurent Name </div>
    //         <div></div>
    //         <div>Frosty Favourite</div>     
    //       </h3>
    //     </div>
    //     <div>
    //       <h3 className='data'>
    //         <div>Coustomer Name</div>
    //         <div></div>
    //         <div>{index.Name}</div>     
    //       </h3>
    //     </div>
    //     <div>
    //       <h3 className='data'>
    //         <div>Contact Number</div>
    //         <div></div>
    //         <div>{index.Number}</div>     
    //       </h3>
    //     </div>
    //     <div>
    //       <h3 className='data'>
    //         <div>Email</div>
    //         <div></div>
    //         <div>{index.Email}</div>     
    //       </h3>
    //     </div>
    //     <div>
    //       <h3 className='data'>
    //         <div>Address</div>
    //         <div></div>
    //         <div>{index.Address}</div>     
    //       </h3>
    //     </div>
    //   </div>

{/* <div>
<h3 className='data'>
  <div>Total Amount</div>
  <div></div>
  <div>{index.Total}</div>     
</h3>
</div> */}
    // item_price.push(Cart_data[index].Price);
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
                    "<div style='margin-left:77%;'>"+total_price+"</div>"+     
                "</h5>"+
            "</div>"+ 
        "</div>"+
        "</div>"+
        "</div>"
        
        };
        var Cart_Id = [];
        for (let i = 0; i < Usertasks.length; i++) {
          const UserId = Usertasks[i].User_Id;
          // res.send(UserId);
          if(UserId == Auth_id){
          Cart_Id.push(Usertasks[i])
          }
       }

        order_receipt.create({ Auth_id,Name,Email,Number,Address,Cart_data,Cart_Id,Total })
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