export const endpoint = "https://cloud-run-api-psbeauty-deuedjpwuq-de.a.run.app/api/graphql"
export const headers = (idToken: string) => {
  if (idToken)
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    }
}
