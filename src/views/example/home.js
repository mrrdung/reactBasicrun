import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import logo from '../../assets/images/logo.png'
import { type } from "@testing-library/user-event/dist/type";


class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todos')
    //     }, 3000)
    // }
    handleDelleteRedux = (users) => {
        console.log('delete', users);
        this.props.deteteUserRedux(users);



    }
    handleCreateUserRedux = () => {
        this.props.AddUserRedux()
    }

    render() {
        console.log(this.props.dataredux)
        let listUser = this.props.dataredux;

        return (

            <><div>
                <img src={logo} style={{ with: '100px', height: '100px' }} />
            </div>
                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} -{item.name}
                                    <span onClick={() => this.handleDelleteRedux(item)}>X</span>
                                </div>
                            )
                        })

                    }
                    <div>
                        <button onClick={() => this.handleCreateUserRedux()}>add User</button>
                    </div>
                </div >
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { dataredux: state.users }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deteteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        AddUserRedux: () => dispatch({ type: 'ADD_USER' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));