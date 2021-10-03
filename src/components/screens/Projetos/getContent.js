import { CMSGraphQLProjects, gql } from '../../../infra/cms/CMSGraphQLProjects';

export async function getContent() {
  const query = gql`
    query {
      allPageProjects {
       title
       description
       link
       image
       slug
      } 
    }    
  `;

  const client = CMSGraphQLProjects();

  const response = await client.query({ query });

  return response.data.projects;
}
