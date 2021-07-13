import fetchGithubUserData from '../../services/githubAPI'

export const REQUEST_GITHUB = 'REQUEST_GITHUB'
export const REQUEST_GITHUB_USER_SUCCESS = 'REQUEST_GITHUB_SUCCESS'
export const REQUEST_GITHUB_USER_ERROR = 'REQUEST_GITHUB_ERROR'
export const REQUEST_GITHUB_REPOS_SUCCESS = 'REQUEST_GITHUB_REPOS_SUCCESS'
export const REQUEST_GITHUB_REPOS_ERROR = 'REQUEST_GITHUB_REPOS_ERROR'
export const UPDATE_STATE_INPUT = 'UPDATE_STATE_INPUT'
export const SET_SELECTED_USER = 'SET_SELECTED_USER'

const requestGithub = (payload) => ({
  type: REQUEST_GITHUB,
})

const requestGithubUserSuccess = (payload) => ({
  type: REQUEST_GITHUB_USER_SUCCESS,
  payload: payload.items
})

const requestGithubUserError = (payload) => ({
  type: REQUEST_GITHUB_USER_ERROR,
  payload
})

const requestGithubReposSuccess = (payload) => ({
  type: REQUEST_GITHUB_REPOS_SUCCESS,
  payload: payload
})

const requestGithubReposError = (payload) => ({
  type: REQUEST_GITHUB_REPOS_ERROR,
  payload
})

export const updateStateInput = (userName) => ({
  type: UPDATE_STATE_INPUT,
  userName
})

export const fetchGithubData = () => {
  return async (dispatch, getState) => {
    dispatch(requestGithub())
    const { userName } = getState().githubReducer
    const data = await fetchGithubUserData(userName)
    if (data.items) {
      return dispatch(requestGithubUserSuccess(data))
    }
    return dispatch(requestGithubUserError(data))
  }
}

export const findGithubUserAndFetchRepositories = (id) => {
  return (dispatch, getState) => {
    dispatch(requestGithub())
    const { users } = getState().githubReducer
    const userFound = users.find(user => user.id === id)
    if (userFound) {
      const newURL = new URL("?per_page=3&sort=updated", userFound.repos_url)
      fetch(newURL)
        .then((res) => res.json())
        .then((repos) => dispatch(requestGithubReposSuccess({ ...userFound, repositories: repos })))
        .catch((error) => dispatch(requestGithubReposError(error)))
    }
  }
}