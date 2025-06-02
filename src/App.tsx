import Projects from './Components/Projects'
import About from './Components/About'
import './App.css'


function App() {
  return (
    <div className="container">
      <main>
        <section className="about">
          <About />
        </section>

        <section className="work">
          <Projects />
        </section>
      </main>
    </div>
  )
}

export default App
