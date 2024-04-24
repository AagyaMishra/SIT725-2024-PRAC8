let collection = require('../models/foodItems');

const saveFoodOrder = (req, res) => {
    const title = req.body.title;
    const image = req.body.image;
    const subTitle = req.body.subTitle;
    const description = req.body.description;

    let newFood = {
        title: title,
        image: image,
        subTitle: subTitle,
        description: description
    }
    
    collection.insertItem(newFood);
    res.json({statusCode:200, data: newFood, message: 'Item added Successfully!!'});
    
}

const getFoodOrder = (req, res) => {
    collection.getAllItems((err, result) => {
        if (!err){
            res.json({statusCode:200, data:result, message: 'Get All items Successfully!!'});
        }
    });
}

const deleteFoodOrder = (req, res) => {
    let foodItem = req.body;
    collection.DeleteItem(foodItem);
    res.json({statusCode:200, data: foodItem, message: 'Item deleted Successfully!!'});
    
}

module.exports = {saveFoodOrder, getFoodOrder, deleteFoodOrder};