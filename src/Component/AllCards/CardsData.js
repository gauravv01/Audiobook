import React from "react";
import { data } from "../../Store/data";
import Card from "./Cards/Card";
import "./AllCard.css";

function CardsData() {



  return (
    <div className="AllCard">
      {data.map((id) => {
        return (
          <Card
            key={id.bookname}
            img={id.img}
            Bookname={id.bookname}
            Author={id.author}
            
          />
        );
      })}
    </div>
  );
}

export default CardsData;
