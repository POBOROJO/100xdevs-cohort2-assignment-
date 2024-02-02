import axios from "axios";
const { getAllcards, addCard, updateCard, deleteCard } = require("../../BE/middleware");

const API_URL = "http://localhost:3000";

//* Client-side code in api.js

export async function getAllcards(){
    try {
        const response = await axios.get(`${API_URL}/`);
        return response.data;
    }
    catch(e){
        throw e;
    }
}

export async function addCard(cardData){
    try{
        const response = await axios.post(`${API_URL}/add`, cardData,{
            headers:{
                'Content-Type' : 'application/json',
            },
        });
        return response.data;
    }
    catch(e){
        throw e;
    }
}

export async function updateCard(cardId,cardData){
    try{
        const response = await axios.put(`$API_URL/update/${cardId}`, cardData,{
            headers : {
                'Content-Type' : 'application/json',
            }
        });
        return response.data;
    }
    catch(e){
        throw e;
    }
}

export async function deleteCard(cardId){
    try{
        const response = await axios.delete(`${API_URL}/delete/${cardId}`);
        return response.data;
    }
    catch(e){
        throw e;
    }
}