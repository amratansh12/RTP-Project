import Redirect from "../../../assets/Redirect_Updated.png";
import "./index.css";

const Content = () => {
  return (
    <div className="content">
      <div className="left-content">
        <p className="heading">Nature</p>
        <p className="description">February, 2023</p>
      </div>
      <div className="right-content">
        <span className="para">
          <text>
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. Etiam eu
            turpis molestie, dictum est a, mattis tellus. lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
            est a, mattis tellus.
          </text>
          <img src={Redirect} alt="Redirect" />
        </span>
      </div>
    </div>
  );
};

export default Content;
