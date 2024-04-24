let client = require('../mongoConnection');

let collections = client.db().collection('Sections');

function getAllItems(callback){
    collections.find({}).toArray(callback);
}

function insertItem(newFood){
    collections.insertOne(newFood, (err, result) => {
        if(err){
            console.error("Error in Inserting Item in DB", err);
        }else{
            console.log("Inserted into DB Successfully!!");
            
        }
    });
}

function DeleteItem(foodItem){
    collections.deleteOne(foodItem, (err, result) => {
        if(err){
            console.error("Error in Inserting Item in DB", err);
        }else{
            console.log("Deleted Item Successfully!!");
            
        }
    });
}

module.exports = {getAllItems, insertItem, DeleteItem};