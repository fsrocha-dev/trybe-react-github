import gitLogo from '../assets/images/github-logo.png'

const Title = () => {
  const alternativeText = "Logo do github"
  return (
    <>
      <img src={gitLogo} alt={alternativeText} width="150" />
      <h1>Github Profiles</h1>
      <h3>🚀 Encontre qualquer usuário aqui 🚀</h3>
    </>
  )
}

export default Title