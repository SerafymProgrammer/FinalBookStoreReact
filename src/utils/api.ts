import {User, UserRegister} from "../store/register/types";


export async function callApi(method: string, url: string, path: string, data?: User| UserRegister) {
    const res = await fetch(url  +''+ path, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return await res.json()
  }
  