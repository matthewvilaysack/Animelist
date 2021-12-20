import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

function AnimeCardControls({ anime, type }) {
    const {
        removeAnimeFromWatchlist,
        addAnimeToWatched,
        moveToWatchlist,
        removeFromWatched,

    } = useContext(GlobalContext);


    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn" onClick={() => addAnimeToWatched(anime)}>
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button
                        className="ctrl-btn"
                        onClick={() => removeAnimeFromWatchlist(anime.mal_id)}
                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}

            {type === "watched" && (
                <>
                    <button className="ctrl-btn" onClick={() => moveToWatchlist(anime)}>
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>

                    <button
                        className="ctrl-btn"
                        onClick={() => removeFromWatched(anime.mal_id)}
                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    );
};

export default AnimeCardControls