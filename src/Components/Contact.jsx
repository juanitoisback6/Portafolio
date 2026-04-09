import linkedin from "../assets/linkedin-svgrepo-com.svg"
import telegram from "../assets/telegram-svgrepo-com.svg"
import github from "../assets/github-svgrepo-com.svg"


export default function Contact (){


return(
<>
<h2 className="contacttittle" id="contact">Contact</h2>
<section className="contacticons">
          <a href="https://www.linkedin.com/in/juan-casallas-2354a0377/"> 
          <img src={linkedin} alt="" />
          </a>

           <a href="https://t.me/Dakitidunno"> 
                    <img src={telegram} alt="" />
                    </a> 
                    <a href="https://github.com/juanitoisback6">
                              <img src={github} alt="" />
                    </a>

</section>
</>
)
}