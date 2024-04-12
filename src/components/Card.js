import React from 'react'
import {Link} from 'react-router-dom'
import dateFormat from 'dateformat'

const Card = ({_id, title, summary, updatedAt}) => {
  return (
    <>
      <div className="card border-secondary mb-3 mx-2" style={{ maxWidth: "18rem" }}>
        <Link to={`/card/${_id}`} className="card-header text-primary text-decoration-none">{(title.length < 50) ? title : title.substring(0, 50)+".."}<i className="bi bi-hand-index-thumb"></i> </Link>
        <div className="card-body text-secondary d-flex row justify-content-between">
          <p className="card-text" style={{textAlign: 'justify'}}>{(summary.length < 180) ? summary : `${summary.substring(0, 180)}(and more).`}</p>
          <p className="card-text">Last Updated: {dateFormat(updatedAt, "mmmm d, yyyy")}</p>
        </div>
      </div>
    </>
  )
}

export default Card