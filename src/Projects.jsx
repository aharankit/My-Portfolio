import zeptoImage from '../images/zeptoImage.png';
import gridlistImage from '../images/gridlistImage.png';

console.log(zeptoImage);
export default function Projects(){
    const projectsData = [
        {
            'id' : '1',
            'projectsName' : 'Grid Table',
            'url' : gridlistImage,
            'descriptions' : 'A table with CRUD functionality, sorting, and pagination.',
            'githubBtn' : 'Github',
            'previewBtn' : 'Preview',
            'gitHubUrl' : 'https://github.com/aharankit/Grid-Table',
            'previewUrl' : 'https://jsdata-table.netlify.app/',
        },
        {
            'id' : '2',
            'projectsName' : 'Zepto Clone',
            'url' : zeptoImage,
            'descriptions' : 'A website with rendering based on search and cart functionality.',
            'githubBtn' : 'Github',
            'previewBtn' : 'Preview',
            'gitHubUrl' : 'https://github.com/aharankit/Zepto_app',
            'previewUrl' : 'https://zepto-app.netlify.app/',
        },
        
    ]
    return(
        <section className="projects" id="projects">
            <div className="section-container">
                <h2 className="title">My Projects</h2>

                <div className="projects-contents">
                    {
                        projectsData.map((item,index) =><div key={index} className="card">
                            <div className="card-content">
                                <img src={item.url} height={180} width={200}/>
                                <h3>{item.projectsName}</h3>
                                <p>{item.descriptions}</p>
                                <div className="project-btn-box">
                                    <a href={item.gitHubUrl}><button>{item.githubBtn}</button></a>
                                    <a href={item.previewUrl}><button>{item.previewBtn}</button></a>
                                </div>
                            </div>
                        </div>)   
                    }
                </div>
            </div>
        </section>
        
    )
}