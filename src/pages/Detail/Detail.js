import React from 'react'
import Gif from 'components/Gif/Gif'
import useSingleGif from 'hooks/useSigleGif'
import Spinner from 'components/Spinner/Spinner'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'


const Detail = ({params}) => {

const {gif, loading, isError} = useSingleGif({id: params.id})
const title = gif? gif.title : "";
const description = gif ? `Detail of ${title}`: "";


if (loading) return (
                    <>
                    <Helmet>
                        <title>Cargando...</title>
                    </Helmet>
                    <Spinner />
                    </>
                    )
if (isError) return <Redirect to='/404' />
    
return <>
        <Helmet>
            <title>{title} | Gif Project</title>
            <meta name="description" content={description}/>
        </Helmet>
        {/* <h3 className="App-title">{gif.title}</h3> */}
        <Gif {...gif}/>
        </>
}

export default Detail
