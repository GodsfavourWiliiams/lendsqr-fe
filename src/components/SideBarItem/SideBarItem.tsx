import { useLocation, useNavigate } from "react-router-dom";
import "./SideBarItem.scss";

interface SideBarItemProps {
  title: string;
  icon: string;
  active?: string;
  setActive?: (title: string) => void;
}
const SideBarItem = (props: SideBarItemProps) => {
  const { setActive, active } = props;
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <div
      className={`container ${props.active === props.title ? "active" : ""}`}
      onClick={() => {
        if (active === "Users" && setActive) {
          setActive("Users");
        }
        if (pathname !== "/dashboard") navigate("/dashboard");
      }}
    >
      <img src={props.icon} alt={`${props.icon} icon`} className="image" />
      <p className="title">{props.title}</p>
    </div>
  );
};

export default SideBarItem;
