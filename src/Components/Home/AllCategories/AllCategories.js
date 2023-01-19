import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleCategory from './SingleCategory';

const AllCategories = () => {
    const url = 'https://api.tvmaze.com/search/shows?q=all';

    const {data: allCategory = [], isLoading} = useQuery({
        queryKey: ['Category'],
        queryFn: async() => {
            const res = await fetch(url);
            const data = res.json();
            return data;
        }
    })
    if(isLoading){
        return <h1>Loading.......</h1>
    }


    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {
                allCategory.map(single => <SingleCategory key={single.show.id} single={single}></SingleCategory>)
            }

            </div>
        </>
    );
};

export default AllCategories;