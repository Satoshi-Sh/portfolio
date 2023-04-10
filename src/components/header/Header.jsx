import "./header.css"


export default function Header(props){
    return (
        <div className="header">
          <div className="headerTitles">
            <span className="headerTitleLg">{props.title}</span>
          </div>
          <img
            className="headerImg"
            src='https://res.cloudinary.com/dmaijlcxd/image/upload/v1670714103/cld-sample-2.jpg'
            alt="sunset"
          />
        </div>
      );
}