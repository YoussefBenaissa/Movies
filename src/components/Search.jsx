import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import CardSearch from "./CardSeach";

const Search = () => {
  const [search, setSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [playOnce, setPlayOnce] = useState(true);

  const handleSearch = (e) => {
    let value = e.target.value;
    value.length > 2 && setSearchTerm(value);
  };

  useEffect(() => {
    if (playOnce) {
      axios
        .get(
          "https://api.themoviedb.org/3/discover/movie?api_key=5082fea2cd6b8c89d1e4529df1eee0f5"
        )
        .then((res) => {
          setSearch(res.data.results);
          setPlayOnce(false);
        });
    }
  }, [search, playOnce]);
  console.log(search);
  return (
    <>
      

      <div>
        {search
          
          .map((val) => {
            return <CardSearch val={val} key={val.id}/>;
          })}
      </div>
    </>
  );
};

export default Search;
