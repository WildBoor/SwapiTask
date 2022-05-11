import { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import axios from 'axios';

import './PlanetsPage.scss';
import PlanetCard from './PlanetCard';
import PaginationPanel from './../../common/PaginationPanel';


const PlanetsPage = () => {
    const search = useLocation().search;
    const [planetsInfo, setPlanets] = useState({
        currentPageNumber: null,
        fullAmount: null,
        planets: null,
        prevPageUrl: null,
        nextPageUrl: null,
    });

    useEffect(() => {
        const pageParameter = new URLSearchParams(search).get('page');
        const currentPageNumber = pageParameter === null ? 1 : +pageParameter;
        let axiosGetUrl;

        if (currentPageNumber === 1) {
            axiosGetUrl = 'https://swapi.dev/api/planets';
        } else {
            axiosGetUrl = `https://swapi.dev/api/planets/?page=${currentPageNumber}`;
        }

        axios.get(axiosGetUrl)
        .then(resp => {
            setPlanets({
                currentPageNumber: currentPageNumber,
                fullAmount: resp.data.count,
                planets: resp.data.results,
                prevPageUrl: resp.data.previous,
                nextPageUrl: resp.data.next,
            });
        })
    }, [search]);

    return (
        <>
            <div className='planets__content'>
                {
                    planetsInfo.planets && planetsInfo.planets.map((planet, index) => {
                        const planetId = planet.url.match(/\d+/)[0];
                        const to = '/planets/' + planetId;

                        return (
                            <Link 
                                to={to}
                                key={index}
                            >
                                <PlanetCard  planet={planet} />
                            </Link>
                        )
                    })
                }
            </div>
            {
                planetsInfo.planets && <PaginationPanel 
                                            prefix='/planets/'
                                            amount={planetsInfo.fullAmount}
                                            portion={planetsInfo.planets.length}
                                            prevPageUrl={planetsInfo.prevPageUrl}
                                            nextPageUrl={planetsInfo.nextPageUrl}
                                            currentPageNumber={planetsInfo.currentPageNumber}
                                            setFn={setPlanets}
                                        />
            }
            
        </>
    );
}

export default PlanetsPage;