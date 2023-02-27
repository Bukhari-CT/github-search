import {API_BASE_URL, SEARCH,} from './urls'

export const createGithubSearchUrl = (url: string) => {
  return `${API_BASE_URL}${SEARCH}${url}`
}
