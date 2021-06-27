import React, {useCallback, useEffect, useRef} from 'react'
import ListGifs from 'components/ListGifs/ListGifs';
import SearchForm from 'components/SearchForm/SearchForm'
import Spinner from 'components/Spinner/Spinner';
import useGifs from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';

const SearchResult = ({params}) => {
    const {keyword, rating = 'g'} = params;
    const {loading, gifs, setPage}=useGifs({keyword, rating})
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({externalRef: loading ? null : externalRef, once: false})
    const title = gifs ? `${gifs.length} resultados para ${decodeURI(keyword)}` : loading ? "Cargando" : "No hay resultados"
    const description = gifs ? `Resultados de ${keyword}` : ""
    const debounceHandleNextPage = useCallback(debounce(() => setPage(prevPage => prevPage + 1), 200), [setPage]) 
        
    useEffect(()=>{
        if(isNearScreen) debounceHandleNextPage()
    }, [isNearScreen, debounceHandleNextPage])
    return <>
    {loading 
        ? <Spinner />
        :<>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description}/>
            </Helmet>
            <SearchForm initialKeyword={keyword} initialRating={rating} />
            <h3 className="App-title">{decodeURI(keyword)}</h3>
            <ListGifs gifs={gifs}/>
            <div id="visor" ref={externalRef}></div>
        </> 
    }
    </>
}
export default SearchResult
