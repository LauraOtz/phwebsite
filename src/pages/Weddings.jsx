import React from "react";
import NavBar from "../components/NavBar";
import weddings from "../css/weddings.css";
import pau from "../assets/pau.jpg"
import q from "../assets/q.jpg";
import q1 from "../assets/q1.jpg";
import q2 from "../assets/q2.jpg";
import q3 from "../assets/q3.jpg";

const Weddings = () => {
  return (
    <>
      <NavBar />
  
     

      <section class="info">
        <h1>Bodas</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cupiditate omnis accusantium doloremque quidem fugiat voluptas laudantium, officiis voluptatem magnam?</h3>
      </section>
      <section className="cards-wrapper">
        <div className="card-grid-space">
          <div className="card cardW card1">
            <a href="https://codetheweb.blog/2017/10/06/html-syntax/">
              <div>
                <h3 className="cardtitle">Carla & Francisco</h3>
              
              </div>
            </a>
          </div>
          
        </div>
        <div className="card-grid-space">
          <div className="card cardW card2">
            <a
              className=""
              href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/"
            >
              <div>
                <h3 className="cardtitle">Basic types of HTML tags</h3>
             
              </div>
            </a>
          </div>
        
        </div>
        <div className="card-grid-space">
          <div className="card cardW card3">
            <a
              className=""
              href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/"
            >
              <div>
                <h3 className="cardtitle">Links, images and about file paths</h3>
               
              </div>
            </a>
          </div>
          
      
        </div>
        {/* ------------------------- */}
        <div className="card-grid-space">
          <div className="card cardW card1">
            <a href="https://codetheweb.blog/2017/10/06/html-syntax/">
              <div>
                <h3 className="cardtitle">Carla & Francisco</h3>
              
              </div>
            </a>
          </div>
          
        </div>
        <div className="card-grid-space">
          <div className="card cardW card2">
            <a
              className=""
              href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/"
            >
              <div>
                <h3 className="cardtitle">Basic types of HTML tags</h3>
             
              </div>
            </a>
          </div>
        
        </div>
        <div className="card-grid-space">
          <div className="card cardW card3">
            <a
              className=""
              href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/"
            >
              <div>
                <h3 className="cardtitle">Links, images and about file paths</h3>
               
              </div>
            </a>
          </div>
          
      
        </div>
        {/* -------------------------------- */}
        <div className="card-grid-space">
          <div className="card cardW card1">
            <a href="https://codetheweb.blog/2017/10/06/html-syntax/">
              <div>
                <h3 className="cardtitle">Carla & Francisco</h3>
              
              </div>
            </a>
          </div>
          
        </div>
        <div className="card-grid-space">
          <div className="card cardW card2">
            <a
              className=""
              href="https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/"
            >
              <div>
                <h3 className="cardtitle">Basic types of HTML tags</h3>
             
              </div>
            </a>
          </div>
        
        </div>
        <div className="card-grid-space">
          <div className="card cardW card3">
            <a
              className=""
              href="https://codetheweb.blog/2017/10/14/links-images-about-file-paths/"
            >
              <div>
                <h3 className="cardtitle">Links, images and about file paths</h3>
               
              </div>
            </a>
          </div>
          
      
        </div>
      
      </section>
    </>
  );
};

export default Weddings;
