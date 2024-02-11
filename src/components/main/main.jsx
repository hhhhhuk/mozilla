import { Link } from "react-router-dom";
import "./main.css";
import avatar from "assets/img/Avatar.svg";
const CardMass = [
  {
    img: "/images/Avatar.svg",
    title: "Видеооооок1",
    text: "Обычный чел1",
  },
  {
    img: "/images/Avatar.svg",
    title: "Видеооооок2",
    text: "Обычный чел2",
  },
  {
    img: "/images/Avatar.svg",
    title: "Видеооооок3",
    text: "Обычный чел3",
  },
  {
    img: "/images/Avatar.svg",
    title: "Видеооооок4",
    text: "Обычный чел4",
  },
  {
    img: "/images/Avatar.svg",
    title: "Видеооооок5",
    text: "Обычный чел5",
  },
];

export default function Main() {
  return (
    <div className="card-list">
      {CardMass.map((e) => {
        if (CardMass.title != "") {
          return (
            <div className="card">
              <img src={e.img} alt="" className="card__img" />
              <div className="card__desc">
                <h1 className="desc__title">{e.title}</h1>
                <p className="desc__text">{e.text}</p>
              </div>
            </div>
          );
        }
        return <></>;
      })}

      <Link to="/">DDX</Link>
    </div>
  );
}
