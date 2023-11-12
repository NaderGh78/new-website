import "./projects.css";
import { useEffect, useRef, useState } from "react";
import {
  GetTitlePage,
  HeadingTitle,
  Pagination,
  SelectBox,
  SingleProjCard,
  projectsData
} from "../../allPagesPaths";
import { useLocation, useParams } from "react-router-dom";

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const Projects = () => {

  const itemsEls = useRef(new Array());

  GetTitlePage('Nader Ghanawi | Projects');

  let finalFilter = [];

  // select option value,by default is all
  const [optionValue, setOptionValue] = useState('all');

  // get all UNIQUE projFilter from projectsData arr
  const projectMadeBy = [...new Set(projectsData.map(item => item.projFilter))];

  // projectMadeBy.unshift("all")  

  // when we select an option
  const handleChange = (e) => {

    setOptionValue(e.target.value);

  }

  // after select an option from the select , compare the value if matching with the projFilter
  const filterdProjArr = projectsData.filter(el => el.projFilter === optionValue);

  if (optionValue === "all") {

    finalFilter = [...projectsData];

  } else {

    finalFilter = [...filterdProjArr];

  }

  /*+++++++++++++++++++++ PAGINATION START +++++++++++++++++++++++++++*/

  const [currentPage, setCurrentPage] = useState(1);

  const [activePagination, setActivePagination] = useState(1);

  const PROJECT_PER_PAGE = 8;

  const pages = Math.ceil(finalFilter?.length / PROJECT_PER_PAGE);

  const startIndex = (currentPage - 1) * PROJECT_PER_PAGE;

  const finishIndex = currentPage * PROJECT_PER_PAGE;

  const orderedProducts = finalFilter?.slice(startIndex, finishIndex);

  const renderedProjects = finalFilter?.map((d, i) => {
    return (
      <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6" key={i} ref={(element) => itemsEls.current.push(element)}><SingleProjCard data={d} /></div>
    );
  });

  // useEffect(()=>{
  //   window.scrollTo(0, 0);
  // },[currentPage]) 

  // run the animation for every single projcet card , depend when change the filter option
  useEffect(() => {

    let timer;

    const childall = Array.from(document.querySelectorAll(".single-proj-card"));

    for (let x in childall) {

      //childall[x].classList.add('add-animation');

      timer = setTimeout(() => {

        childall[x].classList.remove('add-animation');

        setTimeout(() => {

          childall[x].classList.add('add-animation');

        }, 5)

      }, 5);
    }

    return () => clearTimeout(timer);

  }, [optionValue])

  /*+++++++++++++++++++++ PAGINATION END +++++++++++++++++++++++++++*/

  return (
    <main>
      <div className="projects">
        <HeadingTitle sub='My Works' head='Portfolio' />
        <div className="projects-content">
          <SelectBox
            projectMadeBy={projectMadeBy}
            optionValue={optionValue}
            setOptionValue={setOptionValue}
            handleChange={handleChange}
          />
          <div className="container p-0">
            <div className="row">
              {renderedProjects}
              {/* <Pagination
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                activePagination={activePagination}
                setActivePagination={setActivePagination}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Projects;