import openedPoke from "../assets/openpoke.svg";
import todo from "../assets/todolist.svg";
import expenses from "../assets/Expensescalcu.svg";
import svgCon from "../assets/imgtosv.svg";
import cursori from "../assets/cursor-color.svg"
import js from "../assets/js-svgrepo-com.svg";
import htmli from "../assets/html-5-svgrepo-com.svg";
import cssi from "../assets/css-3-svgrepo-com.svg";
import chartjs from "../assets/Charjs.svg";
import reacti from "../assets/react-svgrepo-com.svg";



export default function Projects () {


return(
 <>
          <h2 className="projectstittle" id="projects">Projects</h2>

          <section className="pokedex">
                   
                     <div className="textZone">
                      <h2>Pokedex</h2>
                       <p>Pokedex where you can search for your favorite pokemon, you can search specific information using the input part, there you can type the ID or the name of the pokemon you want to search.</p>
                       <div className="tecnolog">
                               <div className="iconsTech">
                                        <img draggable="false" src={reacti} alt="react icon" /></div>
                               <div className="iconsTech">
                                        <img draggable="false" src={htmli} alt="HTML icon" />
                               </div>
                               <div className="iconsTech">
                                        <img draggable="false" src={cssi} alt="cssicon" />
                               </div>
                               <div className="iconsTech">
                                        <img draggable="false" src={js} alt="JavaScript icon" />
                               </div>
                       </div>
                              </div>
                              <div className="imageZone">
                                        <a href="https://juanitoisback6.github.io/Pokedex-React/"><img draggable="false" className="pokeimg1" src={openedPoke} alt="" /></a>
                              </div>
                     
          </section>

          <section className="pokedex">
                    <div className="imageZone">
                                        <a href="https://juanitoisback6.github.io/Expenses-Calculator-with-Chart.js/"><img className="pokeimg" draggable="false" src={expenses} alt="" /></a>
                              </div>
                     <div className="textZone">
                      <h2>Expenses Calculator</h2>
                       <p>A comprehensive financial dashboard designed to track, categorize, and analyze your personal spending with precision.  </p>
                        <div className="tecnolog2">
                               <div className="iconsTech">
                                        <img draggable="false" src={chartjs} alt="Chartjs icon" /></div>
                               <div className="iconsTech">
                                        <img draggable="false" src={htmli} alt="HTML icon" />
                               </div>
                               <div className="iconsTech">
                                        <img draggable="false" src={cssi} alt="cssicon" />
                               </div>
                               <div className="iconsTech">
                                        <img draggable="false" src={js} alt="JavaScript icon" />
                               </div>
                       </div>
                      
                              </div>
                             
                     
          </section>

          <section className="pokedex">
                   
                     <div className="textZone">
                      <h2>To Do List</h2>
                       <p>A streamlined productivity hub designed to capture, prioritize, and master your daily commitments. Our web application transforms complex task loads into actionable workflows, providing the structured clarity you need to reclaim your focus and ensure no goal falls through the cracks.</p>
                       <div className="tecnolog">
 
                               <div className="iconsTech">
                                        <img draggable="false" src={htmli} alt="HTML icon" />
                               </div>
                               <div className="iconsTech">
                                        <img draggable="false" src={cssi} alt="cssicon" />
                               </div>
                               <div className="iconsTech">
                                        <img draggable="false" src={js} alt="JavaScript icon" />
                               </div>
                       </div>
                              </div>
                              <div className="imageZone">
                                        <a href="https://juanitoisback6.github.io/Final-to-do-list/"><img className="pokeimg" draggable="false" src={todo} alt="" /></a>
                              </div>
                     
          </section>
          <h2 className="vibeCodedTittle">Vibe Coded Web Application:</h2>
          <section className="pokedex">

                    <div className="imageZone">
                                        <a href="https://juanitoisback6.github.io/svg-converter/"><img draggable="false" className="pokeimg" src={svgCon} alt="https://juanitoisback6.github.io/svg-converter/" /></a>
                              </div>
                   
                     <div className="textZone">
                      <h2>SVG converter</h2>
                       <p>I built an IMG to SVG converter because I was tired of hitting paywalls on every other site. Instead of paying a subscription just to convert a PNG, I decided to vibe code my own solution. It’s free, fast, and does exactly what it says.</p>
                       <div className="tecnolog">
 
                                
                               <div className="iconsTech">
                                        <img draggable="false" src={cursori} alt="Cursor ide icon" />
                               </div>
                       </div>
                              </div>
                              
                     
          </section>
 </>
)
}