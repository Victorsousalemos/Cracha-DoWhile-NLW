const LinksSocialMedia = {
  github: 'Victorsousalemos',
  youtube: '',
  facebook: '',
  instagram: 'victors.lemos',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

//* JSON - um arquivo em formato de objeto de javascript pra poder transacionar informações
//* API - é um sistema que faz a ponte entre um sistema e terceiros, é um intermediario para uma troca de informações
