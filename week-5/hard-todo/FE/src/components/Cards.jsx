import React, { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types';
import './Cards.css'
import { getAllcards ,deleteCard, updateCard } from '../../api';
import { AddCard } from '../components/AddCard.jsx';


export default Cards = ({setCards})=>{
  const [cards, setCardsState] = useState([]);

  useEffect(()=>{
    const getCards = async ()=>{
      const cardsData = await getAllcards();
      setCardsState[cardsData];
    };

    getCards();
  },[setCards]);

  const handleUpdateCard = async (cardId, updatedData)=>{
    try{
      await updateCard(cardId,updatedData);
      const updateCards = await getAllcards();
      setCardsState(updateCards);
    }catch(e){
      console.error("Error updating cards:",e.message);
    }
  };

  const handleDeleteCard = async (cardId)=>{
    try{
      await deleteCard(cardId);
      const updateCard = await getAllcards();
      setCardsState(updateCard);
    }
    catch(e){
      console.error("Error deleting cards:",e.message);
    }
  };

  return(
    <div>
      <h2>Cards</h2>
      {cards.map((card)=>{
        return(
          <div key={card._id}>
            <p>Name : {card.name}</p>

            <p>Description : {card.description}</p>

            <p>Interest: {card.interests}</p>

            <p>LinkedIn : {card.socials.linkedin}</p>

            <p>Twitter : {card.socials.twitter}</p>

            <button onClick={()=>{
              handleUpdateCard(card._id,{
                name: formData.name,
                description: formData.description,
                interests: [formData.interests],
                socials: {
                  linkedin: formData.socials.linkedin,
                  twitter: formData.twitter,
                }
              })
            }}>Update</button>

            <button onClick={()=>{
              handleDeleteCard(card._id)
            }}>Delete</button>
          </div>
        )
      })}
    </div>
  );
};

Cards.propTypes = {
  setCards: PropTypes.func.isRequired,
};


