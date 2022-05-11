import React, { useEffect, useState } from 'react';

import firstLetterToUpperCase from './../../../utils/firstLetterToUpperCase';
import './ResidentPreview.scss';

const ResidentPreview = (props) => {
    const [residentInfo, setResidentInfo] = useState({
        residentImgUrl: null,
        height: null,
        mass: null,
        gender: null,
        species: null,
        vehicles: null,
        starships: null,
    });

    useEffect(() => {  
        const resident = props.resident;
        const residentName = resident.name;
        const residentImgUrl = `./../img/people/${residentName}.webp`;

        setResidentInfo({
            residentImgUrl: residentImgUrl,
            name: residentName,
            height: resident.height,
            mass: resident.mass,
            gender: resident.gender,
            vehicles: resident.vehicles.length,
            starships: resident.starships.length,
        });
    }, [props]);

    return ( 
        <>
            {
                <div className='resident-preview'>
                    <div className='img'>
                        <img src={residentInfo.residentImgUrl} alt=''/>
                    </div>
                    <div className='info'>
                        <div className='name'>{residentInfo.name}</div>
                        <div className='additional'>
                            {
                                residentInfo && Object.keys(residentInfo).reduce((arr, key, index) => {
                                    if (!['residentImgUrl', 'name'].includes(key)) {
                                        const text = firstLetterToUpperCase(key);
                                        
                                        arr.push(
                                            <React.Fragment key={index}>
                                                <div className='point'>
                                                    <span>{text}:</span>
                                                    {residentInfo[key]}
                                                </div>
                                            </React.Fragment>
                                        );
                                    }

                                    return arr;
                                }, [])
                            }
                        </div>
                    </div>
                </div>
            }
        </>     
        
    );
};

export default ResidentPreview;