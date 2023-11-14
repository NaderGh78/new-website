import "./contactForm.css";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const ContactForm = (props) => {

    const {
        isFormSubmit,
        handleSubmit,
        name,
        email,
        tel,
        msg,
        setName,
        setEmail,
        setTel,
        setMsg } = props;

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-box mb-3">
                <input
                    type="text"
                    value={name || ""}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    name="name"
                    placeholder=""
                    autoComplete="off"
                    required
                />
                <label htmlFor="name">Your Full Name</label>
            </div>

            <div className="input-box mb-3">
                <input
                    type="text"
                    value={email || ""}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    placeholder=""
                    autoComplete="off"
                    required
                />
                <label htmlFor="email">Your Email</label>
            </div>

            <div className="input-box mb-3">
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={tel || ""}
                    onChange={(e) => setTel(e.target.value)}
                    placeholder=""
                    autoComplete="off"
                    required
                />
                <label htmlFor="phoneNumber">Phone Number</label>
            </div>

            <div className="input-box mb-3">
                <textarea
                    id="msg"
                    name="msg"
                    value={msg || ""}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder=""
                    autoComplete="off"
                    required
                >
                </textarea>
                <label htmlFor="msg">Your Message</label>
                {isFormSubmit ? <img src={process.env.PUBLIC_URL + '/assets/images/loading-gif.gif'} alt="loader" /> : ""}
            </div>

            <button className="fill-btn">
                {isFormSubmit ? "Sending ..." : "Send"}
            </button>
        </form>
    )
}

export default ContactForm;