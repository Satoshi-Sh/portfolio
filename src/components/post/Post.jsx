import { Link } from "react-router-dom";
import "./post.css";

export default function Post(props) {
  const cats = props.post.categories 
  
  return (
    <div className="post">
      <img
        className="postImg"
        src={props.post.imageURL}
        alt="blog realted"
      />
      <div className="postInfo">
        <div className="postCats">
          {cats.map((category,i)=>{
        return (
        <span className='postCat' key={i}>
            <Link className='link' to={"/blog?category=" + category._id +"&name=" +category.name }>
                {category.name}
            </Link>
        </span>)
          })}
        </div>
        <span className="postTitle">
          <Link to={"/blog/" + props.post._id} className="link">
            {props.post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{'Created at ' + props.post.created_formatted}
</span>
      </div>
      <p className="postDesc">
        {props.post.shorten_text}
      </p>
    </div>
  );
}