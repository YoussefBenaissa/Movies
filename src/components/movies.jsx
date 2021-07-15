import { Fragment, useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import Card from "./Card";



const Movies = () => {
  const [data, setData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  

  useEffect(() => {
    if (playOnce) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=5082fea2cd6b8c89d1e4529df1eee0f5"
        )
        .then((res) => {
          setData(res.data.results);
          setPlayOnce(false);
        });
    }
  }, [data, playOnce]);

  const handleSearch = (e) => {
    let value = e.target.value;
    value.length > 1 && setSearchTerm(value);
  };

  return (
    <>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control ml-auto mt-2"
          type="search"
          placeholder="Recherche"
          aria-label="Search"
          onChange={handleSearch}
        />
        <button className="btn btn-primary mt-2 ml-2 " type="submit">
          Recherche
        </button>
      </form>

      <div className="row">
        {data
          .filter((film) => {
            return film.title.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((film) => (
            <>
              <Card film={film} key={film.id} />
          
            </>
          ))}
      
      </div>
    </>
  );
};

export default Movies;
