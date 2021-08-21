import React from 'react';
import PanelCard from '../PanelCard/PanelCard';


function Gallery(props) { // ! pass down props.

    const displayPanels = () => {
        return props.topAnime.map((anime, i) => {
            return <PanelCard
                num={i}
                anime={anime}
                key={anime.mal_id} />
        })
    }
    return (
        <div className="gallery-container">
            <div className="panels">
                {displayPanels()}
            </div>
        </div>

    )
}

export default Gallery;