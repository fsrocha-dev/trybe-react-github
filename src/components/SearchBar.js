import { Component } from 'react'
import { connect } from 'react-redux'
import { updateStateInput, fetchGithubData } from '../redux/actions/githubAction.js'
import Loading from './general/Loading'

class SearchBar extends Component {
  render() {
    const placeholder = "Informe o nome do usuário"
    const { userName, isLoading, inputUserState, getGithubUserData } = this.props
    return (
      <>
        <fieldset className="search-bar">
          <input
            type="text"
            value={userName}
            placeholder={placeholder}
            onChange={(e) => inputUserState(e.target.value)}
          />
          <button onClick={() => getGithubUserData()}>Buscar</button>
        </fieldset>
        {isLoading && <Loading />}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  userName: state.githubReducer.userName,
  isLoading: state.githubReducer.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  inputUserState: (userName) => dispatch(updateStateInput(userName)),
  getGithubUserData: () => dispatch(fetchGithubData())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)