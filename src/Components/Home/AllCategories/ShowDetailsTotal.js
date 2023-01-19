import React from 'react';
import { useLocation } from 'react-router-dom';

const ShowDetailsTotal = () => {
    const location = useLocation();
    const {state} = location;
    const {name, image, premiered, runtime, ended, language, genres,  summary, officialSite, status } = state.show
    return (
        <div className='max-w-md mx-auto mt-10'>
                <div>
                    <h1 className='text-left text-6xl my-6 text-white'>{name}</h1>
                    <p className='mb-4'>{runtime} . {language} . {premiered} to {ended ? ended : "running"}</p>
                </div>
            <img src={image.original} alt="" />
            {
                genres.map((gen, id) => <button className='btn btn-xs btn-outline m-2' key={id}>{gen}</button>)
            }
            <p className="text-white">{summary}</p>
            <p className='my-3'><span className='font-bold'>Official Site:</span> <span className='text-cyan-300'>{officialSite ? officialSite : 'It has no official site'}</span></p>
            <p className='my-3'><span className='font-bold'>Status:</span> <span className='text-white'>{status}</span></p>
        </div>
    );
};

export default ShowDetailsTotal;