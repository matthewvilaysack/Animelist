import React, { useState } from 'react'
import ResultCard from '../ResultCard'

function Add() {
    // !TODO styling add-page, add-page__container
    //!todo styling add-page__content, input-wrapper
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const HandleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
        FetchAnime(e.target.value)
    }

    const FetchAnime = async (query) => {
        //* Jikan API only allows 3+ char queries
        if (query !== undefined && query.length >= 3) {
            fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=5`)
                .then((resp) => resp.json())
                .then((data) => {
                    if (!data.errors) {
                        setResults(data.results);
                    } else setResults([])
                })
        }
    }

    return (
        <div className="add-page">
            <div className="add-page__container">
                <div className="add-page__content">
                    <div className="input-wrapper">
                        <input type="text"
                            placeholder="Search for an anime.."
                            value={search}
                            onChange={HandleSearch}
                        />
                    </div>
                    {results.length > 0 && (
                        <ul className="results">
                            {results.map((anime, i) => (
                                <li key={anime.id}>
                                    <ResultCard anime={anime} key={anime.id + "!"} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Add




