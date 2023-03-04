import React from "react";

const Form = (props) => {

    const handlePersonalChange = (event) => {
        props.onPersonalChange(event.target);
    };

    const handleEducationChange = (event) => {
        props.onEducationChange(event.target);
    };

    const handleExperienceChange = (event) => {
        props.onExperienceChange(event.target);
    };

    return(
        <div className="inputForm">
            <h3>PERSONAL INFO</h3>
            <input type="text" onChange={handlePersonalChange} value={props.personalInfo.name} name="name" placeholder="Name"/>
            <input type="text" onChange={handlePersonalChange} value={props.personalInfo.address} name="address" placeholder="Address"/>
            <input type="email" onChange={handlePersonalChange} value={props.personalInfo.email} name="email" placeholder="Email"/>
            <input type="text" onChange={handlePersonalChange} value={props.personalInfo.phone} name="phone" placeholder="Phone No."></input>
            <h3>EDUCATION</h3>
            <input type="text" onChange={handleEducationChange} value={props.educationInfo.degree} name="degree" placeholder="Degree"/>
            <input type="text" onChange={handleEducationChange} value={props.educationInfo.university} name="university" placeholder="University"/>
            <input type="text" onChange={handleEducationChange} value={props.educationInfo.start} name="start" placeholder="Start Date" onFocus={(e)=>(e.target.type="date")} onBlur={(e)=>(e.target.type="text")}/>
            <input type="text" onChange={handleEducationChange} value={props.educationInfo.end} name="end" placeholder="End Date" onFocus={(e)=>(e.target.type="date")} onBlur={(e)=>(e.target.type="text")}/>
            <h3>EXPERIENCE</h3>
            <input type="text" onChange={handleExperienceChange} value={props.experienceInfo.position} name="position" placeholder="Position"/>
            <input type="text" onChange={handleExperienceChange} value={props.experienceInfo.company} name="company" placeholder="Company"/>
            <input type="text" onChange={handleExperienceChange} value={props.experienceInfo.start} name="start" placeholder="Start Date" onFocus={(e)=>(e.target.type="date")} onBlur={(e)=>(e.target.type="text")}/>
            <input type="text" onChange={handleExperienceChange} value={props.experienceInfo.end} name="end" placeholder="End Date" onFocus={(e)=>(e.target.type="date")} onBlur={(e)=>(e.target.type="text")}/>
        </div>
    );
};

export default Form;