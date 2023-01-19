import React from 'react';

const SingleCategory = ({single}) => {
    const {image, name} =  single.show
    const {original} = image;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-10">
            <figure><img className='h-96 w-full' src={original} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;