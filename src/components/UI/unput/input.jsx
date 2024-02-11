import "./input.css";
import InputImg from "img/Search.png";

const Input = (params) => {
  return (
    <div className="InputSearch">
      <input type="text" className="Input" />
      <button className="InputBtn">
        <img src={InputImg} alt="" className="InputBtn_img" />
      </button>
    </div>
  );
};

export { Input };
