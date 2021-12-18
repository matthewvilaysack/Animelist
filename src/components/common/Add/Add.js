import React, { useState } from 'react'
import ResultCard from '../ResultCard'

function Add() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const HandleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
        if (e.target.value.length >= 3) FetchAnime(e.target.value)
    }

    const FetchAnime = async (query) => {
        //* Jikan API only allows 3+ char queries
        fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=5`)
            .then((resp) => resp.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.results);
                } else setResults([])
            })
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
                            {results.map((anime) => (
                                <li key={anime.mal_id} id={anime.mal_id} >
                                    <ResultCard anime={anime} />
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




