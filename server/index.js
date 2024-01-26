import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import session from "express-session";

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

//set up end points here

ViteExpress.listen(app, PORT, () => console.log(`Listening on ${PORT}, go to http://localhost:4545`))