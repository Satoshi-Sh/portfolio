import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Index from "../../components/index/Index";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {
  return (
    <>
      <Header title='Home'/>
      <div className="home">
        <Index />
        <Sidebar />
      </div>
    </>
  );
}