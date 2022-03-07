import React, { useState, useEffect } from 'react'
import "./Manga.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "font-awesome/css/font-awesome.min.css"
// import ReactStars from 'react-stars';
import MangaForm from '../MangaForm/MangaForm';
import { NavLink } from 'react-router-dom';

export default function Manga() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // const { id, title, author, publisher, image, activity} = data;

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:9292/mangas")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data)})
        
      setLoading(false);
    
  }, []);

  const Loading = () => {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  function handleDeleteClick(event){
    const idd = event.target.name
    fetch(`http://localhost:9292/mangas/${idd}`, {
      method: "DELETE",
    });
    const updatedMangas = data.filter((manga) => manga.id !== idd);
    setData(updatedMangas);
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
                <p>by: {manga.author}</p>
                <p>Publisher: {manga.publisher}</p>
                <p>{manga.activity}</p>
                <NavLink to={`/review`} className="rate-btn">Rate</NavLink>
                {/* <ReactStars /> */}
                <div>
                  <button className='btn' id="like-btn">Like</button>
                  <button className='btn' id="delete-btn" name={manga.id} onClick={handleDeleteClick}>Delete</button>
                </div>
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
