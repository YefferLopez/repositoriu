/*importamos al framework express */
import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";
import cors from "cors"
/* asignamos a app toda funcionalidad para mi server web */
const app = express();

app.use(cors())
/*setear un puerto a mi web server */
app.set("port", 5000)
/*Middleware*/
app.use(express.json())
/* routes*/
app.use("/api/categorias",categoriaRoutes)


/* hacemos disponible a mi server app para toda la aplicacion */
export default app;