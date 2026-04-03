function Resume() {
  return (
    <div className="page-container" style={{ paddingTop: "0px", paddingBottom: "0px" }}>
      

      {/* Download Button */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "5px" }}>
        <div className="page-header" style={{ marginBottom: "10px", paddingBottom: "10px" }}>
        <h1>My Resume</h1>
        <div className="header-underline"></div>
      
        <a href={process.env.PUBLIC_URL + "/Shubham_Vishwakarma_Resume.pdf"} download>
          <button className="btn btn-primary">Download Resume</button>
        </a>
        </div>
      

      {/* PDF Viewer */}
      <div style={{ width: "90%", height: "85vh", background: "#0D1117", boxShadow: "0 8px 25px #0D1117" }}>
        <iframe
          src={process.env.PUBLIC_URL + "/Shubham_Vishwakarma_Resume.pdf"}
          title="Resume"
          width="80%"
          height="100%"
          style={{ border: "1px solid #000", transform: "scale(0.92)", transformOrigin: "top center", width: "100%" }}
        />
      </div>
    </div>
    </div>
  );
}

export default Resume;