import { useEffect, useState } from 'react'
import useGifs from 'hooks/useGifs'
import getSingleGif from 'services/getSingleGif'

export default function useSingleGif({id}){
    const {gifs} = useGifs()
    const gifFromCache = gifs.find( singleGif => 
        singleGif.id === id    
    )

    const [gif, setGif] = useState(gifFromCache)
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(function(){
        if(!gif){
            setLoading(true)
            getSingleGif({id})
            .then(gif =>{
                setGif(gif)
                setLoading(false)})
            .catch(err =>{
                setLoading(false)
                setIsError(true)
            })
        }
    }, [gif,id])

    return {gif, loading, isError}
}