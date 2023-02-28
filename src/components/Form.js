import React,{Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.handlePersonalChange = this.handlePersonalChange.bind(this);
        this.handleEducationChange = this.handleEducationChange.bind(this);
        this.handleExperienceChange = this.handleExperienceChange.bind(this);
    }

    handlePersonalChange(event) {
        this.props.onPersonalChange(event.target);
    }

    handleEducationChange(event) {
        this.props.onEducationChange(event.target);
    }

    handleExperienceChange(event) {
        this.props.onExperienceChange(event.target);
    }

    render() {
        return(
            <div className="inputForm">
                <h3>PERSONAL INFO</h3>
                <input type="text" onChange={this.handlePersonalChange} value={this.props.personalInfo.name} name="name" placeholder="Name"/>
                <input type="text" onChange={this.handlePersonalChange} value={this.props.personalInfo.address} name="address" placeholder="Address"/>
                <input type="email" onChange={this.handlePersonalChange} value={this.props.personalInfo.email} name="email" placeholder="Email"/>
                <input type="text" onChange={this.handlePersonalChange} value={this.props.personalInfo.phone} name="phone" placeholder="Phone No."></input>
                <h3>EDUCATION</h3>
                <input type="text" onChange={this.handleEducationChange} value={this.props.educationInfo.degree} name="degree" placeholder="Degree"/>
                <input type="text" onChange={this.handleEducationChange} value={this.props.educationInfo.university} name="university" placeholder="University"/>
                <input type="text" onChange={this.handleEducationChange} value={this.props.educationInfo.start} name="start" placeholder="Start Date" onFocus={(e)=>(e.target.type="date")} onBlur={(e)=>(e.target.type="text")}/>
                <input type="text" onChange={this.handleEducationChange} value={this.props.educationInfo.end} name="end" placeholder="End Date" onFocus={(e)=>(e.target.type="date")} onBlur={(e)=>(e.target.type="text")}/>
                <h3>EXPERIENCE</h3>
                <input type="text" onChange={this.handleExperienceChange} value={this.props.experienceInfo.position} name="position" placeholder="Position"/>
                <input type="text" onChange={this.handleExperienceChange} value={this.props.experienceInfo.company} name="company" placeholder="Company"/>
                <input type="text" onChange={this.handleExperienceChange} value={this.props.experienceInfo.start} name="start" placeholder="Start Date" onFocus={(e)=>(e.target.type="date")} onBlur={(e)=>(e.target.type="text")}/>
                <input type="text" onChange={this.handleExperienceChange} value={this.props.experienceInfo.end} name="end" placeholder="End Date" onFocus={(e)=>(e.target.type="date")} onBlur={(e)=>(e.target.type="text")}/>
            </div>
        );
    }
}

export default Form;