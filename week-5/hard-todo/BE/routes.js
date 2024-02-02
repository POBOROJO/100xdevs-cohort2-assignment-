const express = require("express");
const { getAllcards, addCard, updateCard, deleteCard } = require("./middleware");
const router = express.Router();

router.get("/",getAllcards);
router.post("/add",addCard);
router.put("/update/:id",updateCard);
router.delete("/delete/:id",deleteCard);

module.exports = router;