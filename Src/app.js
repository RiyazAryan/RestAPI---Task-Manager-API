const express=require('express');
const cr=require('cli-color');
const routes=require('express').Router();
const cors=require('cors');
const bodyparser =require('body-parser');
const tasksinfo=require('./routes/tasksinfo');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(routes)

const PORT = 9999;

routes.get('/',(req,res) =>
{
    res.status(200).send("Welcome to tasks status Report");
});

routes.use('/tasks', tasksinfo);

app.listen(PORT, (err)=>{
    if(!err)
    {
        console.log(cr.green("Server is successfully started"));
    }
    else
    {
        console.log(cr.red("Some errorhas occured"));
    }
})

