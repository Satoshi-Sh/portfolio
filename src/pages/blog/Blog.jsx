import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./blog.css";

export default function Blog() {
  
  return (
    <>
      <Header title='Blog'/>
      <div className="blog">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}