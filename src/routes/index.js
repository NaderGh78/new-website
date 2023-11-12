import PathConstants from "./pathConstants";
import {
  Home,
  About,
  Projects,
  Contact,
  Services,
  ProjectDetails,
  Experience
} from "../allPagesPaths";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.ABOUT, element: <About /> },
  { path: PathConstants.EXPERIENCE, element: <Experience /> },
  { path: PathConstants.SERVICES, element: <Services /> },
  { path: PathConstants.PROJECTS, element: <Projects /> },
  { path: PathConstants.PROJECTDETAILS, element: <ProjectDetails /> },
  { path: PathConstants.CONTACT, element: <Contact /> }
]

export default routes; 