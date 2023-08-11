import express from "express";
import morgan from "morgan";
import bp from "body-parser";


const {urlencoded, json} = bp;
const db =[];
const app = express();
app.use(urlencoded({extended:true}));
app.use(json());
app.use(morgan("dev"));

app.post("/", (req,res) =>{
    const newTodo = {
        id:Date.now(),
        text:req.body.text
    }

    db.push(newTodo);
    res.json(newTodo);
})

app.get("/todo", (req,res)=>{
    res.json(db);
});

app.listen(6000, ()=>{
    console.log(`Server on http://localhost:6000 `);
})