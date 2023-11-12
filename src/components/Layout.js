import { Outlet } from "react-router-dom";
import { FooterSection, BottomNav, TransitionPage } from "../allPagesPaths";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Layout = () => {

    return (
        <>
            <Outlet />
            <FooterSection />
            <BottomNav />
            <TransitionPage />
        </>
    )
}

export default Layout;