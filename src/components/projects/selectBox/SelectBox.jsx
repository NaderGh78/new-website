import './selectBox.css';
import { FaChevronDown } from "react-icons/fa6";

/*======================================*/
/*======================================*/
/*======================================*/

const SelectBox = ({ projectMadeBy, handleChange }) => {

    return (
        <div className='select-box'>
            <h6>Filters By : </h6>
            <select name="" id="start" defaultValue="all" onChange={(e) => handleChange(e)}>
                <option value="all">All</option>
                {projectMadeBy.map((el, idx) => (
                    <option value={el} key={idx}>{el.toUpperCase()}</option>
                ))
                }
            </select>
            <FaChevronDown />
        </div>
    )
}

export default SelectBox;