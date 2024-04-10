import React from 'react'
import {Link} from 'react-router-dom'

const SinglePost = ({title, summary, content, cover, author, createdAt}) => {
  return (
    <>
      <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
        <Link to="#" className="card-header text-primary text-decoration-none">{title}<i className="bi bi-hand-index-thumb"></i> </Link>
        <div className="card-body text-secondary">

          <p className="card-text">{summary}</p>
          <p className="card-text">{content}</p>
          <p className="card-text">{author.username}</p>
          <p className="card-text">{createdAt}</p>
          <img src={'http://localhost:5000/'+cover} alt='pics' />
        </div>
      </div>
    </>
  )
}

export default SinglePost