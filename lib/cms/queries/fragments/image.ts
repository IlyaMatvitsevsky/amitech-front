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