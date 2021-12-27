import express from 'express';
import path from 'path';
import cookieParser from "cookie-parser";
const router = express.Router();

router.use(cookieParser());

const __dirname = path.resolve();



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