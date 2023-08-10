
import React,{useState} from 'react'
import "./Telescope.css";
import img2 from "../Resources/img2.png";
import img1 from "../Resources/img1.png";
// import backGroundImage from "./image 82.png";

import {chap0part1, chap0part2, chap0part3, chap1part1, chap1part2, chap1part3, chap2part1, chap2part2, chap2part3,chap3part1, chap3part2, chap3part3} from "./docs.js";


function Telescopes() {


  // var images = [img1, img2, img1, img2];

  function index() {
    var a = document.getElementsByClassName("left-div")[0];
    if (a.style.display === "block") {
      a.style.display = "none";
    } else {
      a.style.display = "block";
    }
  }


  const [content, setContent] = useState(chap0part1());
  const [image, setImage] = useState(img1);

  
  const fetchData = (dataType) => {
    if (dataType === '01') {
      return chap0part1();
    } 
    else if (dataType === '02') {
      return chap0part2();
    }
    else if (dataType === '03') {
      return chap0part3();
    }
    else if (dataType === '11') {
      return chap1part1();
    } 
    else if (dataType === '12') {
      return chap1part2();
    }
    else if (dataType === '13') {
      return chap1part3();
    }
    else if (dataType === '21') {
      return chap2part1();
    } 
    else if (dataType === '22') {
      return chap2part2();
    }
    else if (dataType === '23') {
      return chap2part3();
    }
    else if (dataType === '31') {
      return chap3part1();
    } 
    else if (dataType === '32') {
      return chap3part2();
    }
    else if (dataType === '33') {
      return chap3part3();
    }
  };


  const fetchImage = (dataType) => {
    if (dataType === '0') {
      return img1;
    } 
    else if (dataType === '1') {
      return img2;
    }
    else if (dataType === '2') {
      return img1;
    }
    else if (dataType === '3') {
      return img2;
    }

  };



  const handleClick = (dataType1, dataType2) => {
    document.getElementById("i1").scrollIntoView({ behavior: 'smooth' });
    const newData = fetchData(dataType1);
    const newImage = fetchImage(dataType2);
    setContent(newData);
    setImage(newImage);
  };








  return (
    <div className='helper' >
      <div  id = "i1" className='contain' >
        <div className='left-col' id = 'left-col-jump'>
          <h1 className='left-head' onClick={() => index()} >CONTENTS</h1>
          <div className='left-div'>

            <div>
              <h6 className='left-sub-head' onClick={() => handleClick('01' , '0' ) }>Basics</h6>
              <ul>
                <li onClick={() => handleClick('01', '0')}>Basics</li>
                <li onClick={() => handleClick('02', '0')}>Basics</li>
                <li onClick={() => handleClick('03', '0')}>Basics</li>
              </ul>
            </div>

            <div>
              <h6 className='left-sub-head' onClick={() => handleClick('11', '1')}>Basics</h6>
              <ul>
                <li onClick={() => handleClick('11', '1')}>Basics</li>
                <li onClick={() => handleClick('12', '1')}>Basics</li>
                <li onClick={() => handleClick('13', '1')}>Basics</li>
              </ul> 
            </div>

            <div>
              <h6 className='left-sub-head' onClick={() => handleClick('21', '2')}>Basics</h6>
              <ul>
                <li onClick={() => handleClick('21', '2')}>Basics</li>
                <li onClick={() => handleClick('22', '2')}>Basics</li>
                <li onClick={() => handleClick('23', '2')}>Basics</li>
              </ul>
            </div>

            <div>
              <h6 className='left-sub-head' onClick={() => handleClick('31', '3')}>Basics</h6>
              <ul>
                <li onClick={() => handleClick('31', '3')}>Basics</li>
                <li onClick={() => handleClick('32', '3')}>Basics</li>
                <li onClick={() => handleClick('33', '3')}>Basics</li>
              </ul>
            </div>

          </div>
        </div>


        <div className='right-col' >
          <h1 className='right-head'>SMALL TELESCOPE</h1>
          <div className='right-div'>
            <img id='txt-img' src={image} />
            <p id='txt'>
              {content}
            </p>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Telescopes;