import React from 'react';

function Image({image}) {

    const {largeImageURL, likes, previewURL, tags, views} = image;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">{likes} Likes</p>
                    <p className="card-text">{views} Views</p>
                </div>
                <div className="card-footer">
                    <a href={largeImageURL} rel="noopener noreferrer" target="_blank" className="btn btn-primary btn-block">Ver Imagen</a>
                </div>
            </div>
        </div>
    );
}

export default Image;