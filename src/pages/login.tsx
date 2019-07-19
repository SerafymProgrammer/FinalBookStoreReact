import * as React from 'react'
import Page from '../components/Page'
import Container from '../components/Container'
import styled from 'styled-components'
import { callApi } from '../utils/api'
import  requests  from '../utils/requests'
import { Route, Switch, Redirect } from 'react-router-dom'
import { isLogUser } from '../store/isLoginUser/actions';
import { ConnectedReduxProps, ApplicationState } from '../store';
import { connect } from 'react-redux';
import jwt from 'jwt-decode';
import User from '../store/register/types'
// type MyProps = {  };

//  type MyState = { email: string, password: string};

interface PropsFromState {
    isLogUser: boolean;
  }
  
  // We can use `typeof` here to map our dispatch types to the props, like so.
  interface PropsFromDispatch {
    isLogUser: typeof isLogUser
    email: string, 
    password: string
  }
  
  // Combine both state + dispatch props - as well as any props we want to pass - in a union type.
  type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

// MyProps MyState

export class LoginComponent extends React.Component<AllProps> {
    
    constructor(props:any) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }



    
    decodeToLocalStorage = (data:any) => {
        const decode: User = jwt(data.token);
        localStorage.setItem('user', JSON.stringify({email: decode.email, id: decode.id, img: data.img}));
    }

   async validateAndSubmit (values: any)  {
       
        if (!values.email) {
          return alert('Required')
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          return alert('Invalid email address')
        }
        if (!values.password ) {
          return alert('Password Required')
        } 
        this.setState({
          email:values.email,
          password: values.passsword
      })
    await  requests.auth(this.state)
      .then(data => data.json())
      .then(res => this.decodeToLocalStorage(res));
      
       this.props.isLogUser()
      
      }

    handleChange = (event:any) => this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    });

    render(){
        return(
            <LoginContent>
                <div className="panel">
                    <h2>Log in</h2>
                    <form >
                        <div>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                        </div>
                        <div>
                            <button onClick = {() => this.validateAndSubmit(this.state)}>
                                Login
                        </button>
                        </div>
                    </form>
                </div>
            </LoginContent>
        )
    }
}
const mapStateToProps = ({ isLoginUser }: ApplicationState) => ({
   isLogUser: isLoginUser.isLogUser
  })
  
  // mapDispatchToProps is especially useful for constraining our actions to the connected component.
  // You can access these via `this.props`.
  const mapDispatchToProps = {
    isLogUser
  }
  
  // Now let's connect our component!
  // With redux v4's improved typings, we can finally omit generics here.
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginComponent)
  

const LoginContent = styled('article')`
    max-width: 1000px;
    margin: 0 auto;
    line-height: 1.6;
    a {
        color: blue;
    }
    h1,
    h2,
    h3,
    h4 {
        margin-bottom: 0.5rem;
        font-family: Arial;
        line-height: 1.25;
    }
`