import React from "react";

function HomePage(){

return(

<div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')", backgroundSize: "cover", height: "100vh", color: "#f5eff0" }}>
<h1><center><i>Welcome to Job Board</i></center></h1>

<p><center><i>Find your dream job easily</i></center></p>
<button style={{ display: "block", margin: "0 auto", padding: "10px 20px", fontSize: "16px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Get Started</button>

</div>

);
}
export default HomePage;