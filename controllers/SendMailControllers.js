const nodemailer = require("nodemailer");

module.exports.sendCartData = (req, res) => {
  const { Auth_id,Name,Email,Subject,Message,Cart_data } = req.body;


const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: "vatsalvataliya00@gmail.com",
        pass: "mhncudbqcehokkxj"
    }
});

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
        "<div style='border:1px solid black;width:80%;height:30%;background-color: gray;text-align: center;display: flex;padding: 0.5rem;justify-content: space-between;padding-right: 10%;border-radius: 10px;'>"+
        "<div>"+
        "<img style='width:70%;height:95%;border-radius:10px;' src="+ Cart_data[index].Image +">"+
        "</div>"+
        "<div style='padding: 1rem;'>"+
            "<table>"+
                "<thead>"+
                    "<th><h3>"+ 
                    Cart_data[index].Item_name + 
                    "</th></h1>"+
                "</thead>"+
                "<tbody>"+
                    "<td><h4>"+ 
                    Cart_data[index].Price +
                    "</td></h2>"+
                "</tbody>"+
            "</table>"+
        "</div>"+
        "</div>");
    // item_price.push(Cart_data[index].Price);
    total_price += parseInt(Cart_data[index].Price);

}  
const mailoptionsuser = {
        from: "vatsalvataliya00@gmail.com",
        to: Email,
        subject: "Frosty Favourite",
        html: 
        "<div style='text-align: center;justify-item: center;'>"+
        "<div><h1> Frosty Favourite </h1></div>"+
        "<div style='margin-left:5%;'>"+ item_name +"</div><br/>"+
        "<div><h3>Total Price : "+ total_price +"</h3></div>"+
        "</div>"
        // "<div>"+ item_price +"</div>"
        // "<div><script> for (let i of "+item_name+"){"+item_name+"[i]}</script></div>"


        //  "<h1>Item_Name : "+ Cart_data[index].Item_name + "</h1><br/>"+
        //     "<h1>Item_Name : "+ Cart_data[index].Price + "</h1><br/>"
        //  Cart_data.forEach(element => {
            //     "<h1>"+ element.Item_name +"</h1><br/>"+
            //     "<h1>"+ element.Price +"</h1><br/>"
            //  }
        };


transporter.sendMail(mailoptionsuser, function(error, info){
    if(error){
        console.log(error);
        res.send(error);
    }else{
        console.log("Email Send:" + info.response);
        res.send("Cart Data Send Successfully ... ...");

    }
})
};