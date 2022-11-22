import { imageFragment } from './fragments/image'
import { buttonFragment } from './fragments/button'

export const getPageContentQuery = /* GraphQL */ `
  query getPageContent( $path: String ) {
    pages(filters: { path: { eq: $path } }) {
      data {
        attributes {
          title
          path
          blocks {
            __typename 
            ... on ComponentBlocksDescriptionBanner {
              title
              description
              button {
                ...Button
              }
              image {
                ...Image
              }
            }
            ... on ComponentBlocksOrganizationDescription {
              text
            }
            ... on ComponentBlocksTechnologiesBanner {
              items {
                name
                work
                image {
                  ...Image
                }
              }
            }
            ... on ComponentBlocksOrganizationBanner {
              title
              text
              lists {
                item
              }              
              image {
                ...Image
              }
            }
            ... on ComponentBlocksServicesBanner {
              services {
                name
                icon {
                  ...Image
                }
              }
              items {
                title
                description
                image {
                  ...Image
                }
              }
            }
            ... on ComponentBlocksAcceleratorBanner {
              title
              text
              button {
                ...Button
              }
              bgImage {
                ...Image
              }
            }
            ... on ComponentBlocksOurOffersBanner {
              items {
                title
                text
                benefits {
                  item
                }
                button {
                  ...Button
                }
                image {
                  ...Image
                }
              }
            }
            ... on ComponentBlocksReviewsSliderBanner {
              title
              items {
                text
                user
                company
                avatar {
                  ...Image 
                }
              }
            }
            ... on ComponentBlocksFeaturedWorkBanner {
              title
              items {
                title
                description
                button {
                  ...Button
                }
                image {
                  ...Image
                }
              }
            }
          }
        }
      }
    }
  }
  ${buttonFragment}
  ${imageFragment}
`