import React from "react";
import "./Results.css";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="container section">
        <div className="row">
          <div className="Photos">
            {props.photos.data.photos.map(function (photos, index) {
              return (
                <div key={index}>
                  <div className="col-4">
                    <img
                      src={photos.src.tiny}
                      alt={photos.src.original}
                      className="img-fluid"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
