import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

function AnimeCardControls({ type, anime }) {
    const {
        removeAnimeFromWatchlist,
        addAnimeToWatched,
        moveToWatchlist,
        removeFromWatched,
        watchlist,
        watched
    } = useContext(GlobalContext);
    let storedAnime = watchlist.find((o) => o.id === anime.id);
    let storedAnimeWatched = watched.find((o) => o.id === anime.id);

    const watchlistDisabled = storedAnime
        ? true
        : storedAnimeWatched
            ? true
            : false;

    const watchedDisabled = storedAnime ? true : false;

    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn" disabled={watchedDisabled} onClick={() => addAnimeToWatched(anime)}>
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button
                        className="ctrl-btn"
                        onClick={() => removeAnimeFromWatchlist(anime.id)}
                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}

            {type === "watched" && (
                <>
                    <button className="ctrl-btn" disabled={watchlistDisabled} onClick={() => moveToWatchlist(anime)}>
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>

                    <button
                        className="ctrl-btn"
                        onClick={() => removeFromWatched(anime.id)}
                    >
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    );
};

export default AnimeCardControls