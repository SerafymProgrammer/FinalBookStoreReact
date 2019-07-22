import * as React from 'react'
import Page from '../components/Page'
import Container from '../components/Container'
import styled from 'styled-components'
import { bookCountChanged } from '../store/booksCount/actions';
import { ConnectedReduxProps, ApplicationState } from '../store';
import { connect } from 'react-redux';
import { changeUserRequest } from '../store/changeCurrentUser/actions';
import User from '../store/register/types';

interface PropsFromState {
  changeUserImg: string;
}
interface PropsFromDispatch {
  changeUserRequest: typeof changeUserRequest
  email: string, 
  password: string
}

type AllProps = PropsFromState & ConnectedReduxProps & PropsFromDispatch 


class SettingCurrentUser extends React.Component<AllProps>{
  constructor(props: AllProps) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
  }

  _handleImageChange(e: any) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }


  saveUser (img: any) {
    const CurrUser = localStorage.getItem('user');
    let currentUser = JSON.parse(CurrUser || '{}');
    currentUser.img = img;
    localStorage.setItem('user', JSON.stringify(currentUser))
    this.props.changeUserRequest(currentUser)
  }
  
public  render() {

  const CurrUser = localStorage.getItem('user');
 const currentUser = JSON.parse(CurrUser || '{}');


    let {imagePreviewUrl} = this.state;
    let changeImg = currentUser.img;
    
    let $imagePreview = (<img src={currentUser.img} />);
    if(imagePreviewUrl){
      $imagePreview = (<img src={imagePreviewUrl} />);
      changeImg = imagePreviewUrl;
    }

  return (
    <Page>
      <Container>
        <PageContent>

        <input type="file" onChange={this._handleImageChange} />
            {$imagePreview}

            <p>Email:{currentUser.email}</p>

            <button onClick = {() => this.saveUser(changeImg)}>Change Avatar</button>
            
        </PageContent>
      </Container>
    </Page>
  )
}
} 

const mapStateToProps = ({ changeCurrentUser }: ApplicationState) => ({
  changeUser: changeCurrentUser.img
})


const mapDispatchToProps = {
  changeUserRequest
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingCurrentUser)

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