export const buttonFragment = /* GraphQL */ `
  fragment Button on ComponentSharedButton {
    id
    label
    linkType
    href
    buttonType
    page {
      __typename
      ... on PageEntityResponse {
        data {
          attributes {
            title
            path
          }
        }
      }
    }
  }
`