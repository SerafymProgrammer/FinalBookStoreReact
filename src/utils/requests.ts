import User from "../store/changeCurrentUser/types";

export default class userRequests {

    static auth = (user: User) => {
      return fetch(`http://localhost:3000/auth/login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(user)
      })
    }

   static getAll() {

    let user = JSON.parse(localStorage.getItem('user') || '{}')

    console.log(user.data);
    let httpHeaders;
  
    if(user && user.data){
    httpHeaders = { 
      'Content-Type' : 'application/x-www-form-urlencoded', 
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${user.data}`
    };
    } else {
      httpHeaders = { 
        'Content-Type' : 'application/x-www-form-urlencoded', 
        'Accept' : 'application/json'
      };
    }
        return fetch(`http://localhost:3000/users`, {  
        method: 'GET',
        headers: new Headers(httpHeaders)
    }).then(data => data.json()).then(a => {console.log(a)});
    }
}