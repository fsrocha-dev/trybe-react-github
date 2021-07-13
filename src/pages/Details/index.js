import { connect } from "react-redux"
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageProfile = styled.img`
  background-color: #ffffff;
  margin-bottom: 0.5em;
  border: 3px solid palevioletred;
  border-radius: 50%;
  width: 300px;
  margin-top: 20%;
  border-color: #3ab2d3;
`;

const Ul = styled.ul`
  width: 100%;
  margin: 10px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Li = styled.li`
  width: 140px;
  min-height: 60px;
  border: 1px solid #cccccc;
  padding: 20px;
  border-radius: 7px;
`;

const LinkRepo = styled.a`
  text-decoration: none;
  color: #539bf5;
  font-size: 20px
`;

const P = styled.p`
  color: #768390;
  font-size: 16px;
`;

const Details = ({ user }) => {
  const { repositories } = user
  return (
    <Main>
      <ImageProfile
        src={user.avatar_url}
        alt={user.login}
      />
      <h1 className="user-name">{user.login}</h1>
      <Ul>
        {repositories && repositories.map((repo, index) => (
          <Li key={index}>
            <>
              <LinkRepo href={repo.html_url}>{repo.name}</LinkRepo>
              {repo.description
                ? <P>{repo.description}</P>
                : <P>Repositório sem descrição</P>
              }
            </>
          </Li>
        ))}
      </Ul>
    </Main>
  )
}

const mapStateToProps = (state) => ({
  user: state.githubReducer.selectedUser
})

export default connect(mapStateToProps)(Details)