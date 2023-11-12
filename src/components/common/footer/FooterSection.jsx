import "./footerSection.css";
import { footerData } from "../../../allPagesPaths";

/*===============================*/
/*===============================*/
/*===============================*/

const FooterSection = () => {
    return (
        <footer className="footer-section">
            <div className="container-fluid h-100">
                <div className="row align-items-center h-100">
                    <div className="col-md-6">
                        <div>
                            <div className="copyrights" >
                                Copyright<sup>© </sup>2023 Nader Ghanawi</div>
                            <div className="signature">
                                Designed, made, and deployed by <span className="fw-bolder">Nader Ghanawi</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="links">
                            <ul>
                                {footerData.map(d => (
                                    <li key={d.id}>
                                        <a href={d.hrefTo} target="_blank">{d.footerIcon}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection;