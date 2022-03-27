import React, {useState} from 'react'

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const onNameChange = (e) => {
    setName(e.target.value);
  }

  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const onIssueChange = (e) => {
    setIssue(e.target.value);
  }

  const handleSubmit = () => {
    alert(`Email: ${email} \nName: ${name} \nPhone: ${phone} \nIssue: ${issue}`);
  }

  return (
    <div>
      <main className="pa4 black-80">
        <form className="measure center" onSubmit={handleSubmit}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 white fw6 ph0 mh0">Contact Us</legend>
            <div className="mt3">
              <label className="db white fw6 lh-copy f6" htmlFor="name">First Name</label>
              <input className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" type="text" name="email-address"  id="email-address" onChange={onNameChange}/>
            </div>
            <div className="mv3">
              <label className="db white fw6 lh-copy f6" htmlFor="email">Email</label>
              <input className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" type="text" name="email" id="email" onChange={onEmailChange}/>
            </div>
            <div className="mv3">
              <label className="db white fw6 lh-copy f6" htmlFor="phone">Phone Number</label>
              <input className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" type="text" name="phone"  id="phone" onChange={onPhoneChange}/>
            </div>
            <div className="mv3">
              <label className="db white fw6 lh-copy f6" htmlFor="phone">The issue you are facing:</label>
              <textarea id="issue" name="issue" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc" onChange={onIssueChange}></textarea>
            </div>
          </fieldset>
          <div className="">
            <input className="b white ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="Submit" />
          </div>
          <div className="lh-copy mt3 white">
            For further queries, feel free to drop a message or call us on `PhoneNumber`
          </div>
        </form>
      </main>
    </div>
  )
}
