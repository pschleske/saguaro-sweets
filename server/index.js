import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import session from "express-session";

import productCtrl from './controller/productCtrl.js';
import authCtrl from "./controller/authCtrl.js";

const app = express();
const PORT = 4545;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());
app.use(session({
    secret: 'helloworld',
    saveUninitialized: false,
    resave: false
}))

const { allProducts, updateProduct } = productCtrl;
const { register, login, logout } = authCtrl;

//set up end points here
app.get('/api/products', allProducts);
app.put('/api/products/:id', updateProduct);


ViteExpress.listen(app, PORT, () => console.log(`Listening on ${PORT}, go to http://localhost:4545`))