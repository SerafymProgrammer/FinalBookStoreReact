import * as React from 'react'
import Page from '../components/Page'
import Container from '../components/Container'
import styled from 'styled-components'
import { Book } from '../store/booksList/types';
import { booksListRequest } from '../store/booksList/actions';
import { bookCountChanged } from '../store/booksCount/actions';
import { ApplicationState, ConnectedReduxProps } from '../store';
import { connect } from 'react-redux'

  interface PropsFromState {
    loading: boolean
    data: Book[]
    errors?: string
    basketCount: number 
  }
  
  interface PropsFromDispatch {
    booksListRequest: typeof booksListRequest,
    bookCountChanged: typeof bookCountChanged
  }
  
  type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps
  


  class BooksIndexPage extends React.Component<AllProps>  {
    constructor(props: AllProps) {
      super(props);
      this.state = {
        file: '',
        imagePreviewUrl: ''
      };
    }

    public componentDidMount() {
      this.props.booksListRequest()
    }

    public render() {
    const { data } = this.props
    
      return (
        <Page>
          <Container>
          
            <CardList>
              {data.map(book => (
                <Card>
              
                  <h1>{book.name}</h1>
                  {/* <CardImg src={book.img} alt="BookImg"></CardImg> */}
                  <p >Author: { book.author }</p>

                  <p>Description: {book.description}</p>

                   <p>Price: { book.price }</p>

                 <button onClick = {() => { this.props.bookCountChanged()} }>  Add to basket</button> 
                </Card>

              ))}
            </CardList>
          </Container>
        </Page>
      )
    }
  
  }

  const mapStateToProps = ({ booksList }: ApplicationState) => ({
    loading: booksList.loading,
    errors: booksList.errors,
    data: booksList.data
  })

  const mapDispatchToProps = {
    booksListRequest,
    bookCountChanged
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(BooksIndexPage)
  

  const CardList = styled('article')`
  display: flex;
  flex-wrap: wrap;
   
`
const CardImg = styled('img')`
  width='150px';
  height='200px';
`
  const Card = styled('div')`
  font-family: fantasy;
  background-color:#a0c7c3;
  border: 2px solid rgb(155, 132, 132);
  border-radius: 10px;

  opacity: 0.9;
  color: black;

  width: 300px;
  

  margin: 20px;
   
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: space-around
`
    