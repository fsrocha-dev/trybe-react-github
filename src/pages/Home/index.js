import SearchBar from '../../components/SearchBar';
import SearchBarList from '../../components/SearchBarList.js';
import Title from '../../components/Title';

const Home = ({ history }) => {
  return (
    <>
      <Title />
      <SearchBar />
      <SearchBarList history={history} />
    </>
  )
}

export default Home