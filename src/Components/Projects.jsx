import img3 from '/laptopjpg.jpg'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className="projects_container">
    <div className='project_conatainer_main'>
        <h1 className='projects_main_heading'>projects</h1>
        <span className='projects_main_smallLine'> </span>
         <p className='projects_main_lines'>Explored my personal projects, each accompanied by its own detailed case study</p>

    </div>
    <div className="project_conatainer_sub">
        
        <div className="project_conatainer_sub_left">
      
                <img src={img3} width={250} height={250} alt="" />

                

            

        </div>
        <div className="project_conatainer_sub_right">
                 <h1 className='project_conatainer_sub_right_mainHeading'>projects</h1>
                 <p  className='project_conatainer_sub_right_lines'>
                 Here you will find my  projects. I have worked on multiple projects, and you can check all of them in the Case Studies section.</p>
                <nav > <Link to ="/Casestudies" className='link'><h2 className='project_conatainer_sub_right_button'> case studies</h2></Link></nav>
        </div>
    </div>
    </div>
  )
}

export default Projects
