import {
  REQUEST_GITHUB,
  REQUEST_GITHUB_USER_SUCCESS,
  REQUEST_GITHUB_USER_ERROR,
  REQUEST_GITHUB_REPOS_SUCCESS,
  REQUEST_GITHUB_REPOS_ERROR,
  UPDATE_STATE_INPUT,
  SET_SELECTED_USER
} from '../actions/githubAction'

const INITIAL_STATE = {
  users: [],
  userName: '',
  selectedUser: {},
  isLoading: false,
  error: ''
}

function githubReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_GITHUB:
      return {
        ...state,
        isLoading: true
      }
    case REQUEST_GITHUB_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      }
    case REQUEST_GITHUB_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    case REQUEST_GITHUB_REPOS_SUCCESS:
      return {
        ...state,
        selectedUser: action.payload,
        userName: '',
        users: [],
        isLoading: false,
      }
    case REQUEST_GITHUB_REPOS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    case UPDATE_STATE_INPUT:
      return {
        ...state,
        userName: action.userName
      }
    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload
      }
    default:
      return state
  }
}

export default githubReducer