import "./service.css";
import { useEffect } from "react";
import { GetTitlePage, HeadingTitle } from "../../allPagesPaths";
import { BsCheckLg } from 'react-icons/bs';
import WOW from 'wowjs';

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Services = () => {

    GetTitlePage('Nader Ghanawi | Services');

    useEffect(() => {

        new WOW.WOW({

            live: false

        }).init();

    }, [])

    return (
        <main>
            <div className="services">
                <HeadingTitle sub='What I Offer?' head='Services' />
                <div className="services-content">
                    <h5 className="wow zoomIn">Front End for Websites</h5>
                    <div className="service-skil-box wow bounceInLeft" data-wow-delay=".5s" data-wow-duration="1s">
                        <span><BsCheckLg /></span>
                        <p>Responsive, Responsive website is very important for display a website in many screen devices</p>
                    </div>
                    <div className="service-skil-box wow bounceInLeft" data-wow-delay=".7s" data-wow-duration="1.1s">
                        <span><BsCheckLg /></span>
                        <p>Animation, animated website make it easy on the eyes, and make it vital</p>
                    </div>
                    <div className="service-skil-box wow bounceInLeft" data-wow-delay=".9s" data-wow-duration="1.2s">
                        <span><BsCheckLg /></span>
                        <p>Cheap, I offer you the cheapest price compared to other workers because I do not want money but programming</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Services;