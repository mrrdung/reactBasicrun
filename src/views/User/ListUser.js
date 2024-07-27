import React from "react";
import axios from "axios";
import './ListUser.scss'
import { withRouter } from "react-router-dom/";
class ListUser extends React.Component {

    // componentDidMount() {
    //     axios.get('https://reqres.in/api/users?page=2')
    //         .then(res => {
    //             console.log('check res', res);
    //         }){{
    // }
    state = {
        listuser: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            listuser: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }


    render() {
        let { listuser } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">All list users</div>
                <div className="list-user-content">
                    {listuser && listuser.length > 0 && listuser.map((item, index) => {
                        return (
                            <div className="child" key={item.id}
                                onClick={() => this.handleDetailUser(item)}>
                                {index + 1}-{item.first_name}{item.last_name}
                            </div>)
                    })
                    }


                </div>
            </div>
        )
    }
} export default withRouter(ListUser);