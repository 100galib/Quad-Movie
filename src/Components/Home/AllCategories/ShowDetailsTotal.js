import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ShowDetailsTotal = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const {state} = location;
    const {name, image, premiered, runtime, ended, language, genres,  summary, officialSite, status } = state.show;
    
    const bookingFuntion = event => {
        event.preventDefault()
        const form = event.target;
        const ticket = form.howMany.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            name,
            email,
            phone,
            ticket,
        }

        localStorage.setItem('bookingData', JSON.stringify(booking))
        navigate('/')
    }
    return (
        <>
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

            <label htmlFor="booking-modal" className='btn hover:bg-red-400 bg-red-500 text-white border-0 mb-10'>book a movie ticket</label>
        </div>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h1 className='text-3xl'>{name}</h1>
            <form onSubmit={bookingFuntion} className='mt-10 grid grid-cols-1 gap-3'>
                <input name='howMany' type="number" placeholder='How many' className="input input-bordered w-full" />
                <input name='name' type="text" placeholder="name" className="input input-bordered w-full" />
                <input name='email' type="email" placeholder="email" className="input input-bordered w-full" />
                <input name='phone' type="text" placeholder="phone" className="input input-bordered w-full" />
                <input className='btn hover:bg-red-400 text-white bg-red-500' type="submit" value={'Submit'} />
            </form>
            </div>
        </div>
        </>
    );
};

export default ShowDetailsTotal;