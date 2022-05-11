import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import PlanetResidents from './PlanetResidents';
import firstLetterToUpperCase from './../../../utils/firstLetterToUpperCase';
import './PlanetInfoPage.scss';

const PlanetInfoPage = () => {
    const params = useParams();
    const [planetInfo, setPlanetInfo] = useState({
        'planet name': null,
        'rotation period': null,
        'orbital period': null,
        'diameter': null,
        'climate': null,
        'gravity': null,
        'terrain': null,
        'surface water': null,
        'population': null,
    });

    useEffect(() => {
        const planetId = params.planetId;
        const axiosGetUrl = 'https://swapi.dev/api/planets/' + planetId;

        axios.get(axiosGetUrl)
        .then(resp => {
            const planet = resp.data;
            const planetResidents = planet.residents;   
            const imgPath =  `./../img/planets/${planet.name}.webp`;

            Promise.all(
                planetResidents
                .map((url) => {
                    return axios.get(url);
                }))
                .then(resp => {  
                    setPlanetInfo({
                        'planet name': planet.name,
                        'rotation period': planet.rotation_period,
                        'orbital period': planet.orbital_period,
                        'diameter': planet.diameter,
                        'climate': planet.climate,
                        'gravity': planet.gravity,
                        'terrain': planet.terrain,
                        'surface water': planet.surface_water,
                        'population': planet.population,
                        'planetImgPath': imgPath,
                        'planetResidents': resp.map(arr => arr.data)
                    });
                });
        });
    }, [params]);

    return (
        <div className='planet__content'>
            <div className='planet-info'>
                <div className='img'>
                    {planetInfo['planet name'] && <img src={planetInfo.planetImgPath} alt=""/>}
                </div>
                {
                    planetInfo && Object.keys(planetInfo).reduce((arr, key, index) => {
                        if (!['planetImgPath', 'planetResidents'].includes(key)) {
                            const upperCaseText = firstLetterToUpperCase(key);
                            const value = planetInfo[key];

                            arr.push(
                                <React.Fragment key={index}>
                                    <div className='point'>
                                        <span className='name'>{upperCaseText}:</span>
                                        <span className='value'>{value}</span>
                                        
                                    </div>
                                </React.Fragment>
                            )
                        }

                        return arr;
                    }, [])
                }
            </div>
            {planetInfo.planetResidents && <PlanetResidents planetResidents={planetInfo.planetResidents}/>}
        </div>
    );
}

export default PlanetInfoPage;