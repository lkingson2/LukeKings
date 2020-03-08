import React from 'react'
import TextField from './TextField'
import '../Style/Contact.css'

/* <textarea placeholder="Message..."/> */
/*
const Contact = () => {
  return (
    <div className="Contact pa5">
      <div className='tc bg-white br3 pa3 ma2 dib bw2 shadow-5'>
        <div>
          <h1>Send Me a Message</h1>
          <form>
            <div className="pa3">
              <input type="text" name="name" placeholder="Full Name" className="text"/>
            </div>
            <div className="pa3">
              <input type="text" id="email" placeholder="Email" className="text"/>
            </div>
            <div className="pa3">
              <input type="text" id="message" placeholder="Message" className="text"/>
            </div>
            <input type="submit" value="Submit" className="submit"/>
          </form>
        </div>
      </div>
    </div>
  )
}
*/
const Contact = ({ Title }) => {
  return(
    <div className="Contact pa5">
      <div className='tc bg-white br3 pa3 ma2 dib bw2 shadow-5'>
        <div>
          <h1>{Title}</h1>
          <form>
            <div className="pb4"><TextField id="Name" label="Full Name" placeholder="Full Name" active={false}/> </div>
            <div className="pb4"><TextField id="Email" label="Email" placeholder="Email" active={false}/> </div>
            <div className="pb4"><TextField id="Message" label="Message" placeholder="Message" active={false}/> </div>
            <input type="submit" value="Submit" className="submit"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
