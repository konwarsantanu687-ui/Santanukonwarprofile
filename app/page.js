export default function Home() {
  return (
    <>
      <main className="container">
        {/* Hero */}
        <section className="hero">
          <h1>
            Hi, I'm <span>Santanu</span>.
          </h1>
          <h2>I design & build modern web experiences.</h2>
          <p>Web Designer · Digital Marketer · Blogger</p>
        </section>

        {/* About */}
        <section className="section">
          <h3>About</h3>
          <p>
            I'm a passionate developer from India focused on building clean,
            minimal and fast websites with modern design.
          </p>
        </section>

        {/* Work */}
        <section className="section">
          <h3>Selected Work</h3>

          <div className="work">
            <div className="card">
              <h4>Blog Platform</h4>
              <p>Modern blog built using HTML & CSS.</p>
            </div>

            <div className="card">
              <h4>Business Landing Page</h4>
              <p>High converting landing page for clients.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section contact">
          <h3>Let's Connect</h3>
          <p>santanu@email.com</p>
        </section>
      </main>

      {/* CSS Inside Same File */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }

        body {
          background: #0b0b0b;
          color: #ffffff;
        }

        .container {
          width: 90%;
          max-width: 1000px;
          margin: auto;
        }

        /* Hero */
        .hero {
          height: 90vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero h1 {
          font-size: 64px;
          font-weight: 700;
        }

        .hero h1 span {
          color: #6c63ff;
        }

        .hero h2 {
          font-size: 28px;
          font-weight: 400;
          margin-top: 15px;
          color: #aaa;
        }

        .hero p {
          margin-top: 20px;
          color: #888;
        }

        /* Sections */
        .section {
          padding: 100px 0;
          border-top: 1px solid #1a1a1a;
        }

        .section h3 {
          font-size: 28px;
          margin-bottom: 30px;
        }

        .section p {
          color: #aaa;
          max-width: 600px;
        }

        /* Work */
        .work {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .card {
          background: #111;
          padding: 30px;
          border-radius: 12px;
          flex: 1;
          min-width: 250px;
          transition: 0.3s ease;
          border: 1px solid #1f1f1f;
        }

        .card:hover {
          transform: translateY(-5px);
          border-color: #6c63ff;
        }

        .contact {
          padding-bottom: 120px;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 40px;
          }

          .hero h2 {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
}
