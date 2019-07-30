import {User, UserRegister} from "../store/register/types";


export async function callApi(method: string, url: string, path: string, data?: User| UserRegister) {

  let user = JSON.parse(localStorage.getItem('user') || '{}')

    console.log(user.userToken);
    let httpHeaders;
  
    if(user && user.userToken){
    httpHeaders = { 
      'Content-Type' : 'application/x-www-form-urlencoded', 
      'Accept' : 'application/json',
      'Authorization' : `Bearer ${user.userToken}`
    };
    } else {
      httpHeaders = { 
        'Content-Type' : 'application/x-www-form-urlencoded', 
        'Accept' : 'application/json'
      };
    }
    const res = await fetch(url  +''+ path, {
      method,
      headers: new Headers(httpHeaders),
      body: JSON.stringify(data)
    })
    return await res.json()
  }
  