import React ,{useRef, useState} from 'react'
import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Adress from '../../img/adress.png'
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef()
    const [done,setDone] = useState(false)
    const handelSubmit = (e)=>{
        e.preventDefault()

            emailjs.sendForm('service_15vtptz', 'template_yilqrjn', formRef.current, 'user_MhSnblalBltaGqBUXsmBU')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                            src={Phone}
                            alt=""
                            className="c-icon"/>
                            +970 595 023 700
                        </div>

                        <div className="c-info-item">
                            <img
                            src={Email}
                            alt=""
                            className="c-icon"/>
                            artagency3@gmail.com
                        </div>

                        <div className="c-info-item">
                            <img
                            src={Adress}
                            alt=""
                            className="c-icon"/>
                            Gernata Street, Nablus City, Palestine
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                    <b>Whats your story?</b> Get in touch. Always available for
                    Freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handelSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                        {done && "Thank You to Contact Us"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
