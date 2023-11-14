import "./singleProjCard.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from 'wowjs';

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const SingleProjCard = ({
    data:
    { projImg,
        projName,
        projRubbon,
        projRubbonTitle,
        projSkillsImgArr,
        projRoutName }, loading, optionValue }) => {

    const calcWidth = `calc((100% + 30px)/${projSkillsImgArr.length})`;

    useEffect(() => {

        new WOW.WOW({

            live: false

        }).init();

    }, [loading, optionValue]);
    /*
    - here we use the wow library , that will render the animation EVERY TIME CHANGE the optionValue [when select any option from filter]
    - here we put the [loading],cos we need to render the animation after loading the page as well
    */

    return (
        <div className="single-proj-card wow zoomIn">
            <div className="img-box">
                <img src={process.env.PUBLIC_URL + projImg} alt={projName} />
            </div>
            <h3>{projName}</h3>
            <Link to={`/projects/${projRoutName}`} className="borderd-btn">More</Link>
            <div className="skills-img-box">
                {projSkillsImgArr.map((el, idx) => (
                    <img src={process.env.PUBLIC_URL + el} alt="skills-imgs" key={idx} />
                ))}
            </div>
            {projRubbon ? <><div className="ribbon"><span>{projRubbonTitle}</span></div></> : ""}
        </div>
    )
}

export default SingleProjCard;