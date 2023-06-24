const taskRoutes= require('express').Router();
const taskData=require('../tasks.json');
const bodyparser=require('body-parser');
const path=require('path');
const fs=require('fs');
const bodyParser = require('body-parser');
const Validator=require('../Helpers/Validator');

taskRoutes.use(bodyparser.urlencoded({extended:false}));
taskRoutes.use(bodyParser.json());

taskRoutes.get('/',(req,res)=>{
    let tasks=taskData.tasks;
    tasks.sort((a, b) => new Date(b.CreatedOn) - new Date(a.CreatedOn));
    res.status(200).send(tasks);
})

taskRoutes.get('/:id',(req,res)=>{
    let tasks=taskData.tasks;
    let taskID=req.params.id;
    let result=tasks.filter(val=>val.id==taskID);
    if(result=="")
    {
        res.status(404).send("ID is not present");
    }
    res.status(200).send(result);
})

taskRoutes.get('/Priority/:level',(req,res)=>{
    let tasks=taskData.tasks;
    let tasklevel=req.params.level;
    if(tasklevel>=1 && tasklevel<=3){
    let result=tasks.filter(val=>val.Priority[0].Level==tasklevel);
    result.sort((a, b) => new Date(b.CreatedOn) - new Date(a.CreatedOn));
    res.status(200).send(result);
    }
    else{
        res.status(400).send("Invalid Priority selected")
    }
})

taskRoutes.delete('/:id',(req,res)=>{
    let tasks=taskData.tasks;
    let Data=taskData;
    let taskID=req.params.id;
    let idcheck=tasks.findIndex(val=>val.id==taskID);
    if(idcheck!=-1){
        let result=tasks.filter(val=>val.id!=taskID);
        Data.tasks=result;
        let writePath=path.join(__dirname,"..",'tasks.json');
        fs.writeFileSync(writePath, JSON.stringify(Data),{encoding:'utf8',flag:'w'});
        res.status(200).send("Task has been deleted  successfully..");
        }
    else{
        res.status(404).send("[Invalid] Please check the ID, provided ID is invalid/not present");
    }
})

taskRoutes.put('/:id',(req,res)=>{
    let tasks=taskData.tasks;
    let Data=taskData;
    let check =Validator.Validate(taskData, req.body)
    if(check==""){
        let taskID=req.params.id;
        let idcheck=tasks.findIndex(val=>val.id==taskID);
        if(idcheck==-1){
            res.status(404).send("[Invalid] Please check the ID, provided ID is invalid/not present");
        }
        else{
            const taskDetails=req.body;
            let result=tasks.filter(val=>val.id!=taskID);
            result.push(taskDetails);
            Data.tasks=result;
            let writePath=path.join(__dirname,"..",'tasks.json');
            fs.writeFileSync(writePath, JSON.stringify(Data),{encoding:'utf8',flag:'w'});
            res.status(200).send("Task has been updated successfully..");
        }  
        }
    else{
        res.status(404).send(check); 
    }
})

taskRoutes.post('/',(req,res)=>{
    const taskDetails=req.body;
    let check=Validator.Validate(taskData, taskDetails)
    let check2=Validator.validateid(taskData,taskDetails.id)
    if(check=="" && check2=="" )
    {
        let writePath=path.join(__dirname,"..",'tasks.json');
        let taskDataModified=taskData;
        taskDataModified.tasks.push(taskDetails);
        fs.writeFileSync(writePath, JSON.stringify(taskDataModified),{encoding:'utf8',flag:'w'});
        res.status(200).send("Task has been added  successfully..");
    }
    else{
        if(check2 !="")
        {
            res.status(404).send(check2); 
        }
        else{  
        res.status(404).send(check); 
        }
    }
    
})

module.exports=taskRoutes;