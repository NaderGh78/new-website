import "./projects.css";
import { useEffect, useRef, useState } from "react";
import {
  GetTitlePage,
  HeadingTitle,
  Pagination,
  SelectBox,
  SingleProjCard,
  Spinner
} from "../../allPagesPaths";
import axios from 'axios';

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Projects = () => {

  GetTitlePage('Nader Ghanawi | Projects');

  const [cardData, setCardData] = useState([]);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(true);

  // select option value,by default is all
  const [optionValue, setOptionValue] = useState('all');

  const [finalFilter, setFinalFilter] = useState([]);

  useEffect(() => {

    axios.get("./projectsData.json")
      .then(res => {

        setCardData(res.data);

        setFinalFilter(res.data);

        setLoading(false);

      })
      .catch(err => setError(true))

  }, []);

  // get all UNIQUE projFilter from json file in order to put the [name and value] inside option tag daynamic
  const projectMadeBy = [...new Set(cardData?.map(item => item.projFilter))];

  // when we select an option
  const handleChange = (e) => {

    setOptionValue(e.target.value);

    // if the option value equal all , show all finalfilter,otherwise filter the [finalfilter] based on the option value
    if (e.target.value === "all") {

      setFinalFilter(cardData);

    } else {

      setFinalFilter(cardData?.filter(el => el.projFilter === e.target.value));

    }

  }

  /* 

  // this is for load more ??????
    const projectPerRow = 4; 
     
    const [visible, setVisible] = useState(projectPerRow);
  
    const [isCompleted, setIsCompleted] = useState(false);  
  
    const showMoreItems = () => {
  
      setVisible((prevValue) => prevValue + projectPerRow);
  
      if (visible >= cardData.length - 1) {
  
        setIsCompleted(true);
  
      } else {
  
        setIsCompleted(false);
  
      }
      
    }   
  
  */

  // this is the final map finalfilter in order to draw ui
  const renderedProjects = finalFilter?.map((d, i) => {
    return (
      <div
        className="col-xxl-3 col-xl-4 col-lg-4 col-md-6"
        key={i}
      >
        <SingleProjCard
          data={d}
          loading={loading}
          optionValue={optionValue}
        />
      </div>
    );
  });

  /*=================================*/

  return (
    <main>
      <div className="projects">
        <HeadingTitle sub='My Works' head='Portfolio' />
        {
          !error
            ?
            <>
              <div className="projects-content">
                <SelectBox
                  projectMadeBy={projectMadeBy}
                  optionValue={optionValue}
                  setOptionValue={setOptionValue}
                  handleChange={handleChange}
                />
                <div className="container p-0">
                  <div className="row">
                    {loading && <Spinner />}
                    {renderedProjects}
                    {/* {!isCompleted && <button onClick={showMoreItems}>Load More</button>} */}
                    {/* <button onClick={showMoreItems}>Load More</button> */}
                  </div>
                </div>
              </div>
            </>
            :
            <h2 className="text-center text-white">Network Error !</h2>
        }
      </div>
    </main>
  )
}

export default Projects;