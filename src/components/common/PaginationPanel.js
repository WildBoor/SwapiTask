import {Link} from 'react-router-dom';

import './PaginationPanel.scss'

const PaginationPanel = (props) => {
    const currentLocationPrefix = props.prefix;
    const entityAmount = props.amount;
    const entityPortion = props.portion;
    const pagesAmount = Math.ceil(entityAmount / entityPortion);
    const numbersPanel = [];
    const currentPageNumber = props.currentPageNumber;
    const setFn = props.setFn;

    for (let i=1; pagesAmount >= i; i++) {
        numbersPanel.push(i);
    } 
    
    return (
        <div className='pagination-panel'>
            <Link
                to={currentLocationPrefix + '?page=' + (currentPageNumber === 1 ? currentPageNumber : (currentPageNumber - 1))}
                className={currentPageNumber === 1 ? 'disabled' : ''}
                onClick={() => setFn({currentPageNumber: null})}
            >
                <i className='bx bx-chevron-left'></i>
            </Link>
            { 
                numbersPanel.map(number => (
                    <Link
                        to={currentLocationPrefix + '?page=' + number}
                        key={number}
                        className={currentPageNumber === number ? 'disabled' : ''}
                        onClick={() => setFn({currentPageNumber: null})}
                    >
                        {number}
                    </Link>
                ))
            }
            <Link
                to={currentLocationPrefix +  '?page=' + (currentPageNumber + 1)}
                className={currentPageNumber === pagesAmount ? 'disabled' : ''}
                onClick={() => setFn({currentPageNumber: null})}
            >
                <i className='bx bx-chevron-right'></i>
            </Link>
        </div>
    );
}

export default PaginationPanel;