import React from 'react'
import { PropTypes } from 'prop-types';
import './Cards.css'

export default function Bcards(props){
  const {name, description, interests, socials } = props;
  return (
    <div className="card">
      <div className="card-header">
        <h2 style={{color:'black'}}>{name}</h2>
        <p>{description}</p>
      </div>

      <div className="card-body">
        <h3 style={{color:'black'}}>Interests</h3>
        <ul className="interestList">
          {interests && interests.map((interest,index)=>{
            return (
              <li key = {index}>{interest}</li>
            )
          })}
        </ul>
        <div className="socialList">
          {socials && socials.map((social,index)=>{
            return (
              <a key={index} href={social.link}><button className="button">{social.name}</button></a>
            )
          })}
        </div>
      </div>
    </div>
  )  
};

Bcards.defaultProps = {
  name: "Lokeshwar",
  description : " A TA in the 100xDevs Cohort 2.0",
  interests : ["Ionic", "Open Source", "App Dev"],
  socials : [{
    name: "LinkedIn",
    link: "#"
  },{
    name: "Twitter",
    link: "#"
  }]
};

Bcards.propTypes = {
  name : PropTypes.string,
  description: PropTypes.string,
  interests: PropTypes.arrayOf(PropTypes.string),
  socials: PropTypes.arrayOf(PropTypes.object)
};