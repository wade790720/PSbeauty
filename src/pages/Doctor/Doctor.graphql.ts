import { gql } from "@apollo/client"

export const GetTopCategories = gql`
  query GetTopCategories {
    topCategories {
      name
      secondCategories {
        name
        categories {
          id
          name
        }
      }
    }
  }
`

export const UpdateClinicCategory = gql`
  mutation UpdateClinicCategory($categories: [String]) {
    updateClinicCategory(input: { categories: $categories }) {
      id
    }
  }
`

export const GetMyClinic = gql`
  query GetMyClinic {
    myClinic {
      categories {
        id
        name
      }
    }
  }
`
