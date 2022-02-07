import './main.css';


function Main(){
    return(
        <section className="main--section">
            <div className="container">
                <div className= "row">
                     <div className="col-lg-8">

                       <div className="card p-2">
                           <div className="card--img">
                               <h3>850 x 350</h3>
                           </div>
                           <div className="card--title">
                               <span>January 1, 2022</span>
                               <h3>Featured Post Title</h3>
                               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                               <button class="btn btn-primary" type="submit">Read more</button>
                           </div>
                       </div>
                       {/* end of card */}

<div className="row my-3">
    <div className="col-md-6 col-sm-12">
 <div className="card">
     <div className="card--img">
         <h3>700 x 350</h3>
     </div>
     <div className="card--title">
        <span>January 1, 2022</span>                             
          <h3>Featured Post Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
       <button class="btn btn-primary" type="submit">Read more</button>
     </div>
 </div>
    </div>


    <div className="col-md-6 col-sm-12">
 <div className="card">
     <div className="card--img">
         <h3>700 x 350</h3>
     </div>
     <div className="card--title">
        <span>January 1, 2022</span>                             
          <h3>Featured Post Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
       <button class="btn btn-primary" type="submit">Read more</button>
     </div>
 </div>
    </div>
</div>

<div className="row my-3">
    <div className="col-md-6 col-sm-12">
 <div className="card">
     <div className="card--img">
         <h3>700 x 350</h3>
     </div>
     <div className="card--title">
        <span>January 1, 2022</span>                             
          <h3>Featured Post Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
       <button class="btn btn-primary" type="submit">Read more</button>
     </div>
 </div>
    </div>


    <div className="col-md-6 col-sm-12">
 <div className="card">
     <div className="card--img">
         <h3>700 x 350</h3>
     </div>
     <div className="card--title">
        <span>January 1, 2022</span>                             
          <h3>Featured Post Title</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
       <button class="btn btn-primary" type="submit">Read more</button>
     </div>
 </div>
    </div>
</div>

<div className="after"></div>
        {/* pagination */}

           
        <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item active"><a class="page-link" href="https://getbootstrap.com/docs/5.0/components/pagination/">1</a></li>
    <li class="page-item " aria-current="page">
      <span class="page-link">2</span>
    </li>
    <li class="page-item"><a class="page-link" href="https://getbootstrap.com/docs/5.0/components/pagination/">3</a></li>
    <li class="page-item"><a class="page-link" href="https://getbootstrap.com/docs/5.0/components/pagination/">...</a></li>
    <li class="page-item"><a class="page-link" href="https://getbootstrap.com/docs/5.0/components/pagination/">15</a></li>
    <li class="page-item">
      <a class="page-link" href="https://getbootstrap.com/docs/5.0/components/pagination/">Older</a>
    </li>
  </ul>
</nav>

                     </div>
                     {/* end of col-lg-8 */}

                     <div className="col-12 col-md-12 col-lg-4">
                         <div className="card mb-3">
                             <div className="search--box">
                                 <p>Search</p>
                             </div>
                             <div class="input-group mb-3">
                      <input type="search" class="form-control" placeholder="Enter search name ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                     <button class="btn btn-primary" type="button" id="button-addon2">Button</button>
                      </div>
                         </div>

                         <div className="card mb-4">
                             <div className="category-box">
                                 <p>Categories</p>
                             </div>
                             <div className="d-flex justify-content-around">
                               <ul>
                                   <li><a href="https://startbootstrap.com/previews/blog-home">HTML</a></li>
                                   <li><a href="https://startbootstrap.com/previews/blog-home">Web design</a></li>
                                   <li><a href="https://startbootstrap.com/previews/blog-home">Freebies</a></li>
                               </ul>

                               <ul>
                                   <li><a href="https://startbootstrap.com/previews/blog-home">JavaScript</a></li>
                                   <li><a href="https://startbootstrap.com/previews/blog-home">CSS</a></li>
                                   <li><a href="https://startbootstrap.com/previews/blog-home">Tutorials</a></li>
                               </ul>
                             </div>
                         </div>

                         <div className="card">
                             <div className="widget-box">
                                 <p>Side Widget</p>
                             </div>
                             <p className="px-2">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</p>
                         </div>
                     </div>
                </div>
            </div>
        </section>
    )
}

export default Main;