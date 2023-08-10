import React from 'react'
import "./home.css"; 
// import mini from "./mini.jpg";
import mini from "./satellite.png";
import line1 from "./line.png"; 
import star from "./star.png"; 
import Animation from "./Animation.js";
import wallpaper from "./wallpaper.png";
import bg from "./bg.png";
import Carousel from 'react-spring-3d-carousel';


function Home() {
  return (
    <body>
      <div className="full">
      <img src={bg} alt="" className="Topbg1"/>
      
    <div className="bg1">
    <img src={wallpaper} className="Topbg" alt="" />

    {/* <div className="box">MAI ANIMATION KA DABBA HU</div> */}
      <div className="animation">
      <Animation/>
      </div>



      <div className="RTP">
        <div className="RT">RADIO TELESCOPE</div>
        <div className="RT">PROJECT</div>
        <div className="line">
        <img src={star} alt="" />
        </div>
        
        <div id="para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </div>

      </div>   {/* /*RTP ENDS*/}  
    </div>


      <div id="telescope">
        <div className="head">TELESCOPES</div>
        <img src={line1} alt="" />
          

        <div id="mini">
          <div className="miniLeft">
            <img className="border"src={mini} alt="" />
          </div>

          <div className="miniRight">

            <div className="top">MINI TELESCOPE</div>

            <div className="mid">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. ioasjdiojasoidjaoijsdoijasoadmopaskdopaskopdkopkapdoakpdokask
            
            </div>

            <div className="bottom">
              <button className="read">Read More &gt; </button>
            </div>

          </div>
        
        </div>

        <div id="small">
          <div className="miniLeft">
            <img className="border"src={mini} alt="" />
          </div>

          <div className="miniRight">

            <div className="top">SMALL TELESCOPE</div>

            <div className="mid">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
            
            </div>

            <div className="bottom">
              <button className="read">Read More &gt; </button>
            </div>

          </div>

          

        


        

        </div>


        <div id="large">
          <div className="miniLeft">
            <img className="border"src={mini} alt="" />
          </div>

          <div className="miniRight">

            <div className="top">LARGE TELESCOPE</div>

            <div className="mid">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
            
            </div>

            <div className="bottom">
              <button className="read">Read More &gt; </button>
            </div>

          </div>

        </div>


      </div>
        
      </div>
    </body>
  )
}

export default Home




