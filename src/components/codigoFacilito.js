import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Posts from "./posts";
import Certificate from "./certificate";
import Course from "./course";

export default() => {
  const data = useStaticQuery(graphql`
    query MyQuery {
    codigoFacilitoJson {
      data {
        username
        courses {
          title
          progress
          url
        }
        certificates {
          code
          score
          title
        }
      }
    }
  }
  `);

  console.log(data);

  return (
    <section>
      <div className="mt-24">
        <div className="max-w-4xl mx-auto">
          <Posts 
          data={data.codigoFacilitoJson.data.certificates} 
          title="Mis certificados en CodigoFacilito"
          card={Certificate}/>
          <Posts 
          data={data.codigoFacilitoJson.data.courses} 
          title="Mis Cursos en CodigoFacilito"
          card={Course}/>   
          </div>
          </div>

    </section>
  );
}