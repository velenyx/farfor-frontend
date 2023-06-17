import { SERVER_URL } from '~/shared/constants'

export const getServerUrl = (url: string) => {
  return SERVER_URL + url
}
