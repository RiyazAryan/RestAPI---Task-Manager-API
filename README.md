## Title and Description

REST API - Task Manager API

API calls for CRUD operations.

This API call is used to create, Read, Update, Delete tasks. It has the local host 9999 where Read Operations can be done and for any of the updation or deletion CURL or Postman has to be installed. The URL is as shown-http://localhost:9999/. 

## Installation

Steps of installation.
1. Copy the folder to any path.
2. Open the folder in Visual Studio Code.
3. Once done Open Terminal in Visual Studio code and install all pre requisites.
4. npm install command in terminal
5. The Src will have all required codes.
6. Node has to be installed.
7. Run node Src/app.js
8. If you see Server is successfully started you are ready to use.
./Screenshots/Screenshot1
9.Open the URL is browser. You will find Welcome message.

## API call Formats

All API calls
Implement a RESTful API with the following endpoints:

1. GET /tasks: Retrieve all tasks.--http://localhost:9999/tasks - This is provide data in sorted order based on Created date.
2. GET /tasks/:id: Retrieve a single task by its ID.--http://localhost:9999/tasks/1  (Id is type number)
3. POST /tasks: Create a new task.--http://localhost:9999/tasks -need Curl or Postman.Below provided the example of how the JSON has to be:
   
    {
        id: number;
        Title: string;
        Description: string;
        CreatedOn: string;
        CompletionStatus: boolean;
        Priority: {
            Level: number;
            };
    }
    ID: It has to be unique.
    Title: Task Title.
    Descriprion: Task Description.
    CreatedOn: Date om which the task iscreated.
    CompletionStatus: Task Completion status(Boolean),
    Level: The priority of the task
            1-High
            2-Medium
            3-Low
   
   example:{
        "id": 1,
        "Title": "First Task",
        "Description": "The First task created",
        "CreatedOn": "2022-01-23",
        "CompletionStatus": false,
        "Priority": [
            {
                "Level": 2
            }
        ] 
    }
4. PUT /tasks/:id: Update an existing task by its ID.--http://localhost:9999/tasks/1 (Id is type number)-need Curl or Postman
5. DELETE /tasks/:id: Delete a task by its ID. --http://localhost:9999/tasks/1 (Id is type number)-need Curl or Postman
6. GET /tasks/priority/:level. This will provide data based on Priority and the data will be sorted by Date.--http://localhost:9999/tasks/Priority/1         (Level  is type number)

## Validations

POST - Create Task

1. Unique ID - ID has to be unique.
2. Fields - No fields are to be left empty.
3. Boolean - CompletionStatus is type Boolean.

Put - Update Task

1. ID - To update ID has to be present in JSON. 
2. Fields - No fields are to be left empty.
3. Boolean - CompletionStatus is type Boolean.

## Screenshots

1. Post
    a. Add URL in Postman            ## ./Screenshots/Post1
    b. Click on Send.
    c. Screenshot will be as shown   ## ./Screenshots/Post2
    d. Validation Errors
        ID is not unique             ## ./Screenshots/PostUniqueID
        All Fields are to be present   ## ./Screenshots/PostFields
2. Get
    Sorted by Date                   ##./Screenshots/GetSorted
3. Get by Priority
    This will be in sorted with Created date(CreatedOn) ## ./Screenshots/PrioritySorteddate
    Invalid Priority                   ##./Screenshots/InvalidPriority
4. Get by ID
    Success Get                      ## ./Screenshots/Get
    ID id invalid                    ## ./screenshots/PostId 
5. Put by ID
    Success Put                      ## ./Screenshots/Put
    Has same validations as POST but Unique is not checked.
6. Delete by ID
    Success Delete                   ## ./Screenshots/Delete
    Invalid ID                       ## ./Screenshots/DeleteInvalid