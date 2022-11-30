import { imageFragment } from './fragments/image'
import { imagesFragment } from './fragments/image'
import { buttonFragment } from './fragments/button'

export const getWorkQuery = /* GraphQL */ `
  query getWork( $name: String) {
    works(filters: { name: {eq: $name}  }) {
      data {
        attributes {
          name
          workBanner {
            items {
              name
              work
              image {
                ...Image
              }
            }
            images {
              ...Images
            }
          }
          aboutWork {
            title
            description
          }
          contactUsBanner {
            title
            description
            button {
              ...Button
            }
          }
        }
      }
    }
  }
  ${buttonFragment}
  ${imageFragment}
  ${imagesFragment}
`