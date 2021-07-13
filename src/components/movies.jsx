import { Fragment, useState } from "react";
import { useEffect } from "react";
import React from "react";
import axios from "axios";
import Card from "./Card";

const Movies = () => {
  const [data, setData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);
 
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
  console.log(data)
  return (
    <>
    <div className="row">{data.map((film)=>(<Card film={film} key={film.id}/>))}</div>
    

      
    </>
  );
};

export default Movies;
