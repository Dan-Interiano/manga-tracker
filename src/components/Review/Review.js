import React, { useState, useEffect } from 'react'
import "./Review.css"


export default function Review() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setReviews(data)
      })

  }, [])

  console.log(reviews)

  return (
      <div className='r-div'>
        <h2>Reviews</h2>
        if (reviews){
          <div className='rev-container'>
          {reviews.map((review) => {
            return (
              <div className='review-card' key={review.id}>
                <h1 className='rev-name'>{review.title}</h1>
                <h4>{review.title}</h4>
                <p>{review.comment}</p>
                <h5>Rated {review.score} out of 5!</h5>
                <h6>Created at: {review.created_at}</h6>
              </div>
            )
          })}
        </div>
        }
        
      </div>
    )
}


{/* <div className='r-div'>
      <h2>Reviews</h2>
      <div className='rev-container'>
        {reviews.map((review) => {
                  return (
                    <div key={review.id} className="review-card">
                          <h1 className='rev-name'>{review.manga.title} </h1> 
                          <h4>{review.title}</h4>
                          <p>{review.comment}</p>
                          <h5>Rated {review.score} out of 5!</h5>
                          <h6>Created at: {review.created_at}</h6>
                    </div>)}
               </div>
            </div>
        } */}
