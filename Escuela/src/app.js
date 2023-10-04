import express from "express";
import indexRoutes from "./routes/indexRoutes";
import exphbs from "express-handlebars";
import path from "path"; // Este es el modulo de node
import morgan from "morgan";


const app = express();
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

//middlewar intermediario entre cliente y servidor
app.use(morgan('dev'));// salida en consola GET /update 304 17.283 ms - -

//Esta linea sirve para almacenar datos salida en consola POST /asignatura/agregar 200 22.397 ms - 10
app.use(express.urlencoded({extended: false}));
//Estas son las rutas
app.use(indexRoutes);

export default app; //exporto el objeto app
