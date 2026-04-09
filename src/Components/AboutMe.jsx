import img2 from "../assets/Img2.JPG"



export default function AboutMe (){

return(
   <>
   <h2 id="aboutMe">About Me</h2>
   <section className="aboutMe">
          <p>Hi, I'm Dakiti!  Welcome to my journey in becoming a software architect. Now I am giving all my time to get better at Front-end skills before I move on Back-end and databases. I've been learning using AI (using socratic mode as instructions for my AI), I think AI is Google on steroids, so it helps me to search a lot of info in this big library called internet (yes I know I have to be cautious and critic with the information we have, we are in the age of information lol), since I am learning and I am curious about what's under the hood, I like to know how the things work before I got into, that helps me to get better answers and solutions. On the other hand, I really enjoy knowing new people, I think it helps to know more about the world we are on.

            <br />
            <br />

(Also, I don't like to say it, but I am a creative person, Sometimes in my scatterfocus time I have some random Ideas.)

          </p>
          
          <img src={img2} alt="" draggable="false"/>
   </section>
   </>
)          
}