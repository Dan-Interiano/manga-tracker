import React, { useState } from 'react'
import "./MangaForm.css"

export default function MangaForm() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    publisher: "",
    author: "",
    activity: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event){
    event.preventDefault();
    fetch("http://localhost:9292/mangas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then((data) => setFormData(data))
  }
  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <h2>Add your new favorite manga here!</h2>
            <label>
                Name: <input type="text" name="title" value={formData.title} onChange={handleChange} required/>
            </label>
            <label>
                Author: <input type="text" name="author" value={formData.author} onChange={handleChange} required/>
            </label>
            <label>
                Image URL: <input type="text" name="image" value={formData.image} onChange={handleChange} required/>
            </label>
            <label>
                Publisher: <input type="text" name="publisher" value={formData.publisher} onChange={handleChange} required/>
            </label>
            <label>
                Activity: <input type="text" name="activity" value={formData.activity} onChange={handleChange} required/>
            </label>
            <button type='submit' className='submit-btn'>Submit</button>
        </form>
        
    </div>
  )
}
