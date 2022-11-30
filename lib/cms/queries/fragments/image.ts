export const imageFragment = /* GraphQL */`
  fragment Image on UploadFileEntityResponse {
    data {
      attributes {
        alternativeText
        url
        width
        height
      }
    }
  }
`

export const imagesFragment = /* GraphQL */`
  fragment Images on UploadFileRelationResponseCollection {
    data {
      attributes {
        alternativeText
        url
        width
        height
      }
    }
  }
`