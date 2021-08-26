import React from 'react'
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

function Starrating() {
    const [rating, setRating] = useState(null);
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label key={ratingValue}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                            className="star"
                            color={ratingValue <= rating ? "#ffcd3c" : "#e4e5e9"}
                            size={20} />
                    </label>
                )
            })}
        </div>
    )
}

export default Starrating
