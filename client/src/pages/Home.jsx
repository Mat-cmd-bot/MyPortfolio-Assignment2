function Home() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="intro">Hello,</p>
        <h1>I am <span>Matheyos Wolde</span></h1>
        <h2>Web Application Developer</h2>
        <p>
          I build clean and responsive web applications using React, Node.js,
          Express and MongoDB. This portfolio demonstrates my frontend and backend skills.
        </p>
        <a className="button" href="/contact">Contact Me</a>
      </div>
      <div className="hero-card">
        <h3>COMP229 Portfolio</h3>
        <p>React frontend</p>
        <p>Express REST APIs</p>
        <p>MongoDB database</p>
      </div>
    </section>
  );
}

export default Home;
