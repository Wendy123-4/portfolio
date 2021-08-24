import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                          
                            <h7> <strong><u>Relevant CourseWork</u></strong></h7>
                          <div>
                          <ul >
                            <li><img src="images/1overlay-bg.png" width="15" height= "15"></img>Human-Computer Interaction</li>
                            <li><img src="images/1overlay-bg.png" width="15" height= "15"></img>Software engineering</li>
                            <li><img src="images/1overlay-bg.png" width="15" height= "15"></img>Data Structures and Algorithms</li>
                            <li><img src="images/1overlay-bg.png" width="15" height= "15"></img>Mobile Development</li>
                            <li><img src="images/1overlay-bg.png" width="15" height= "15"></img>Computer Networks</li>
                          </ul> 
                          </div>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work Experience</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfStart} {item.YearOfStart} {item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          <ul >
                            <li><img src="images/point.png" width="8" height= "8"></img>{item.Achievements}</li>
                            <li><img src="images/point.png" width="8" height= "8"></img>{item.Achievements2}</li>
                            <li><img src="images/point.png" width="8" height= "8"></img>{item.Achievements3}</li>
                            
                            
                          </ul> 
                          
                          </p>
                          
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Technical Skillset</span></h1>
            </div>

            <div className="nine columns main-col">

               {/* <p>
               {resumeData.skillsDescription}
               </p> */}

   				<div >

   				   <ul class="grid-list">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li><img src="images/1overlay-bg.png" width="15" height= "15"></img>
                        {item.skillname}
                      {/* <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em> */}
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}


