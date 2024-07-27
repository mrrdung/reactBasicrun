import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class UserDetail extends React.Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
            console.log('>>>check id', res);
        }



    }
    handleBackListUser = () => {
        this.props.history.push(`/user`)
    }

    render() {
        let { user } = this.state;
        let isEmpty = Object.keys(user).length === 0 && user.constructor === Object;

        // console.log('checkuser', user.first_name)
        return (
            <>
                <div>helo {this.props.match.params.id}</div>
                {isEmpty === false &&
                    <>
                        <div>
                            username: {user.first_name}{user.last_name}

                        </div><div>
                            useremail: {user.email}

                        </div>
                        <div >
                            <img src={user.avatar}></img>

                        </div>
                        <div>
                            <button type="button" onClick={() => this.handleBackListUser()}>Back</button>
                        </div>
                    </>

                }

            </>

        )
    }
} export default withRouter(UserDetail);