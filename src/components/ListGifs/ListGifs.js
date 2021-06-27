import React from 'react';
import Gif from 'components/Gif/Gif'
import './ListGifs.css'


const ListGifs = ({gifs}) => {

    return <div className="ListGifs Gif">{
        gifs.map(({title, id, url, ...moreInfo}) => <Gif
                key={id} 
                title={title} 
                id={id} 
                url={url}
                extraInfro={moreInfo} 
                />)}
        </div>
}

export default ListGifs
