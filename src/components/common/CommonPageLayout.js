import NavBar from './NavBar';
import './CommonPageLayout.scss';

const CommonPageLayout = (props) => {
    return (
        <>
            <NavBar />
            <div className='content'>
                {props.page}
            </div>
        </>
    )
}

export default CommonPageLayout;