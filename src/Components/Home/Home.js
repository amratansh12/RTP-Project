import React from 'react'
import "./Home.css";
import img1 from "../Resources/img1.png";
import img2 from "../Resources/img2.png";
import animation from "../Resources/animation.png";

function Home() {
  return (
    <body>
      <header>
      
      <div id="RTP">
       <p className="RTP">RADIO</p>  
       <p className="RTP">TELESCOPE</p>  
       <p className="RTP">PROJECT</p>  
       <hr className="line" />
       <div className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</div>
       <img src={animation} id="animation" alt="" />
     
        </div>
      </header>
      

      <div className="images">

        <div className="left">
        <div className="line1"></div>
        <div id="tele1">
          <img src={img1} className="tele1" alt="" />
          <div className="grad">
            SMALL RADIO <br />TELESCOPE 
          </div>
        </div>
        <div className="line2"></div>
        </div>




        <div className="center">
          T <br />
          H <br />
          E <br /> <br />
          T <br />
          E <br />
          L <br />
          E <br />
          S <br />
          C <br />
          O <br />
          P <br />
          E <br />
          S <br />
        </div>


        <div className="right">
        <div className="line3"></div>
        <div id="tele2">
          <img src={img2} className="tele2" alt="" />
          <div className="grad">
            MINI RADIO <br />TELESCOPE 
          </div>
        </div>
        <div className="line4"></div>
        </div>


      </div>
    </body>
  )
}

export default Home




