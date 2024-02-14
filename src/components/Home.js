import React from 'react'

const Home = () => {
  return (
    <div className='container my-3'>
      <h2>Add Your Note</h2>
      <form style={{ margin: '20px', padding: '20px' }}>
  <div className="form-group" style={{ marginBottom: '20px' }}>
    <label htmlFor="exampleInputEmail1">Note</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your note" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your notes with anyone else.</small>
  </div>
  <div className="form-group" style={{ marginBottom: '20px' }}>
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

<div className="conatiner my-3">
      <h4>Your Notes</h4>
    </div></div>
  )
}

export default Home;
