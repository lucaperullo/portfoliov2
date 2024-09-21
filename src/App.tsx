import { useEffect } from "react";
import { gsap } from "gsap";
import SwiperComponent from "./components/SwiperComponent";

const App = () => {
  useEffect(() => {
    gsap.from(".animate-fade-in", {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="font-sans text-gray-900">
      {/* Introduction Section */}
      <section className="bg-blue-500 text-white min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold animate-fade-in">Luca Perullo</h1>
        <p className="mt-4 text-xl animate-fade-in">MERN Stack Developer</p>
        <div className="mt-8 animate-fade-in">
          <p>
            Email:{" "}
            <a href="mailto:lucaperullo@outlook.it">lucaperullo@outlook.it</a>
          </p>
          <p>Phone: +39 3445820014</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen bg-gray-100 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          Skills Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            Frontend Development (React, Redux)
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            Backend Development (Node.js, MongoDB)
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            Agile Methodologies (SCRUM)
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            Mentoring & Leadership
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            Problem-solving & Collaboration
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            AI Tool Development
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="min-h-screen bg-white py-12">
        <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          Profile
        </h2>
        <p className="text-lg px-8 text-center max-w-3xl mx-auto animate-fade-in">
          I’m a team player with deep understanding of the software development
          lifecycle...
        </p>
      </section>

      {/* Education Section */}
      <section className="min-h-screen bg-gray-100 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          Education
        </h2>
        <div className="text-center text-lg animate-fade-in">
          <p>
            <strong>Epicode (2019 - 2020)</strong>
          </p>
          <p>
            Practical experience in teamwork, agile methodologies, MERN stack
            technologies.
          </p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="min-h-screen bg-white py-12">
        <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          Work Experience
        </h2>
        <SwiperComponent />
      </section>

      {/* Projects Section */}
      <section className="min-h-screen bg-gray-100 py-12">
        <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h3 className="font-bold text-xl">PlayItaly</h3>
            <p>Developed the frontend for a high-traffic travel site.</p>
            <a
              href="https://www.playitaly.com"
              className="text-blue-500 underline"
            >
              Visit PlayItaly
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <h3 className="font-bold text-xl">Timesheet App</h3>
            <p>Streamlined employee working hours logging process.</p>
          </div>
          {/* Add more projects similarly */}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="min-h-screen bg-white py-12">
        <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8">
          <div className="bg-gray-100 p-4 rounded-lg text-center animate-fade-in">
            React
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center animate-fade-in">
            Redux
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center animate-fade-in">
            Node.js
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center animate-fade-in">
            MongoDB
          </div>
          {/* Add more technologies similarly */}
        </div>
      </section>
    </div>
  );
};

export default App;
