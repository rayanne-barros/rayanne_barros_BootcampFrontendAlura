import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';

export const gql = GraphQLTag;

export function CMSGraphQLProjects() {
  const DatoCMSURL = 'https://graphql.datocms.com/';

  const TOKEN = process.env.DATO_CMS_TOKEN;
  const project = new GraphQLClient(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return {
    async query({ query, variables }) {
      const projects = await project.request(query, variables);

      return {
        data: {
          projects,
        },
      };
    },
  };
}
