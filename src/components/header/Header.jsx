import "./header.css"
import  woods from '../../images/woods.jpg'

export default function Header(){
    return (
        <div className="header">
          <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
          </div>
          <img
            className="headerImg"
            src={woods}
            alt="sunset"
          />
        </div>
      );
}