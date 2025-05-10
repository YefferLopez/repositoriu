/* function expression, que no van con la palabra reservada */
import app from "./app.js";
const main = () =>{
    app.listen(app.get("port"));
    console.log(`The company's super web server is runnig on port ${app.get("port")}`);
}

main();