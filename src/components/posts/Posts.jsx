import Post from "../post/Post";
import "./posts.css";
import  rice from '../../images/avatar.jpg'
import  woods from '../../images/woods.jpg'


export default function Posts() {
  return (
    <div className="posts">
      <Post img={rice} />
      <Post img={woods} />
      <Post img={rice} />
      <Post img={woods} />
    </div>
  );
}