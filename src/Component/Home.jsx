import { Link } from "react-router";
import me from '../assets/downlsdfoad).png'
import letsfood from '../assets/letsFood.png'
import tomato from '../assets/tomato.png'
import relive from '../assets/relive.png'
function Home() {
  const project =[
    {
      image:letsfood,
      title:'Lets Food',
      description:'A simple food web page using Javascript',
      link:'https://devjihad.github.io/food-kit/'
    },
    {
      image:relive,
      title:'Relive Hospital',
      description:'A simple Hospital web page using React Js & Tailwind css',
      link:'https://relive-frontend-steel.vercel.app/'
    },
    {
      image:tomato,
      title:'Resturant web page',
      description:'Resturant web page using React Js & Tailwind css',
      link:'https://food-app-iota-umber-55.vercel.app/'
    },
  ]
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-20">
      
      {/* Hero Section */}
      <section className="flex justify-end flex-col md:flex-row items-center  md:min-h-[400px] gap-10 text-black  bg-gray-400 px-10 rounded-2xl " >
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-tight mb-4">Hi, I'm a Frontend Developer</h1>
          <p className="text-lg text-gray-700 mb-6">
            I create modern, responsive, and beautiful user interfaces using React.js, JavaScript, and Tailwind CSS.
          </p>
          <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">View Projects</a>
        </div>
        <div className="flex-1 flex justify-end">
          <div className="w-60 h-60 rounded-full shadow-lg">
            <img className="rounded-full" src={me} alt="" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="space-y-6">
        <h2 className="text-3xl font-bold">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
          {["React.js", "JavaScript", "Tailwind CSS", "HTML & CSS", "Git", "Firebase", "API Integration"].map((skill) => (
            <div key={skill} className="p-4 rounded-xl shadow text-center font-semibold hover:scale-105 transition bg-stone-400">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-6">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {project.map((n) => (
            <div key={n} className="bg-white rounded-xl shadow p-4 hover:-translate-y-2 transition">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-4">
                <Link to={n.link}><img className="w-full h-full rounded-xl" src={n.image} alt="" /></Link>
              </div>
              <h3 className="font-semibold text-xl mb-2">{n.title}</h3>
              <p className="text-gray-600">{n.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Home 
