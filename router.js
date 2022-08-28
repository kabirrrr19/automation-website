import express from 'express';
import path from 'path';
import cookieParser from "cookie-parser";
const router = express.Router();
import shortid from 'shortid';
import Razorpay from "razorpay";

router.use(cookieParser());

const __dirname = path.resolve();

const razorpay = new Razorpay({
  key_id: "rzp_test_vUKeh9GnlhSIOV",
  key_secret: "sY3IvwwCXwbBxntGPIGscpWB",
});


router.post("/razorpay", async function (req, res) {
  // console.log("create orderId request : ", req.body);
  // use only when in live mode, in test mode it is null

  var options = {
    amount: 4971000, // amount in the smallest currency unit
    currency: "INR",
    receipt: shortid.generate(),
  };
  // orders.create returns us a promise
  try {
    const response = await razorpay.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
});




// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });



router.post('/login', (req, res) => {
     const username = req.body.username;
     const password = req.body.password;
     if ( username === "Admin" && password === "admin123")
      {
       req.session.user = req.body.username;
       res.sendFile(path.join(__dirname, "/views/home.html"));
     } else {
       res.status(204).send();
     }
})



// router.post("/pay", (req, res) => {
//   console.log("create orderId request : ", req.body);
//   var options = {
//     amount: 100, // amount in the smallest currency unit
//     currency: "INR",
//     receipt: "order_rcptid_11",
//   };
//   console.log("ye kya ho rha hai");
//   instance.orders.create(options, function (err, order) {
//     console.log(order);
//     console.log("bhagean pay na karaye");
//     res.send({ orderId: order.Id });
//   });
// });

// router.post("/api/payment/verify", (req, res) => {
//   let body =
//     req.body.response.razorpay_order_id +
//     "|" +
//     req.body.response.razorpay_payment_id;

//   var crypto = require("crypto");
//   var expectedSignature = crypto
//     .createHmac("sha256", "3mAr0Vr2ywRJwnca4ONBa8de")
//     .update(body.toString())
//     .digest("hex");
//   console.log("sig received ", req.body.response.razorpay_signature);
//   console.log("Ho gaya bhaiaiaiai");
//   console.log("sig generated ", expectedSignature);
//   var response = { signatureIsValid: "false" };
//   if (expectedSignature === req.body.response.razorpay_signature)
//     response = { signatureIsValid: "true" };
//   res.send(response);
// });

router.get('/shopping', (req, res) => {
     if (req.session.user === "Admin") {
          res.sendFile(path.join(__dirname, "/views/products.html"))
     }
     else {
          res.sendFile(path.join(__dirname, "/views/invalidRequest.html"));
     }
})

router.get('/home', (req, res) => {
    if (req.session.user === "Admin") {
      res.sendFile(path.join(__dirname, "/views/home.html"));
    } else {
        res.sendFile(path.join(__dirname, "/views/invalidRequest.html"));
    }
});

router.get('/success', (req, res) => {
  if (req.session.user === "Admin") {
    res.sendFile(path.join(__dirname, "/views/PaymentsPage.html"));
  } else {
    res.sendFile(path.join(__dirname, "/views/invalidRequest.html"));
  }
})

// --------------------------------------------
router.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    console.log(err);
  });
     res.sendFile(path.join(__dirname, "/views/index.html"));
});

router.get('/login', (req, res) => {
     res.sendFile(path.join(__dirname, "/views/index.html"));
})

// --------------------------------------------


// ----------------------Product routes----------------------------------------------------------------
router.get('/macbook', (req, res) => {
      if (req.session.user === "Admin") {
        res.sendFile(path.join(__dirname, "/views/productspage/productmacbook.html"));  
      } else {
       res.sendFile(path.join(__dirname, "/views/invalidRequest.html")); 
      }
});

router.get("/alienware", (req, res) => {
     if (req.session.user === "Admin") {
       res.sendFile(path.join(__dirname, "/views/productspage/productAlienware.html") );
     } else {
       res.sendFile(path.join(__dirname, "/views/invalidRequest.html")); 
     }
     
});

router.get("/lenovo", (req, res) => {
     if (req.session.user === "Admin") {
      res.sendFile(path.join(__dirname, "/views/productspage/productLenovo.html"));
     } else {
       res.sendFile(path.join(__dirname, "/views/invalidRequest.html")); 
     }
});

router.get("/asus", (req, res) => { 
     if (req.session.user === "Admin") {
       res.sendFile(path.join(__dirname, "/views/productspage/productAsus.html"));
     } else {
       res.sendFile(path.join(__dirname, "/views/invalidRequest.html")); 
     }
});

router.get("/surface", (req, res) => {
     if (req.session.user === "Admin") {
          res.sendFile(path.join(__dirname, "/views/productspage/productSurface.html"));
     } else {
       res.sendFile(path.join(__dirname, "/views/invalidRequest.html")); 
     }
});

router.get("/iphone", (req, res) => {
     if (req.session.user === "Admin") {
          res.sendFile(path.join(__dirname, "/views/productspage/productIphone.html"));
     } else {
       res.sendFile(path.join(__dirname, "/views/invalidRequest.html")); 
     }
});

router.get("/samsung", (req, res) => {
     if (req.session.user === "Admin") {
          res.sendFile(path.join(__dirname, "/views/productspage/productSamsung.html"));
     } else {
       res.sendFile(path.join(__dirname, "/views/invalidRequest.html")); 
     }
});

router.get("/iwatch", (req, res) => {
     if (req.session.user === "Admin") {
          res.sendFile(path.join(__dirname, "/views/productspage/productIwatch.html"));
     } else {
       res.sendFile(path.join(__dirname, "/views/invalidRequest.html")); 
     }
});


export default router;