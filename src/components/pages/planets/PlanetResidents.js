import { useState } from 'react';

import GenderFilter from './../people/GenderFilter';
import ResidentPreview from './../people/ResidentPreview';
import './PlanetResidents.scss';

const PlanetResidents = (props) => {
    const planetResidents = props.planetResidents;
    const [filteredGender, setFilteredGender] = useState('all');

    return (
        <div className='planet-residents'> 
            <GenderFilter changeFilterHandler={setFilteredGender} filteredGender={filteredGender} />
            {
                planetResidents
                .filter(resident => {
                    const filter = filteredGender === 'all' ? ['male', 'female', 'n/a'] : [filteredGender];
                    
                    return filter.includes(resident.gender);
                })
                .map((resident, index) => (
                      <ResidentPreview
                        resident={resident}
                        key={index}
                        filteredGender={filteredGender}
                    />
                ))
            }
        </div>
    );
}

export default PlanetResidents;