/*

  --- Anotações de Javascript --- 
variável let permite modificações em seu valor;
variável const é uma variável que não pode ser modificada.

*/


const socialMedia = {
  github: "danieomundo",
  youtube: "channel/UC0QtiLHBqCprOq-6EddrSIg",
  facebook: "danieomundo",
  instagram: "ddans_",
  twitter: "danieomundo"
}

function changesocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
   
    li.children[0].href=`https://${social}.com/${socialMedia[social]}`    
  }    
}

changesocialMedia()


function getGitHubInfos() {
  const url = `https://api.github.com/users/${socialMedia.github}`
  fetch(url).then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })

}

getGitHubInfos()