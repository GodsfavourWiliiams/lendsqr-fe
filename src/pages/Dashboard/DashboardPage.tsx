import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import "./Dashboard.scss";
import DashboardContent from "../../components/DashboardContent/DashboardContent";

const DashboardPage = () => {
  return (
    <div>
      <SideBar/>
      <div className="body">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
};

export default DashboardPage;
