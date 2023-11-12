import "./singleProjCard.css";
import { Link } from "react-router-dom";

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
        projRoutName } }) => {

    const calcWidth = `calc((100% + 30px)/${projSkillsImgArr.length})`;

    return (
        <div className="single-proj-card">
            <div className="img-box">
                <img src={projImg} alt={projName} />
            </div>
            <h3>{projName}</h3>
            <Link to={`/projects/${projRoutName}`} className="borderd-btn">More</Link>
            <div className="skills-img-box">
                {projSkillsImgArr.map((el, idx) => (
                    <img src={el} alt="" key={idx} />
                ))}
            </div>
            {projRubbon ? <><div className="ribbon"><span>{projRubbonTitle}</span></div></> : ""}
        </div>
    )
}

export default SingleProjCard;