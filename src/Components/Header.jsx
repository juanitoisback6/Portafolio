import Icon from '../assets/IconD.svg'



export default function Header (){


          return(
          <>
          <header>
                   <div>
                    <img src={Icon} draggable="false"  alt="Icon of the page" />
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