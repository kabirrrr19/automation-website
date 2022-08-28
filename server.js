import express from 'express';
import session from 'express-session';
import cookies from "cookie-parser";
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import router from './router.js';
import morgan from 'morgan';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;


// Morgan setup
// const __dirname = path.resolve();

const __dirname = path.resolve(path.dirname(""));

// Creating a morgan token
// morgan.token('id', function getId(req) {
//     return req.id;
// })
// app.use(assignId);

// let accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
//   flags: "a",
// });

// app.use(morgan(':id :method :status :url "HTTP/:http-version"'));
// app.use(
//   morgan(':id :method :status :url "HTTP/:http-version"', {
//     stream: accessLogStream,
//   })
// );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static('./public'));
app.use('/assets', express.static('./public/assets'));

app.use(
  session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
  })
);
  
  
app.use('/route', router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});
  
function assignId(req, res, next) {
  req.id = uuidv4();
  next();
};


app.listen(PORT, () => console.log(`Server started at https://localhost:${PORT}`));
