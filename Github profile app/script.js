const apiUrl = "https://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(userName) {
  const resp = await fetch(apiUrl + userName);
  const respData = await resp.json();
  createUserCard(respData);

  getRepos(userName);
}

async function getRepos(userName) {
  const resp = await fetch(apiUrl + userName + "/repos");
  const respData = await resp.json();
  createReposCard(respData);
}
getUser("florinpop17");

function createUserCard(user) {
  const cardHtml = `
    <div class="card">
      <div>
        <img class="avatar" src="${user.avatar_url}" />
      </div>
      <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>

        <ul class="info">
          <li><strong>${user.followers}</strong>followers</li>
          <li><strong>${user.following}</strong>following</li>
          <li><strong>${user.public_repos}</strong>repos</li>
        </ul>
        
        <div id="repos">
          
        </div>
      </div>
    </div>
  `;
  main.innerHTML = cardHtml;
}

function createReposCard(repos) {
  const reposEl = document.getElementById("repos");
  console.log(repos);
  repos
    .sort((a, b) => {
      b.stargazers_count - a.stargazers_count;
    })
    .slice(0, 10)
    .forEach((repo) => {
      const repoEl = document.createElement("a");
      repoEl.classList.add("repo");
      repoEl.href = repo.html_url;
      repoEl.target = "_blank";
      repoEl.innerText = repo.name;
      reposEl.appendChild(repoEl);
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = search.value;
  if (userName) {
    getUser(userName);
    search.value = "";
  }
});
