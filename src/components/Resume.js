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
                <div>Address: {this.props.personalInfo.address}</div>
                <div>Email: {this.props.personalInfo.email}</div>
                <div>Phone No: {this.props.personalInfo.phone}</div>
                <h3>Education</h3>
                <div>Degree: {this.props.educationInfo.degree}</div>
                <div>University: {this.props.educationInfo.university}</div>
                <div>From: {this.props.educationInfo.start}</div>
                <div>To: {this.props.educationInfo.end}</div>
                <h3>Experience</h3>
                <div>Position: {this.props.experienceInfo.position}</div>
                <div>Company: {this.props.experienceInfo.company}</div>
                <div>From: {this.props.experienceInfo.start}</div>
                <div>To: {this.props.experienceInfo.end}</div>
            </div>
        );
    }
}

export default Resume;