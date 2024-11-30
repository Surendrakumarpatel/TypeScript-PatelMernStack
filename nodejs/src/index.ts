import express,{Request, Response, NextFunction} from "express";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todo";

const app = express();
const PORT = 8080;


app.use(bodyParser.json());

app.use("/todos", todoRoutes);

// middlware to handle error any other request
app.use((err : Error, req : Request,res : Response,next : NextFunction) => {
    res.status(500).json({message:err.message});
})

app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
})



