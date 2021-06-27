import {useEffect, useState, useContext} from 'react'
import getGifs from 'services/getGifs'
import GifContext from 'context/GifsContext'

const INITIAL_PAGE=0

const useGifs = ({keyword, rating} = {keyword:null}) => {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const {gifs, setGifs} = useContext(GifContext)

    const keywordToUse= keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() => {
        setLoading(true)


        getGifs({keyword : keywordToUse, rating })
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
            localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword, keywordToUse, setGifs])

    useEffect(()=> {
        if(page === INITIAL_PAGE) return
        setLoadingNextPage(true)
        getGifs({keyword: keywordToUse,rating, page})
        .then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs))
            setLoadingNextPage(false)
        })
    }, [keywordToUse, page, setGifs])
    return{loading, loadingNextPage, gifs, setPage}
}

export default useGifs
