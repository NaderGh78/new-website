import "./experience.css";
import { Education, GetTitlePage, HeadingTitle, MainSkills, skillsData } from "../../allPagesPaths";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Experience = () => {

  GetTitlePage('Nader Ghanawi | Experience');

  return (
    <main>
      <div className="experience">
        <div className="experience-content">
          <HeadingTitle sub='What Skills I Have?' head='My Experience' />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="left">
                  <h5 className="title">Frontend Development</h5>
                  {skillsData.map(d => (<MainSkills data={d} key={d.id} />))}
                </div>
              </div>
              <div className="col-md-6">
                <div className="right">
                  <div className="education">
                    <h5 className="title">Education</h5>
                    <Education />
                    <Education />
                    <Education />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Experience;