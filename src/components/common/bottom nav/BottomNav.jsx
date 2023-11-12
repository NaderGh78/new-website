import './bottomNav.css';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { linksData } from '../../../allPagesPaths';

/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*+++++++++++++++++++++++++++++++++++++++++++++++++++*/

const BottomNav = () => {

  // in order to make active class when navigate pages
  const [url, setUrl] = useState(null);

  const location = useLocation("/");

  // give active class for link depend on location 
  useEffect(() => {

    setUrl(location.pathname);

  }, [location]);

  return (
    <nav className='bottom-nav'>
      <div className="container d-flex align-items-center justify-content-between">
        {linksData.map(el => (
          <Link
            to={el.linkTo}
            className={url === el.linkTo ? "active" : ""}
            key={el.id}
          >
            {el.navIcon}<span>{el.navText}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default BottomNav;