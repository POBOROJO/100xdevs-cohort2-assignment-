const { Card } = require("./db");



//* Server-side code in Express.js API

//read
const getAllcards = async(req,res,next) =>{
    try{
        const cards = await Card.find();
        res.status(201).json({
            cards
        })
        next();
    }
    catch(e){
        res.status(500).json({
            message: e.message
        })
    }
}

//create
const addCard = async(req,res,next)=>{
    try{
        const card = await Card.create(req.body);
        res.status(201).json({
            "message" : "Card added successfully"
        })
        next();
    }
    catch(e){
        res.status(500).json({
            message: e.message
        })
    }
}

//update
const updateCard = async (req, res, next) => {
    const { id } = req.params;

    try {
        const updatedCard = await Card.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedCard) {
            return res.status(404).json({ message: 'Card not found' });
        }
        res.status(201).json({
            updatedCard,
            "message": "Card updated successfully"
        });
        next();
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    }
}

//delete
const deleteCard = async (req,res,next)=>{
    const {id} = req.params;

    try{
        const deletedCard = await Card.findByIdAndDelete(id);
        if(!deletedCard){
            res.status(404).json({
                "message" : "Card not found"
            })
        }
        res.status(201).json({
            "message" : "Card deleted successfully"
        })
        next();
    }
    catch(e){
        res.status(500).json({
            message: e.message
        })
    }
}


module.exports = {
    getAllcards,
    addCard,
    updateCard,
    deleteCard
}