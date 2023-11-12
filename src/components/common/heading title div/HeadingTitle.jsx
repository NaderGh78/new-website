import "./headingTitle.css";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const HeadingTitle = (props) => {
    return (
        <div className="heading-title-box pt-5 mb-5">
            <p>{props.sub}</p>
            <h4>{props.head}</h4>
        </div>
    )
}

export default HeadingTitle;