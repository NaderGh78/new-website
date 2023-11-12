import "./mainSkills.css";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/


const MainSkills = ({ data: { skillTitle, skillNumber } }) => {
    return (
        <div className="main-skills">
            <div className="skill-box">
                <span className="title">{skillTitle}</span>
                <div className="skill-bar">
                    <span className="skill-per" style={{ width: skillNumber + "%" }}>
                        <span className="skill-tooltip">{skillNumber}%</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MainSkills;