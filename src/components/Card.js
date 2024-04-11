import React from 'react'
import {Link} from 'react-router-dom'
import dateFormat from 'dateformat'

const SinglePost = ({_id, title, summary, createdAt}) => {
  return (
    <>
      <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
        <Link to={`/card/${_id}`} className="card-header text-primary text-decoration-none">{title}<i className="bi bi-hand-index-thumb"></i> </Link>
        <div className="card-body text-secondary">
          <p className="card-text">{(summary.length < 150) ? summary : summary.substring(0, 150) + "..." }</p>
          <p className="card-text">{dateFormat(createdAt, "mmmm d, yyyy")}</p>
        </div>
      </div>
    </>
  )
}

export default SinglePost