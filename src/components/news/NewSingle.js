// import React, {Component} from 'react';
//create a STATELESS COMPONENT
const NewSingle = ({item}) => (
    <div className="col s4">
    <div className="card"> 
    <div className="card-image">
    {/* <li>

    </li> */}
    <img src={item.urlToImage} alt={item.title} />
    <span className="card-title">{item.source.name}</span>
    <div>
    <div className="card-content">
        <p>{item.title}</p>
    </div>
    <div className="card-action">
        <a href={item.url} target="_blank">Read Full Article</a>
    </div>
    </div>
    </div>
    </div>
    </div>
);

export default NewSingle; 