import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (

      <div className='my-3'>
        <div className="card">
          <div style={{ dispaly: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
            <span className="badge rounded-pill bg-danger">{source}
            </span>
          </div>
          <img src={!imageUrl ? "https://www.hindustantimes.com/ht-img/img/2024/06/09/1600x900/PALESTINIAN-ISRAEL-CONFLICT-18_1717922188639_1717922205375.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreference' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">More News</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
