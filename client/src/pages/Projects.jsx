function Projects() {
  return (
    <section className="page">
      <h1>Projects</h1>
      <div className="cards">
        <article className="card">
          <h2>Portfolio Website</h2>
          <p>A responsive portfolio website created with React and Vite.</p>
        </article>
        <article className="card">
          <h2>Portfolio Backend API</h2>
          <p>REST API created with Node.js, Express, MongoDB and Mongoose.</p>
        </article>
        <article className="card">
          <h2>Authentication System</h2>
          <p>User sign in and protected routes using JSON Web Token.</p>
        </article>
      </div>
    </section>
  );
}

export default Projects;
