import React from "react";

const Resume = (props) => {

    return(
        <div className="resume">
                <div className="left">
                    <h3>CONTACT</h3>
                    <div>{props.personalInfo.address}</div>
                    <div>Phone {props.personalInfo.phone}</div>
                    <div>{props.personalInfo.email}</div>
                </div>
                <div className="right">
                    <div className="header">
                        <h2>{props.personalInfo.name}</h2>
                    </div>
                    <hr></hr>
                    <div className="experience">
                        <h3>Experience</h3>
                        <h4>{props.experienceInfo.position}</h4>
                        <div>{props.experienceInfo.company}</div>
                        <div>{props.experienceInfo.start} to {props.experienceInfo.end}</div>
                    </div>
                    <hr></hr>
                    <div className="education">
                        <h3>Education</h3>
                        <h4>{props.educationInfo.degree}</h4>
                        <div>{props.educationInfo.university}</div>
                        <div>{props.educationInfo.start} to {props.educationInfo.end}</div>
                    </div>
                </div>
        </div>
    );
};

export default Resume;