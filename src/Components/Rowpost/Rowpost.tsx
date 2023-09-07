import { useEffect, useState } from 'react'
import Youtube from 'react-youtube'

import "./Rowpost.css"
import axios from "../../Axios"
import { imgUrl, API_KEY } from '../../constants/constants'


interface RowpostProps {
    url: string;
    title: string;
    isSmall: boolean;
}


function Rowpost(props: RowpostProps) {
    const [movies, setMovies] = useState([])
    const [urlId, SetUrlId] = useState('')

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(props.url)
                console.log(response.data.results);
                setMovies(response.data.results)

            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        }
    }

    const handleClick = async (id: number) => {
        try {
            console.log(id)
            const reaponse = await axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            if (reaponse.data.results.length !== 0) {
                SetUrlId(reaponse.data.results[0])
            } else {
                console.log('Array Empty')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='row' >
                <h1>{props.title}</h1>
                <div className="posters">
                    {movies.map((item) => {
                        return (
                            <div>
                                <img
                                    onClick={() => handleClick(item.id)}
                                    className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imgUrl + item.backdrop_path}`} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div >
            {urlId && <Youtube videoId={urlId.key} opts={opts} />}
        </>
    )
}

export default Rowpost