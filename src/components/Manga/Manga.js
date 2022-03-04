import React, { useState, useEffect } from 'react'
import "./Manga.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MangaForm from '../MangaForm/MangaForm';
import ReactStars from 'react-stars';
import { NavLink } from 'react-router-dom';

export default function Manga() {
  const [data, setData] = useState([]);
  //const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:9292/mangas")
      .then((res) => res.json())
      .then((data) => setData(data))
    setLoading(false);
  }, []);

  const Loading = () => {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  const ShowManga = () => {
    return (
      <div className='card-container'>
        {data.map((manga) => {
          return (
            <div key={manga.id} className="manga-card">
              <img src={manga.image} className="manga-card-img" alt={manga.title} />
              <div className='card-body'>
                <p className='card-title'>{manga.title}</p>
                <p>{manga.author}</p>
                <p>Publisher: {manga.publisher}</p>
                <p>{manga.activity}</p>
                <NavLink to={`/mangas/:${manga.id}`} className="rate-btn">Rate</NavLink>
                <ReactStars />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  // const filterManga = (comic) => {
  //   const updatedList = data.filter((info) => info.)
  // }

  return (
    <div>
      <div className='manga-container'>
        <h1 className='manga-title'>Popular Manga</h1>
        <br />
        <div>
          <MangaForm />
        </div>
        {loading ? <Loading /> : <ShowManga />}
      </div>

    </div>
  )
}
