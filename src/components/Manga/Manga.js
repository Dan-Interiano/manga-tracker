import React, { useState, useEffect } from 'react'
import "./Manga.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MangaForm from '../MangaForm/MangaForm';

export default function Manga() {
  const [data, setData] = useState([]);
  //const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/mangaData")
      .then((res) => res.json())
      .then((data) => setData(data))
    setLoading(false);
  }, []);

  function handleLikeButton(event) {
    console.log(event)
  }
  function handleDislikeButton(event) {
    console.log(event)
  }
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
              <img src={manga.imageURL} className="manga-card-img" alt={manga.title} />
              <div className='card-body'>
                <h5 className='card-title'>{manga.name}</h5>
              </div>
              <button className='like-btn' onClick={handleLikeButton}>Like</button>
              <button className='dislike-btn' onClick={handleDislikeButton}>Dislike</button>
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
        {loading ? <Loading /> : <ShowManga />}
      </div>
      <div>
        <MangaForm />
      </div>
    </div>
  )
}
