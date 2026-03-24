import img2 from "../assets/Img2.JPG"



export default function AboutMe (){

return(
   <>
   <h2 id="aboutMe">About Me</h2>
   <section className="aboutMe">
          <p>Hi, I'm Juan! I build for the web, but I think in blueprints. As a Front-end Developer, I don't just stop at making things look good—I want to know exactly how they work from end to end. I’m currently on a path toward Software Architecture, fueled by a love for clean code and robust systems. You’ll often find me at local tech meetups, soaking up new perspectives and staying at the forefront of where technology is headed.</p>
          <img src={img2} alt="" draggable="false"/>
   </section>
   </>
)          
}