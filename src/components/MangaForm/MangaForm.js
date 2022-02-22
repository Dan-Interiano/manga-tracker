import React, { useState } from 'react'
import "./MangaForm.css"

export default function MangaForm() {
  const [formData, setFormData] = useState({
    name: "",
    imageURL: "",
    description: "",
    author: "",
    activity: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className='form-container'>
        <form>
          <h2>Add your new favorite manga here!</h2>
            <label>
                Name <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            </label>
            <label>
                Author <input type="text" name="author" value={formData.author} onChange={handleChange}/>
            </label>
            <label>
                Image URL <input type="text" name="image-url" value={formData.imageURL} onChange={handleChange}/>
            </label>
            <label>
                Description <input type="text" name="description" value={formData.description} onChange={handleChange}/>
            </label>
            <label>
                Activity <input type="text" name="activity" value={formData.activity} onChange={handleChange}/>
            </label>
            <button>Submit</button>
        </form>
        
    </div>
  )
}
