import './PlanetCard.scss';

const PlanetCard = (props) => {
    const planet = props.planet;
    const planetName = planet.name;
    const planetClimate = planet.climate.split(',')[0];
    const planetPopulation = planet.population;
    const imgPath =  `./../img/planets/${planetName}.webp`;

    return (
        <div className='planet'>
            {/* <div className='img'> */}
                <img src={imgPath} alt=''/>
            {/* </div> */}
            <div className='short-info'>
                <div className='point'>
                    <span className='name'>{planetName}</span>
                </div>
                <div className='point'>
                    <span className='climate'>Climate:</span>
                    {planetClimate}
                </div>
                <div className='point'>
                    <span className='population'>Population:</span>
                    {planetPopulation}
                </div>
            </div>
        </div>
    );
}

export default PlanetCard;