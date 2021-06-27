import React from 'react'
import ListGifs from 'components/ListGifs/ListGifs';
import useGifs from 'hooks/useGifs';
import LazyTrendings from 'components/TrendingSearches/LazyTrendings';
import SearchForm from 'components/SearchForm/SearchForm';
import { Helmet } from 'react-helmet';

const Home = () => {
    const {loading, gifs}=useGifs()

    return (
        <>
            <Helmet>
                <title>Home | Gif Project</title>
            </Helmet>
            <SearchForm />
            <h3>Última busqueda</h3>
            <ListGifs gifs={gifs} loading={loading}/>
            <LazyTrendings />
        </>
    )
}

export default Home
