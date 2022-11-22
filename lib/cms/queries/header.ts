import { imageFragment } from './fragments/image'
import { buttonFragment } from './fragments/button'

export const getHeaderQuery = /* GraphQL */ `
  query getHeader {
    header {
      data {
        attributes {
          links {
            ...Button
          }
          buttons {
            ...Button
          }
          logo {
            ...Image
          }
          logoUrl
        }
      }
    }    
  }
  ${buttonFragment}
  ${imageFragment}
`