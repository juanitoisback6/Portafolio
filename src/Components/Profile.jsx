import img1 from "../assets/Img1.jpg"



export default function Profile (){



          return(
                    <>
                    <section className="profile">
          
                    <div className="profileImage">
                              
                              <img src={img1} alt="" draggable="false"/> 
                              <div><h1>FRONT-END</h1></div>
                              <div><h2>DEVELOPER</h2></div>
                              <div><h3>JUAN D.C.C.</h3></div>
                              </div>
                   
                    </section>
          
                    </>
          )
}