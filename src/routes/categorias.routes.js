import {Router} from "express";
import { methodHTTP as categoriaController} from "../controllers/categoria.controllers.js";

/* creamos el enrutador*/
const router = Router();

/*metodo http get, configuracion respuesta desde server */
router.get("/", categoriaController.getCategorias)
router.post("/", categoriaController.postCategorias)
router.get("/:id", categoriaController.getCategory)
router.put("/:id", categoriaController.updateCategorias)

/* hacemos disponible al router en toda la aplicacion */
export default router;