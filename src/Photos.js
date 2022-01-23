import React from "react";
import "./Results.css";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos.data.photos) {
    return (
      <div className=" section Photos">
        <div className="row">
          {props.photos.data.photos.map(function (photos, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photos.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photos.src.landscape}
                    alt={photos.src.original}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
