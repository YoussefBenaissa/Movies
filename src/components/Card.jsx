import React from "react";
import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Card = (props) => {
  const film = props.film;
  
 return (
    <>
      <div className="card mb-3 mt-4 ml-2" style={{ width: "560px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={
                "https://www.themoviedb.org/t/p/w220_and_h330_face/" +
                film.poster_path
              }
              style={{ width: "auto" }}
            />
          </div>
          <div className=" ml-3 col-md-5">
            <div className="card-body">
              <h5 className="card-title mt-4">{film.title}</h5>
              <p className="card-text mt-3">
                {film.release_date} | {film.vote_average}/10 ({film.vote_count}){" "}
              </p>
              <a href="#" className="text-danger " >
                Ajoutez a vos favoris
              </a>
              <Link className=" btn btn-warning mt-3" to="/details">
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
