export class UI{
    
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        console.log(user);
        this.profile.innerHTML = `
            <div class="card mt mt-2 animate__animated animate__bounceInLeft">
                <img src="${user.avatar_url}" class="card-img-top">
                <div class="card-body">
                    <h3 class="card-title">${user.name} / ${user.login}</h3>
                    <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View Profile</a>
                    <span class="badge bg-success">
                        Followers: ${user.followers}
                    </span>
                    <span class="badge bg-primary">
                        Following: ${user.following}
                    </span>
                    <span class="badge bg-warning">
                        Company: ${user.company}
                    </span>
                    <span class="badge bg-info" d-block>
                        Blog: ${user.blog}
                    </span>
                </div>
            </div>
        `;
    }

    showMessages(message, cssClass){
        const div = document.createElement('div');
        div.className = cssClass;
        div.appendChild(document.createTextNode(message));
        const content = document.querySelector('.row');
        const profile = document.querySelector('#profile');
        content.insertBefore(div, profile);
    }

    clearMessage(){
        const alertFound = document.querySelector('.alert');
        if(alertFound){
            alertFound.remove();
        }
    }

    showRepositories(repositories){
        console.log(repositories)
        let template = '';
        repositories.forEach(repo => {
          template += `
            <div class="card card-body mt-2 animate__animated animate__bounceInUp">
              <div class="row">
                <div class="col-md-6">
                  <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <span class="badge bg-primary">
                      Language: ${repo.language}
                    </span>
                    <span class="badge bg-success">
                      forks: ${repo.forks_count}
                    </span>
                </div>
              </div>
            </div>
          `;
        });
        document.getElementById('repositories').innerHTML = template;
    }

    reset() {
        this.profile.innerHTML = `
          <div class="container mt5">
            <h3 class="display-2 text-center">Learn Something New Everydary</h3>
          </div>
        `
      }
}

