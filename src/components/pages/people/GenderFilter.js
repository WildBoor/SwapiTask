import firstLetterToUpperCase from './../../../utils/firstLetterToUpperCase';
import './GenderFilter.scss';

const GenderFilter = (props) => {
    const types = ['all', 'male', 'female', 'n/a'];

    const clickHandler = (e) => {
        props.changeFilterHandler(e.target.value);
    }

    return (
        <div className="gender-filter">
            <div className="name">
                <span>Gender filter</span>
            </div>
            <ul>
                {
                    types.map((type, index) => (
                        <li key={index}>
                            <input type="radio" id={type} name='gender-filter' value={type} onClick={clickHandler} defaultChecked={type === props.filteredGender}/>
                            <label htmlFor={type}>{firstLetterToUpperCase(type)}</label>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default GenderFilter;