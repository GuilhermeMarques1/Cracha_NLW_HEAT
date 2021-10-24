const userMedia = {
  github: "GuilhermeMarques1",
  instagram: "gmmarques1",
  linkedin: "in/guilherme-marques-a308611b8/",
};

function changeUserName() {
  document.getElementById("userName").textContent =
    "Guilherme Marques"; /*Poderia ser usado também: userName.textContent = 'Marcola supremo' porque h1 esta identificado com um id*/
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${userMedia[social]}`;
  }
}

changeSocialMedia();

function getInfosGithubProfile() {
	const url = `https://api.github.com/users/${userMedia.github}`

	fetch(url)
	.then(response => response.json())
	.then(data => {
		document.getElementById("userName").textContent = data.name  //Ou poderia ser: userName.textContent = data.name
		document.getElementById("userBio").textContent = data.bio
		document.getElementById("userGithubLink").href = data.html_url
		document.getElementById("userPhoto").src = data.avatar_url
		githubLogin.textContent = data.login
	})
}

getInfosGithubProfile();


/*Arrow function  
	Para criar uma função fazemos:
	function functionName(arguments) {
		code...
	}

	Arrow function é uma forma contraída da função. Passamos apenas o argumento => {} 
	Elimina-se o nome da função, ou seja, é considerado uma função anonima

	argument => {
		code...
	}

	function nameFunction(arg1, arg2) {
		code...
	}

	Versão arrow function dessa:

	(arg1, arg2) => {
		code...
	}

	function nameFunction() {
		code...
	}

	Versão arrow function dessa:

	() => {
		code...
	}

*/