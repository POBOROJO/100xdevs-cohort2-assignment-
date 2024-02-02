import { useState } from 'react';
import { addCard,getAllcards } from '../api/index';
import { PropTypes } from 'react';

export default AddCard=({setCards})=>{
    const [formData, setFormData] = useState({
        name : "",
        description : "",
        interests : [],
        socials: {
            linkedin: "",
            twitter:"",
        },
    });

/*The [e.target.name] expression dynamically accesses the property in the state that matches the name attribute of the input field.
It updates that specific property with the new value entered by the user (e.target.value).
So, whether it's the "name," "description," "interests," or "socials," the handleChange function will correctly update the corresponding property in the formData state.  */

const handleChange = (e)=>{ // here e is the even, When the user types into an input field, the onChange event is triggered. 
    setFormData((prevData)=>{
        return{
            ...prevData,
            [e.target.name] : e.target.value
        }
    });
};

const handleSubmit = async(e)=>{
    e.preventDefault();
    /* //*e.preventDefault() - In the context of a form submission, it prevents the default action of navigating to a new page or reloading the current page.
    //*In the context of a link click, it prevents the default action of navigating to the URL specified in the href attribute. */
    try{
        await addCard(formData);

        const updateCards = await getAllcards();
        setCards(updateCards);

        setFormData({
            name: "",
            description: "",
            interests: [],
            socials: {
                linkedin: "",
                twitter:"",
            },
        });
    }
    catch(e){
        console.error("Error adding cards:",e.message);
    }
};

return (
    <div>
        <h2>Add Card</h2>
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name='name' value={formData.name} onChange={handleChange}/>

            <label>Description:</label>
            <input type="text" name='description' value={formData.description} onChange={handleChange}/>

            <label>Interests:</label>
            <ul>
                {formData.interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                ))}
            </ul>

            <label>LinkedIn:</label>
            <input type="text" name='socials.linkedin' value={formData.socials.linkedin} onChange={handleChange}/>

            <label>Twitter:</label>
            <input type="text" name='socials.twitter' value={formData.socials.twitter} onChange={handleChange}/>

            <button type="submit">Add Card</button>
        </form>
    </div>
);
};

AddCard.propTypes = {
    setCards: PropTypes.func.isRequired,
};
  
