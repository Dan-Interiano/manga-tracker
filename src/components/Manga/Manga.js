import React, { useState, useEffect } from 'react'
import "./Manga.css"
import MangaForm from '../MangaForm/MangaForm';
import { NavLink } from 'react-router-dom';
// import ReactStars from 'react-stars';

export default function Manga() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:9292/mangas")
      .then((res) => res.json())
      .then((data) => {
        setData(data)})
  }, []);

  
  function handleDeleteClick(event){
    const idd = event.target.name
    fetch(`http://localhost:9292/mangas/${idd}`, {
      method: "DELETE",
    });
    const updatedMangas = data.filter((manga) => manga.id !== idd);
    setData(updatedMangas);
  }
  function handleLikeClick(event){
    console.log(event.target)
    const liked = event.target
    liked.innerText = "LOVED IT!"
  }
  const ShowManga = () => {
    return (
      <div className='card-container'>
        {data.map((manga) => {
          return (
            <div key={manga.id} className="card">
              <img src={manga.image} className="card-img" alt={manga.title} />
              <div className='card-body'>
                <h2 className='card-title'>{manga.title}</h2>
                <p>by: {manga.author}</p>
                <p>Publisher: {manga.publisher}</p>
                <p>New Chapter: {manga.activity}</p>
                {/* <ReactStars /> */}
                <div className='btn-div'>
                <NavLink to={`/mangas/${manga.id}`} className="btn" id='rate-btn'>Rate</NavLink>
                  <button className='btn' id="like-btn" onClick={handleLikeClick}>Like</button>
                  <button className='btn' id="delete-btn" name={manga.id} onClick={handleDeleteClick}>Delete</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
 

  return (
    <div>
      <div className='manga-container'>
        
          <MangaForm />
          <h1 className='manga-title'>Popular Manga</h1>
          <ShowManga />
      </div>

    </div>
  )
}
