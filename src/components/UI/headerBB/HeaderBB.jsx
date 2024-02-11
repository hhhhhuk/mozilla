import "./HeaderBB.css";

const HeaderBB = (params) => {
  return (
    <button className="HeaderBJ">
      <img src={params.img} alt="" className="HeaderBj_img" />
      <p className="headerBj_text">{params.text}</p>
    </button>
  );
};

export { HeaderBB };
