import React,{Component} from "react";

class Resume extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div className="resume">
                <div className="left">
                    <h3>CONTACT</h3>
                    <div>{this.props.personalInfo.address}</div>
                    <div>Phone {this.props.personalInfo.phone}</div>
                    <div>{this.props.personalInfo.email}</div>
                </div>
                <div className="right">
                    <div className="header">
                        <h2>{this.props.personalInfo.name}</h2>
                    </div>
                    <hr></hr>
                    <div className="experience">
                        <h3>Experience</h3>
                        <h4>{this.props.experienceInfo.position}</h4>
                        <div>{this.props.experienceInfo.company}</div>
                        <div>{this.props.experienceInfo.start} to {this.props.experienceInfo.end}</div>
                    </div>
                    <hr></hr>
                    <div className="education">
                        <h3>Education</h3>
                        <h4>{this.props.educationInfo.degree}</h4>
                        <div>{this.props.educationInfo.university}</div>
                        <div>{this.props.educationInfo.start} to {this.props.educationInfo.end}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;