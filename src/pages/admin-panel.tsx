import * as React from 'react'
import Page from '../components/Page'
import Container from '../components/Container'
import styled from 'styled-components'
import { bookCountChanged } from '../store/booksCount/actions';
import { ConnectedReduxProps, ApplicationState } from '../store';
import { connect } from 'react-redux';
import DataTable from '../components/DataTable';
import { Book } from '../store/booksList/types';

import { booksListRequest } from '../store/booksList/actions';
import { usersListRequest } from '../store/usersList/actions';
import { User } from '../store/register/types';
import Popup from 'reactjs-popup';



interface PropsFromState {
    loading: boolean;
    data: Book[]
    users: User[]
    errors?: string;
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface PropsFromDispatch {
    booksListRequest: typeof booksListRequest;
    usersListRequest: typeof usersListRequest;
}

type AllProps = PropsFromState & PropsFromDispatch & ConnectedReduxProps

class AdminPanelPage extends React.Component<AllProps>{
    public componentDidMount() {
        this.props.usersListRequest()
        this.props.booksListRequest()
    }

    public render() {
        const { users, data } = this.props
        console.log();
        return (
            <Page>
                <Container><h1>Adminka</h1>

                    <AdminPanel>
                        <TableWrapper>
                            <DataTable columns={['Id', 'Email*', 'Password']} widths={['auto', '', '']}>
                                {users.map(user => (
                                    <tr>
                                        <td>
                                            <div>{user.id}</div>
                                        </td>

                                        <td>
                                            <div>{user.password}</div>
                                        </td>

                                        <td>
                                            <div>{user.email}</div>
                                        </td>
                                        <td>
                                            <Popup trigger={<button> Edit</button>} modal position="right center">
                                                <div>dsf</div>
                                            </Popup>
                                        </td>
                                        <td>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </DataTable>
                        </TableWrapper>
                        <TableWrapper>
                            <DataTable columns={['Id', 'Name', 'Price']} widths={['auto', '', '']}>
                                {data.map(data => (
                                    <tr >
                                        <td>
                                            <div>{data.id}</div>
                                        </td>

                                        <td>
                                            <div>{data.name}</div>
                                        </td>

                                        <td>
                                            <div>{data.price}</div>
                                        </td>
                                        <td>
                                            <button>Edit</button>
                                        </td>
                                        <td>
                                            <button>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </DataTable>
                        </TableWrapper>
                    </AdminPanel>

                </Container>
            </Page>
        )
    }

    private renderUserTable() {
        const { users } = this.props

        return (
            <DataTable columns={['Hero', 'Pro Picks/Bans*', 'Pro Wins*']} widths={['auto', '', '']}>
                {users.map(user => (
                    <tr key={user.id}>
                        <TableItemDetail>
                            <div>{user.email}</div>
                            <div>{user.password}</div>
                        </TableItemDetail>
                        <td>
                            <button>Edit</button>
                        </td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </DataTable>
        )
    }
}


const mapStateToProps = ({ booksList, usersList }: ApplicationState) => ({
    loading: booksList.loading || usersList.loading,
    errors: booksList.errors || usersList.errors,
    data: booksList.data,
    users: usersList.users
})

const mapDispatchToProps = {
    booksListRequest,
    usersListRequest
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminPanelPage)



const TableWrapper = styled('div')`
  position: relative;
  margin: 0 auto;
  min-height: 200px;
`
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

const TableItemDetail = styled('td')`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const AdminPanel = styled('article')`
  display: flex;
  justify-content: space-beetween;
`