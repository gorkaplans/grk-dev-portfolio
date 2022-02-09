import React, { useState, useEffect} from 'react';
import './Projects.scss'

const query =`
    {
        projectsCollection {
          items {
            title
            year
            technologies
            link
          }
        }
      }
      
    `

const Projects = () => {
 
    const [page, setPage] = useState(null);

    useEffect(() => {
        window
          .fetch(`https://graphql.contentful.com/content/v1/spaces/0ewb2pu3d932/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Authenticate the request
              Authorization: "Bearer WDVWkhvYguEgrfhMMT9nh0JrACxTV2lDd82_pZSfC6U",
            },
            // send the GraphQL query
            body: JSON.stringify({ query }),
          })
          .then((response) => response.json())
          .then(({ data, errors }) => {
            if (errors) {
              console.error(errors);
            }
    
            // rerender the entire component with new data
           setPage(data.projectsCollection.items);
           
           });
      }, []);

    if (!page) {
        return "Loading...";
      }


    return (
        <div className="mx-auto w-full flex flex-col border-b border-solid border-current md:flex-row">
            <div className="w-full md:w-2/12 border-b md:border-b-0 md:border-r border-solid border-current py-6 md:pt-6">
                <p className="text-some-projects">
                    Some Projects                  
                </p>
            </div>
            <div className="w-full pt-6 md:p-6">
                {page.map((project, i)=> (
                    <a href={project.link} target="_blank" rel="noreferrer" key={i} className="project w-full grid grid-cols-3 border border-solid border-current mb-6 p-3 md:py-6 md:p-8">
                         <h1 className="text-medium mr-auto col-span-3 mb-2 lg:col-span-1">
                            {project.title}
                        </h1>
                        <p className="text-extralight mr-auto col-span-2 lg:col-span-1">
                            {project.technologies}
                        </p>
                        <p className="text-extralight justify-self-end">
                            {project.year}
                        </p>
        </a>
            ))}
            </div>
        </div>
    );
};


export default Projects;