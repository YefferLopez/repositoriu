import getConnection from "./../db/database.js"
const getCategorias = async (req, res) => {
    try {
        const connection = await getConnection();
        const [rows] = await connection.query("SELECT * FROM categorias");
        console.log(rows); 
        res.json(rows);
    } catch (error) {
        console.error("Error 500 en getCategorias:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

const postCategorias = async (req,res)=>{
    try {
        const {CategoriaNombre, Descripcion, Imagen} =req.body;

        const category = {CategoriaNombre,Descripcion,Imagen}
        
        const connection = await getConnection();
        
        const result = await connection.query("Insert Into categorias Set ?", category)

    res.json({result})

    } catch (error) {
        console.error("Error 500");
        
    }
}

const getCategory = async (req, res)=>{
    try {
        console.log(req.params);
        const {id} =req.params;

        const connection = await getConnection();
    const result = await connection.query("SELECT CategoriaID , CategoriaNombre, Descripcion , Imagen FROM categorias where CategoriaID = ?", id)
    res.json({result})
    } catch (error) {
        console.error("Error 500");  
    }
}

const deleteCategory = async (req, res)=>{
    try {
        console.log("Id borrada:",req.params);
        const {id} =req.params;

        const connection = await getConnection();
    const result = await connection.query("Delete FROM categorias where CategoriaID = ?", id)
    res.json({result})
    } catch (error) {
        console.error("Error 500");  
    }
}

const updateCategorias = async (req,res)=>{
    try {
        const {id} = req.params
        const {CategoriaNombre, Descripcion, Imagen} =req.body;

        const category = {CategoriaNombre,Descripcion,Imagen}
        
        const connection = await getConnection();
        
        const result = await connection.query("Update categorias Set ? where CategoriaID = ?", [category,id])

    res.json({result})

    } catch (error) {
        console.error("Error 500");
        
    }
}

export const methodHTTP = {
    getCategorias,
    postCategorias,
    getCategory,
    deleteCategory,
    updateCategorias
}