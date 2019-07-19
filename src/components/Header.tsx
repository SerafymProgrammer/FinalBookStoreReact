import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Container from './Container'
import { css } from 'emotion'
import { ConnectedReduxProps, ApplicationState } from '../store';
import { bookCountChanged } from '../store/booksCount/actions';
import { connect } from 'react-redux';
import { isLogUser } from '../store/isLoginUser/actions';




interface PropsFromState {
  count: number;
  isUserLoggedIn: boolean;
  img: string
}

interface PropsFromDispatch {
  isLogUser: typeof isLogUser
}

type AllProps = PropsFromState & PropsFromDispatch

  class Header extends React.Component<AllProps>{


    constructor(props: any) {
      super(props);
     
    }

    public render() { 
      let { count, isUserLoggedIn, img } = this.props
      const isLogInUser = JSON.parse(localStorage.getItem('currentUserLog') || '{}');
    
      const CurrUser = localStorage.getItem('user');
      const currentUser = JSON.parse(CurrUser || '{}');

      let changeImg = currentUser.img;

    
    if(img){
     
      changeImg = img;
    }

   let  $imagePreview = (<img src={changeImg} width = '40' height = '40'/>);
     
     
      console.log(isLogUser);

      
      return(
      <Wrapper>
      <HeaderInner>
        <HeaderLeft>
          <Title>Book Store</Title>
        </HeaderLeft>
        <HeaderNav>
          <HeaderNavLink exact to="/" activeClassName={HeaderLinkActive}>
            Home
          </HeaderNavLink>
          <HeaderNavLink to="/books" activeClassName={HeaderLinkActive}>
            Books
          </HeaderNavLink>
          {(!isLogInUser.currentUserLogIn) && 
                <HeaderNavLink to="/register" activeClassName={HeaderLinkActive}>
                  Register
              </HeaderNavLink>   
          }

         {(!isLogInUser.currentUserLogIn) && 
                <HeaderNavLink to="/login" activeClassName={HeaderLinkActive}>
                  Login
               </HeaderNavLink>
         }

              {(isLogInUser.currentUserLogIn) &&
                <HeaderNavLink to="/setting-user" onClick={() => { }} activeClassName={HeaderLinkActive}>
                 Hello User {$imagePreview}
               </HeaderNavLink>
              }

          {(isLogInUser.currentUserLogIn) && 
                <HeaderNavLink to="/login" onClick = {() => { localStorage.removeItem('user');  localStorage.removeItem('currentUserLog');this.props.isLogUser()}} activeClassName={HeaderLinkActive}>
                  Logout
               </HeaderNavLink>
         }
         {(isLogInUser.currentUserLogIn) &&
            <p>Basket: {count}</p>
          } 
         
        </HeaderNav>
     
        
      </HeaderInner>
    </Wrapper>)
}
  
  }
  
  const mapStateToProps = ({ booksCount, isLoginUser, changeCurrentUser }: ApplicationState) => ({
    img: changeCurrentUser.img,
    count: booksCount.count,
    isUserLoggedIn: isLoginUser.isLogUser
  })

  const mapDispatchToProps = {
    isLogUser
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)

const Wrapper = styled('header')`
  padding: 0.5rem 1.5rem;
  background-color: red;
  color: black;
  font-family: Fantasy;
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`

const HeaderLeft = styled('div')`
  padding-right: 1rem;
`

const HeaderNav = styled('nav')`
  flex: 1 1 auto;
  margin: 1rem 0;
`

const HeaderNavLink = styled(NavLink)`
  margin: 0 1rem;
`

const HeaderLinkActive = css`
  text-decoration: underline;
`

const HeaderRight = styled('div')`
  padding-left: 1rem;
`
const imgAvatar = styled('img')`
  width: 50px;
  height: 50px;
`

const Title = styled('h2')`
  margin: 0;
  font-weight: 500;
`

const CurrentTheme = styled('span')`
  margin-right: 1rem;
`

const ThemeSwitcherButton = styled('button')`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border: 1px solid white;
  border-radius: 3px;
  background-color:red
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background-color: transparent;
    color: black;
  }
`
