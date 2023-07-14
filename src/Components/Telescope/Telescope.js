
import React from 'react'
import "./Telescope.css";
import img2 from "../Resources/img2.png";
import img1 from "../Resources/img1.png";

import Content from "./docs.js";


function Telescopes() {


  var images = [img1, img2, img1, img2];


  function addContent(chap, part) {
    const x = document.getElementById("txt-img");
    x.src = images[chap];
    document.getElementById('txt').innerHTML = Content[chap][part];

    document.getElementById("right-col-jump").scrollIntoView({ behavior: 'smooth' });
  }

  function index() {
    var a = document.getElementsByClassName("left-div")[0];
    if (a.style.display === "block") {
      a.style.display = "none";
    } else {
      a.style.display = "block";
    }
  }


  return (
    <div className='helper' id='right-col-jump'>
      <div id="RTP" className='contain'>
        <div className='left-col'>
          <h1 className='left-head' onClick={() => index()}>CONTENTS</h1>
          <div className='left-div'>

            <div>
              <h6 className='left-sub-head' onClick={() => addContent(0, 0)}>Basics</h6>
              <ul>
                <li onClick={() => addContent(0, 0)}>Basics</li>
                <li onClick={() => addContent(0, 1)}>Basics</li>
                <li onClick={() => addContent(0, 2)}>Basics</li>
              </ul>
            </div>

            <div>
              <h6 className='left-sub-head' onClick={() => addContent(1, 0)}>Basics</h6>
              <ul>
                <li onClick={() => addContent(1, 0)}>Basics</li>
                <li onClick={() => addContent(1, 1)}>Basics</li>
                <li onClick={() => addContent(1, 2)}>Basics</li>
              </ul>
            </div>

            <div>
              <h6 className='left-sub-head' onClick={() => addContent(2, 0)}>Basics</h6>
              <ul>
                <li onClick={() => addContent(2, 0)}>Basics</li>
                <li onClick={() => addContent(2, 1)}>Basics</li>
                <li onClick={() => addContent(2, 2)}>Basics</li>
              </ul>
            </div>

            <div>
              <h6 className='left-sub-head' onClick={() => addContent(3, 0)}>Basics</h6>
              <ul>
                <li onClick={() => addContent(3, 0)}>Basics</li>
                <li onClick={() => addContent(3, 1)}>Basics</li>
                <li onClick={() => addContent(3, 2)}>Basics</li>
              </ul>
            </div>

          </div>
        </div>


        <div className='right-col' >
          <h1 className='right-head'>SMALL TELESCOPE</h1>
          <div className='right-div'>
            <img id='txt-img' src={img1} />
            <p id='txt'>
              {Content[0][0]}
            </p>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Telescopes;