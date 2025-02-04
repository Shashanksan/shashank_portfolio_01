import React from 'react'

function Contact() {
  return (
    <div className='contact_container'>
      <div className="contact_main">
        <h1 className='contact_main_heading' >contact</h1>
<span className='contact_main_smallLine'>  </span>         <p className='contact_main_lines'> Contact
Feel free to Contact me by submitting the form below,
and I will get back to you as soon as possible</p>

       </div>
        <div className="contact_container_form">
          <form action=" https://api.web3forms.com/submit"  method="POST" >
            <input type="hidden" name="access_key" value="605c373d-3703-4314-8a17-9beec00e31c1" />
            <div className='name'>
            <label htmlFor="name">name</label>
            <input type="text"  id =" text" name='name' placeholder='enter your name' />
            </div>
            <div className='emial'>
            <label htmlFor="email">email</label>
            <input type="email" id='email' name='email' placeholder='enter your email'  />
            </div> 
            <div className='message'>
            <label htmlFor="message">message</label>
           <textarea name="message" id="" placeholder='enter the messgae'></textarea>
            </div>
            <button  id="button"type='submit' >submit</button>
          </form>
        </div>
       
    </div>
  )
}

export default Contact
