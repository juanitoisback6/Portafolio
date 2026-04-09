import Icon from '../assets/IconD.svg'



export default function Header (){


          return(
          <>
          <header>
                   <div>
                    <a className="footerAnchor" href="https://github.com/juanitoisback6" rel="noopener noreferrer" target="_blank"> 
                    <img src={Icon} draggable="false"  alt="Icon of the page" /> </a>
                    </div> 
                    <nav>
                    <a href="#skillsn">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#aboutMe">About me</a>
                    <a href="#contact">Contact</a>
                    </nav>
          </header>
          </>
          )
}