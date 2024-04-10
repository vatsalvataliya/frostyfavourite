const nodemailer = require("nodemailer");
const order_receipt = require("../models/OrderDetail");
const Addtocart = require("../models/CartModel");
const paycartdata = require("../models/PayCartModel");
// const client = new MongoClient(process.env.MONGO_URI);
const stripe = require("stripe")("sk_test_51P2zgcSIgQtCn65OYs8kE8JVEQ2Y8h3S4x3ArOeKq2Exyuq3xhqdK8fAKETDTwDZFgjARDQsBUbT1cLLNIeXKrCt00LsXmoBcC")

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
       success_url: 'https://frostyfavourite.epizy.com/',
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