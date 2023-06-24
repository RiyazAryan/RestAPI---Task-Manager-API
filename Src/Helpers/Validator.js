class Validator{
    static validateid(JsonData,id){
        let valueFound=JsonData.tasks.some(el=>el.id===id);
        if(valueFound)
        {
            return ("ID has to be Unique");;
        }
        else{
            return "";
        }
    }
    static validatefields(JsonData){
        if(JsonData.Title=="" || JsonData.Description=="" || JsonData.CreatedOn=="" || JsonData.Priority.Level>3||JsonData.Priority.Level<1||(typeof(JsonData.CompletionStatus)!="boolean"))
        return false;
        else{
            return true;
        }
    }
    static allfields(JsonData)
    {
        if(JsonData.hasOwnProperty("id")&&
        JsonData.hasOwnProperty("Title")&&
        JsonData.hasOwnProperty("Description")&&
        JsonData.hasOwnProperty("CreatedOn")&&
        JsonData.hasOwnProperty("Priority")&&
        JsonData.hasOwnProperty("CompletionStatus")){
            return true;
        }
        return false;
    }
    static Validate(JsonData,newData)
    {
        if(this.allfields(newData))
        {
                if(this.validatefields(newData))
                {
                    return "";
                }
                else{
                    return ("One or more Fields are empty or Invalid")
                }
        }
        else{
            return ("All the fields are not present");
        }  
    }
}

module.exports=Validator;