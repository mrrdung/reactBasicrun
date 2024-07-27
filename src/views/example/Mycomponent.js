import React from "react";
import Childcomponent from "./Childcomponent";
import AddComponent from "./addComponent";

class Mycomponent extends React.Component {

    state = {
        arrJobs: [
            { id: "jb1", title: 'dev', salary: '800' },
            { id: "jb2", title: 'test', salary: '600' },
            { id: "jb3", title: 'manager', salary: '900' },
        ]
    }
    addNewJob = (job) => {
        console.log('check job', job);

        this.setState({
            arrJobs: [...this.state.arrJobs, job]

        })
    }
    deleteAjob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }



    render() {
        console.log("stats:", this.props)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob} />
                <Childcomponent

                    abc={this.state.arrJobs}
                    deleteAjob={this.deleteAjob}
                />
            </>

        )
    }
}
export default Mycomponent;