import React,{Component} from "react";

class Resume extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div>
                <h3>Personal Info</h3>
                <div>Name: {this.props.personalInfo.name}</div>
                <div>Phone No: {this.props.personalInfo.phone}</div>
            </div>
        );
    }
}

export default Resume;