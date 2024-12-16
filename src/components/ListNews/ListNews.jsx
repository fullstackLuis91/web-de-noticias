import React, { useEffect, useState } from 'react'
import axios from "axios"


const ListNews = () => {
    const [news, setListNews] = useState([]);

const getNews = async () => {
    try {
        const res = await axios.get(
            "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=5J3symDWF8xtkdstJyYY2rnvH8zdfuAc"
    );
       setListNews(res.data.results) 

    }catch(error){
        console.error(error)

    }


};

useEffect(() => {
    getNews();
  }, []);


  return (
    <div className="ListNews-container">
      <h1> News list </h1>  
      {news.map((item) => {
        return (
          <div key = {item.id}>
            <h2>{item.source}</h2>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
   
export default ListNews