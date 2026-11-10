import React from 'react'

const CreatePost = () => {
  const handleSubmit =  async(e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    axios.post("https://localhost:3000/create-post", formData)
    .then ((res) => {
    console.log(res) 
})

  }       
        <section>
        <form>
          <input type="file" name="image" accept='image/*' />
          <input type="text" name="caption" required />
          <button>sumbit</button>
        </form>


    </section>
}

export default CreatePost 