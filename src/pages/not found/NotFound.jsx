import "./notFound.css";
import { Link } from "react-router-dom";
import { GetTitlePage } from "../../allPagesPaths";
import notFoundImg from "../../assets/images/404.png";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const NotFound = () => {

  GetTitlePage('Nader Ghanawi | 404');

  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="img-box">
          <img src={notFoundImg} alt="404" />
        </div>
        <h4 className="text-white">404 page not found!</h4>
        <p style={{ color: "var(--light_gray)" }}>Check to see if the link you are trying to open is valid.</p>
        <Link to="/" className="fill-btn">Go to home page</Link>
      </div>
    </div>
  )
}

export default NotFound;