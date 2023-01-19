import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({single}) => {
    const {image, name, rating} =  single.show
    const {original} = image;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-10">
            <Link to={`/singletotal`} state={single}><figure className='cursor-pointer'><img className='max-h-[500px] w-full' src={original} alt="Shoes" /></figure></Link>
            <div className="card-body">
                <div>
                    <h2 className="card-title text-white">{name}</h2>
                    <p className='text-white'>Rating : {rating.average ? rating.average : '0'}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;