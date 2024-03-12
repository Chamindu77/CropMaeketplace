import React, { useState } from 'react';
import './ReviewPage.css';
//import {Link} from "react-router-dom";
import NavbarRegistered from "../NavbarRegistered/NavbarRegistered";
import FooterNew from "../Footer/FooterNew";

const ReviewPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    console.log('Form Submitted!');
  };

  return (
    <div>
        <NavbarRegistered />
    <div className='Review'>
      <div className="leftSide"
        style={{ backgroundImage: `url('https://nakednutrition.com/cdn/shop/articles/Wheat-Image-2_720x.jpg?v=1597660824')` }}>
      </div>
      <div className="rightSide">
        

        <form id="Review-form" onSubmit={handleSubmit}>

        <h1> Review Us </h1>
        
          <label htmlFor="username">Username</label>
          <input name="username" placeholder="Enter your username..." type="text" onChange={(e) => setUserName(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter your email..." type="email" onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="comment">Comment</label>
          <textarea
            rows="6"
            placeholder="Enter your comment..."
            name="comment"
            required
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button type='submit' onClick={handleSubmit}> Send </button>
          
        </form>
      </div>
    </div>
    <FooterNew />
    </div>
  )
};

export default ReviewPage