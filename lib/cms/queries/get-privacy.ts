export const getPrivacyQuery = /* GraphQL */ `
  query getPrivacy {
    privacy {
      data {
        attributes {
          privacy
        }
      }
    }
  }
`