//Component name should start from capital letter like NewsCard
//if we want to pass information to a component, we need to use props means properties  
// image is a input for newscard
//if u want to pass some information as input that time u need to use props
const NewsCard=(props)=>{
    console.log(props);
  
        return(
       
       <div className="container">
       {/* <h1> {props.name}</h1> */}
  <div className="card">
 <img className="card-img-top" src={props.img} alt="Card image cap"/> 
  <div className="card-body">
    <h5 className="card-title">{props.news.title}</h5>
    <p className="card-text">{props.news.body}</p>
    <a href="#" className="btn btn-primary">Go Somewhere </a>
  </div>  
           </div>    
       </div> 

        )
}
export default NewsCard;