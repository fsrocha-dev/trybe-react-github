const fetchGithubUserData = (username) => {
  const URL = `https://api.github.com/search/users?q=${username}&per_page=5`

  const userGIT = fetch(URL)
    .then((res) => res.json())
    .then((user) => {
      return user
    })
    .catch((error) => error)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userGIT);
    }, 1000);
  });
};

export default fetchGithubUserData;