import React,{useEffect,useState} from "react";
import axios from "axios";

function JobListingsPage(){

const [jobs,setJobs] = useState([]);

useEffect(()=>{

axios.get("http://localhost:5000/api/jobs")
.then(res=>{

setJobs(res.data);

});

},[]);

return(

<div>
    <div style={{ backgroundColor: "#efbfc7", height: "100vh" }}>

<h2><center><u><i>Available Jobs</i></u></center></h2>

{jobs.map(job=>(

<div key={job.id}>

<h3><u>Title:{job.title}</u></h3>

<p><b>Company Name : </b> {job.company}</p>

<p><b>Job Description : </b> {job.description}</p>

<p><b>Job Location : </b> {job.location}</p>

<p><b>Salary : </b> {job.salary}</p>



<button style={{ backgroundColor: "#5669eb", color: "white", border: "none", padding: "10px 20px", cursor: "pointer" }}>Apply Now</button>


</div>

))}

</div>
</div>
);

}

export default JobListingsPage;