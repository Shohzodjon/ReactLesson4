import './header.css';

function Header(){
    return(
        <header className="header">
<nav className="navbar1">
    <div className="container d-flex justify-content-between align-items-center">
     <h1 className="header--logo">Start Bootstrap</h1>
      <ul>
          <li><a href="https://startbootstrap.com/previews/blog-home">Home</a></li>
          <li><a href="https://startbootstrap.com/previews/blog-home">About</a></li>
          <li><a href="https://startbootstrap.com/previews/blog-home">Contact</a></li>
          <li><a href="https://startbootstrap.com/previews/blog-home" className ="active">Blog</a></li>
      </ul>
    </div>
</nav>
 <div className="header--main">
     <div className="container">
 
   <h2>Welcome to Blog Home!</h2>
   <p>A Bootstrap 5 starter layout for your next blog homepage</p>
   
   </div>
 </div>
        </header>
    )
}
export default Header;