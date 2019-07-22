import * as React from 'react'
import Page from '../components/Page'
import Container from '../components/Container'
import styled from 'styled-components'
import { RegisterState, UserRegister } from '../store/register/types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ApplicationState, ConnectedReduxProps } from '../store'
import { registerRequest } from '../store/register/actions'
import { Dispatch } from 'redux'
import { createBrowserHistory } from 'history';
import {withRouter} from 'react-router-dom'

type MyProps = { email: string, password: string };

type MyState = { email: string, password: string, confirm_password: string};

interface PropsFromState {
  loading: boolean
  data: UserRegister
  errors?: string
}

interface PropsFromDispatch {
  registerRequest: typeof registerRequest
}
type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

class RegistrationIndexPage extends React.Component<AllProps, MyProps, MyState> {

  constructor(props:AllProps) {
    super(props);
    this.state = {
        email: '',
        password: '',
        img: '123',
        confirm_password:''
    };
}

handleChange = (event:any) => this.setState({
    ...this.state,
    [event.target.name]: event.target.value
});

   validate = (values: MyState) => {
    const errors = {email: '', password: ''}
  
    if (!values.email) {
      return alert('Required')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      return alert('Invalid email address')
    }
    if (!values.password ) {
      return alert('Password Required')
    } else if (values.password !== values.confirm_password) {
      return alert('Passwords do not match')
    } 
    this.setState({
      email:values.email,
      password: values.password
  })
  const addUser: UserRegister = this.state!;
  
  this.props.registerRequest(addUser);
  }
  

  public render() {

    return (
      <Page>
      <Container>
        <PageContent>

            <div className="panel">
                    <h2>Register</h2>
                    <form>
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
                            <input
                                type="text"
                                name="confirm_password"
                                placeholder="Confirm Password"
                                onChange={this.handleChange}
                                value={this.state.confirm_password}
                            />
                        </div>
                        <div>
                            <button onClick = { () => this.validate(this.state)} type="submit" >
                                Register
                        </button>
                        </div>
                    </form>
                </div>
            
        </PageContent>
      </Container>
    </Page>
    )
  }

}

const mapStateToProps = ({ register }: ApplicationState) => ({
  loading: register.loading,
  data: register.data,
  errors: register.errors
  
})


const mapDispatchToProps = {
  registerRequest
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationIndexPage)

const PageContent = styled('article')`
 
  margin: 0 auto;
  line-height: 1.6;

  a {
    color: black;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 0.5rem;
    font-family: fantasy;
    line-height: 1.25;
  }
`
