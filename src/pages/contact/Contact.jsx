import "./contact.css";
import { useState } from "react";
import axios from 'axios';
import { CardInfo, ContactForm, GetTitlePage, HeadingTitle } from "../../allPagesPaths";
import { contactCardInfo } from "../../data/contactCardInfo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Contact = () => {

  GetTitlePage('Nader Ghanawi | Contact');

  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [tel, setTel] = useState("");

  const [msg, setMsg] = useState("");

  // show the loader img and change the text btn when form submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    const serviceId = "service_mtz4icf";

    const templateId = "template_6kybv57";

    const publicKey = "FQ46Bfgpt37V351dy";

    const data = {

      service_id: serviceId,

      template_id: templateId,

      user_id: publicKey,

      template_params: {

        user_name: name,

        user_email: email,

        user_phone: tel,

        message: msg,

        to_name: "Nader Ghanawi"

      }

    };

    setIsFormSubmit(true);

    try {

      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);

      toast.success('Thanks for contact us! We will reply to you within 12 hours.', {

        position: toast.POSITION.TOP_RIGHT

      });

      setName("");

      setEmail("");

      setTel("");

      setMsg("");

    } catch (error) {

      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });

    } finally {

      setIsFormSubmit(false);

      e.target.reset();

    }

  }

  return (
    <main>
      <div className="contact">
        <HeadingTitle sub='Get In Touch' head='Contact Me' />
        <div className="contact-content">
          <div className="contact-left">
            {contactCardInfo.map(d => (
              <CardInfo data={d} key={d.id} />
            ))}
          </div>
          <div className="contact-right">
            <ContactForm
              isFormSubmit={isFormSubmit}
              handleSubmit={handleSubmit}
              name={name}
              email={email}
              tel={tel}
              msg={msg}
              setName={setName}
              setEmail={setEmail}
              setTel={setTel}
              setMsg={setMsg}
            />
          </div>
        </div>
      </div>
      <ToastContainer autoClose={6000} />
    </main>
  )
}

export default Contact;