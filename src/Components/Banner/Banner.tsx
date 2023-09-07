import React, { useState, useEffect } from 'react'

import "./Banner.css"
import axios from "../../Axios"
import { API_KEY, imgUrl } from '../../constants/constants'

function Banner() {
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const randamNumber = Math.floor(Math.random() * (19 - 1 + 1)) + 1;

                const response = await axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
                setMovie(response.data.results[randamNumber])
            } catch (error) {
                console.log(error);

            }
        }
        fetchData()
    }, [])

    return (
        <div
            style={{ backgroundImage: `URL( ${movie ? imgUrl + movie.backdrop_path : ""})` }}
            className="banner">
            <div className="content">
                <h1 className="title">{movie ? movie.title : ""}</h1>
                <div className="banner_buttons">
                    <button className="button">play</button>
                    <button className="button">My List</button>
                </div>
                <div className="description">{movie ? movie.overview : ""}</div>
            </div>
            <div className="fade_bottom">

            </div>
        </div>
    )
}

export default Banner