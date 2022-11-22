import { imageFragment } from './fragments/image'

export const getFooterQuery = /* GraphQL */ `
  query getFooter {
    footer {
      data {
        attributes {
          text
          links {
            text
            href
          }
          icons {
            href
            icon {
              ...Image
            }
          }
        }
      }
    }
  }  
  ${imageFragment}
`