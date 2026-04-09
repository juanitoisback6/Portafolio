import linkedin from "../assets/linkedin-svgrepo-com.svg"
import telegram from "../assets/telegram-svgrepo-com.svg"
import github from "../assets/github-svgrepo-com.svg"


export default function Contact (){


return(
<>
<h2 className="contacttittle" id="contact">Contact</h2>
<section className="contacticons">
          <a href="https://www.linkedin.com/in/juan-casallas-2354a0377/" rel="noopener noreferrer" target="_blank"> 
          <img src={linkedin} alt="Linedin icon" />
          </a>

           <a href="https://t.me/Dakitidunno" rel="noopener noreferrer" target="_blank" > 
                    <img src={telegram} alt=" Telegram icon" />
                    </a> 
                    <a href="https://github.com/juanitoisback6" rel="noopener noreferrer" target="_blank">
                              <img src={github} alt="Git hub icon" />
                    </a>

</section>
</>
)
}