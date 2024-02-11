import "./profile.css";
import Img from "assets/img/Profile.svg";

const Profile = (params) => {
  return (
    <div className="profMain">
      <img src={Img} alt="" className="profMain_img" />
      <a href="" className="profMain_name">
        USERNAME
      </a>
    </div>
  );
};

export { Profile };
