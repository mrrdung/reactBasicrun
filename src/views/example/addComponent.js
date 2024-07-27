import React from "react";
class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }
    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }


    handleSubmid = (event) => {
        event.preventDefault()

        if (!this.state.title || !this.state.salary) {
            alert('vui kong dien day du tt')
            return;
        }
        console.log('log', this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })

    }
    render() {

        return (

            <form>
                <label htmlFor="fname">Title name:</label><br />
                <input type="text"
                    defaultValue={this.state.title}
                    onChange={(event) => this.handleChangeTitle(event)} />
                <br />
                <label htmlFor="lname">Salary name:</label><br />
                <input type="text" defaultValue={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)} /><br />
                <input type="submit"
                    onClick={(event) => this.handleSubmid(event)} />
            </form>


        )
    }
}
export default AddComponent;