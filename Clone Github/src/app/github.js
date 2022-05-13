export class Github{

    constructor(client_id, client_secret){
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.repos_count= 10;
        this.repos_sort ='created: asc' 
    }
    
    async fetchUser(user){
       const userDataRequest = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`)
      
       const repositoriesRequest = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const userData = await userDataRequest.json();
        const repositories = await repositoriesRequest.json();

        return {
            userData,
            repositories
        }
  }

}


//module.export = Github;