import React, {useState, useEffect } from 'react'
import "./Review.css"
export default function Review() {
  const [mangas, setMangas] = useState([])
  const [revform, setRevForm] = useState({
    manga_id: undefined,
    comment: undefined,
    score: undefined
  })

  useEffect(() => {
    fetch("http://localhost:9292/mangas")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setMangas(data)})
  
  }, [])
  
  function handleChange(event) {
    setRevForm({
      ...revform,
      [event.target.name]: event.target.value,
    })
  }
  function handleSubmit(event){
    event.preventDefault();
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(revform),
    })
    .then((res) => res.json())
    .then((data) => setRevForm(data))
  }
  return (
    <div>
      <div className='form-container' id='rev-form'>
        <form onSubmit={handleSubmit}>
          <h3>Add Your Review Here!</h3>
          <label>Manga: <input type='text' name="manga_id" value={revform.manga_id} onChange={handleChange}/></label>
          <label>Comment: <input type='text' name="comment" value={revform.comment} onChange={handleChange}/></label>
          <label>Score: <input type="text" name="score" value={revform.score} onChange={handleChange}/></label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    <div className='rev-container'>
      {mangas.map((rev) => {
        return (
          <div key={rev.id} className="review-card">
            <h1 className='rev-name'>{rev.title}</h1>
            

          </div>
        )
      })}
    </div>
    </div>
  )
}
