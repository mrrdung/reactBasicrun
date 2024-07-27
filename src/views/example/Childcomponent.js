import React from "react";
class Childcomponent extends React.Component {
    state = {
        jobShow: false
    }
    handledata = () => {
        this.setState({
            jobShow: !this.state.jobShow
        })
    }
    handleOnClickDelete = (job) => {
        this.props.deleteAjob(job)
    }

    render() {

        let { abc } = this.props;
        let { jobShow } = this.state;


        return (

            <>
                {jobShow === false ?
                    <div><button onClick={() => { this.handledata() }}>Show</button></div>
                    :
                    <>
                        <div className="job">
                            {
                                abc.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title}-{item.salary}$ <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>)

                                })
                            }
                        </div>
                        <div><button onClick={() => { this.handledata() }}>Hide</button></div>
                    </>}
            </>
        );
    }
}

// const Childcomponent = (props) => {
//     let { name, age, abc } = props;
//     return (
//         <>
//             <div className="job">
//                 <h1>Child component {name} - {age}</h1>
//                 {
//                     abc.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title}-{item.salary}
//                             </div>)

//                     })
//                 }
//             </div>


//         </>
//     )
// }
export default Childcomponent;