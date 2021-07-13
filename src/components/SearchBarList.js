import { connect } from 'react-redux';
import styled from "styled-components";
import { findGithubUserAndFetchRepositories } from '../redux/actions/githubAction'

const SearchList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
const GithubCard = styled.button`
  background-color: #ffffff;
  font-size: 0.7em;
  margin: 1em;
  padding: 1em 1em;
  border: 2px solid #3ab2d3;
  border-radius: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 150px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    border: 6px solid #3ab2d3;
  }
`;

const GithubImageCard = styled.img`
  background-color: #ffffff;
  margin-bottom: 0.5em;
  border: 2px solid palevioletred;
  border-radius: 50%;
  border-color: #3ab2d3;
`;

const SearchBarList = ({ history, list, selectThisUser }) => {
  const handleSelectUser = (id) => {
    selectThisUser(id)
    history.push(`/details`);
  }
  return (
    <SearchList>
      {
        list.length > 0 && list.map((item) => (
          <GithubCard key={item.id} type="button" onClick={() => handleSelectUser(item.id)}>
            <>
              <GithubImageCard src={item.avatar_url} alt={item.login} width="85" />
              <span>
                {item.login}
              </span>
            </>
          </GithubCard>
        ))
      }
    </ SearchList>
  )
}

const mapStateToProps = (state) => ({
  list: state.githubReducer.users,
  selectedUser: state.githubReducer.selectedUser
})

const mapDispatchToProps = (dispatch) => ({
  selectThisUser: (id) => dispatch(findGithubUserAndFetchRepositories(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarList)