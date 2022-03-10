import React, {useState, useEffect } from 'react'
import "./Review.css"
export default function Review() {
  const [mangas, setMangas] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/mangas")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setMangas(data)})
  
  }, [])
  
  return (
    <div>
    <div className='rev-container'>
      {mangas.map((rev) => {
        return (
          <div key={rev.id} className="review-card">
            <h1 className='rev-name'>{rev.title} </h1>
            <h5>id:{rev.id}</h5>
              {rev.reviews.map((review) => (
                <div className='each-review'>
                  <h4>{review.title}</h4>
                  <p>{review.comment}</p>
                  <h5>Rated {review.score} out of 5!</h5>
                  <h6>Created at: {review.created_at}</h6>
                </div>
              ))}
            
            

          </div>
        )
      })}
    </div>
    </div>
  )
}
