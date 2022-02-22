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

  

  return (
    <div className='form-container'>
        <form>
          <h2>Add your new favorite manga here!</h2>
            <label>
                Name <input type="text" name="name" />
            </label>
            <label>
                Author <input type="text" name="author" />
            </label>
            <label>
                Image URL <input type="text" name="image-url"/>
            </label>
            <label>
                Description <input type="text" name="description"/>
            </label>
            <label>
                Activity <input type="text" name="activity"/>
            </label>
            <button>Submit</button>
        </form>
        
    </div>
  )
}
