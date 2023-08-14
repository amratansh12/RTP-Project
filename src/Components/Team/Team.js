import React from 'react'
import "./team.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import upper from './Upper gradient.svg';
import lower from './down.svg';
import agrima from './AGRIMA DARSHAN.jpg';
import priyangsi from './PRIYANGSI DEY.jpg';
import tapan from './TAPAN KARANGIYA.jpg';
import raviraj from './RAVIRAJ GOURIHAR BHOSALE.jpeg';
import tushar from './TUSHAR MAINI.jpg';
import pankhuri from './PANKHURI SAXENA.jpg';
import ayush from './AYUSH ASHRAY NISHAD.jpg';
import krish from './KRISH SHAH.jpg';
import bhavnesh from './BHAVNESH BHAT.jpg';
import shivam from './SHIVAM SINGH ASWAL.jpg';
import yash from './YASH SHARMA.jpg';
import manthan from './MANTHAN MUKATI.jpg';
import monaksh from './MONAKSH NAYAK.jpg';
import shashank from './Shashank Mandaknalli.jpg';
import keerthi from './KEERTHI.jpg';
import arut from './N.ARUTKEERTHI.png';
import rmya from './G RAMYA SRI.jpg';
import aarsh from './Aarsh Choudhary.jpeg';
import kaustav from './kaustav.jpg';
import himanshu from './HIMANSHU GROVER.jpg';
import jai from './JAIKHOMBA SINGHA.jpeg';
import jin from './Jinti Barman.jpg';
import teampic1 from './teampic1_.jpg';
import teampic2 from './teampic2_.jpg';
import teampic3 from './teampic3_.jpg';
import teampic4 from './teampic4_.jpg';
import teampic5 from './teampic5_.jpg';
import teampic6 from './teampic6_.jpg';
import teampic7 from './teampic7_.jpg';
import teampic8 from './teampic8_.jpg';
import teampic9 from './teampic9_.jpg';
import anil from './anil.png';
import aru from './aru.png';
import karun from './karun.png';
import meena from './meena.png';
import patnaik from './patnaik.png';
import sanjay from './sanjay.png';

function Team() {
  const teamPhotos = [
    teampic2,
    teampic3,
    teampic4,
    teampic5,
    teampic6,
    teampic1,
    teampic7,
    teampic8,
    teampic9,
    // Add more photo paths as needed
  ];
  
  return (
    <body>
      <header>
      <div id="RTP">
       <p className="RTP">OUR TEAM</p> 
       <hr className="line" />

        </div>
      </header>
      <div  >
      <Carousel
       autoPlay 
       infiniteLoop 
       showThumbs={false} 
       stopOnHover={false}
     >
        {teamPhotos.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt={`Team ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
      <div>
        <h2>PROFESSOR</h2>
      </div>
      <div id="member1" >
        <div id="head" >
          <img id="member" src={aru}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">P. Arumugam</p>
        <p id="designation">Professor</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
        <div id="head" >
          <img id="member" src={anil}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Anil Gourishetty</p>
        <p id="designation">Professor</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          
        <div id="head" >
          <img id="member" src={meena}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Meenakshi Rawat</p>
        <p id="designation">Professor</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
        <div id="head" >
          <img id="member" src={karun}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Karun Rawat</p>
        <p id="designation">Professor</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={patnaik}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Amalendu </p>
        <p id="designation">Professor</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={sanjay}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Sanjay Upadhyay</p>
        <p id="designation">Professor</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
      </div>
      <div>
        <h1 id="diff" >MECHANICAL</h1>
      </div>
      <div id="member1">
      <div id="head" >
          <img id="member" src={yash}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Yash Sharma</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={manthan}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Manthan Mukati</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={monaksh}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Monaksh Nayak</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={shashank}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Shashank</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
      </div>
      <div>
        <h3 id="dif" >DATA</h3>
      </div>
      <div id="member1">
      <div id="head" >
          <img id="member" src={keerthi}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Keerthi</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={arut}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">N.Arutkeerthi</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={rmya}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">G Ramya Sri</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={aarsh}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Aarsh Chaudhary</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={kaustav}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Kaustav</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
      </div>
      <div>
        <h1 id="diff" >STEERING</h1>
      </div>
      <div id="member1">
      <div id="head" >
          <img id="member" src={himanshu}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Himanshu Grover</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={jai}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Jaikhomba</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={jin}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Jinti Barman</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
      </div>
      <div>
        <h3 id="dif" >ELECTRICAL</h3>
      </div>
      <div id="member1" >
        <div id="head" >
          <img id="member" src={agrima}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Agrima Darshan</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
        <div id="head" >
          <img id="member" src={priyangsi}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Priyangsi Dey</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          
        <div id="head" >
          <img id="member" src={tapan}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Tapan Karangiya</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
        <div id="head" >
          <img id="member" src={raviraj}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Raviraj Bhosale</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={tushar}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Tushar Maini</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={pankhuri}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Pankhuri Saxena</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={ayush}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Ayush Nishad</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={krish}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Krish Shah</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={bhavnesh}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Bhavnesh Bhat</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
          <div id="head" >
          <img id="member" src={shivam}  alt="keerthi"/>
          <div id="upper" >
          <img id="uppergra" src={upper} alt=" "/>
      </div>
      <div id="lower" >
        <p id="name">Shivam Singh</p>
        <p id="designation">Team Member</p>
          <img id="lowergra"  src={lower} alt=" "/>
      </div>
          </div>
      </div>
    </body>
  )
}


export default Team




