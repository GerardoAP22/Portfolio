import React, { useRef }  from 'react';


function Contact() {
  return (
    <div id='contact' className='contact-comp'>
      <form className='form'  method='POST' action='https://getform.io/f/26a77870-c47f-4e24-82ec-e2732feb4a41'>
        <div className='contact-container'>
          <p className='contact-title'>Contact</p>
        </div>
        <input className='form-name' placeholder='Name' type="text" name="name" />
        <input className='form-email' placeholder='Email' type="email" name="email" />
        <textarea className='form-message' placeholder='Message' rows='10' name="message" />
        <button className='submit-btn' type="submit" value="Send">Submit</button>
      </form>
        
    </div>
  )
}

export default Contact