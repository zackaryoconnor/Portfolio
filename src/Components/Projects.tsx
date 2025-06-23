import '../Projects.Module.css'

function Projects() {
  const tagColors: Record<string, string> = {
    // Typescript: 'red',
    // Javascript: 'blue',
    // React: 'green',
    // Tailwind: 'purple',
  }

  const tagList = ['Typescript', 'Javascript', 'React', 'Tailwind']

  const renderTags = () =>
    tagList.map((tag) => (
      <li
        key={tag}
        style={{ backgroundColor: tagColors[tag] || 'black', color: 'white' }}>
        {tag}
      </li>
    ))

  return (
    <div>
      <section className="ecommerce">
        <img
          src="https://i.imgur.com/IIldg4H.jpeg"
          alt="Image of a computer displaying an e-commerce site selling handmade goods."
        />
        <div className="tags">{/* <ul>{renderTags()}</ul> */}</div>
        <h3>E-Commerce Site</h3>
        <p>
          This is a modern, full-stack e-commerce platform designed to deliver a
          complete online shopping experience. Built with React and TypeScript
          on the frontend and Node.js with Express on the backend, it offers
          secure user authentication, a dynamic product catalog, and efficient
          order management. The user interface is cleanly styled with Tailwind
          CSS for a responsive and intuitive design.
        </p>
        <div>
          <a
            className="live-site"
            href="http://54.90.193.130:5173"
            target="_blank">
            Live Site
          </a>
          <a
            className="github"
            href="https://github.com/zackaryoconnor/ecommerce-site"
            target="_blank">
            Github
          </a>
        </div>
      </section>

      <section className="movies">
        <img
          src="https://i.imgur.com/2QXhQUd.png"
          alt="Image of a computer displaying a movie tracking site."
        />
        <div className="tags">{/* <ul>{renderTags()}</ul> */}</div>
        <h3>Movie Tracker</h3>
        <p>
          A simple movies tracking application built with Node.js, Express, and
          EJS for server-side rendering.
        </p>
        <div>
          <a
            className="live-site"
            href="http://54.90.193.130:3001"
            target="_blank">
            Live Site
          </a>
          <a
            className="github"
            href="https://github.com/zackaryoconnor/My-Movies"
            target="_blank">
            Github
          </a>
        </div>
      </section>

      <section className="todos">
        <img
          src="https://i.imgur.com/mz0sWxQ.png"
          alt="Image of a computer displaying a simple todo list."
        />
        <div className="tags">{/* <ul>{renderTags()}</ul> */}</div>
        <h3>Todo List</h3>
        <p>
          A simple Todo List application built with Node.js, Express, and EJS
          for server-side rendering.
        </p>
        <div>
          <a
            className="live-site"
            href="http://54.90.193.130:3000"
            target="_blank">
            Live Site
          </a>
          <a
            className="github"
            href="https://github.com/zackaryoconnor/Todo-List"
            target="_blank">
            Github
          </a>
        </div>
      </section>

      <section className="reading-tracker">
        <img
          src="https://i.imgur.com/5jkQeZC.jpeg"
          alt="Image of a computer displaying a reading tracking site."
        />
        <div className="tags">{/* <ul>{renderTags()}</ul> */}</div>
        <h3>Reading Tracker</h3>
        <p>
          A collaborative full-stack project built during our General Assembly
          Software Engineering bootcamp. This React application serves as the
          frontend interface for our Reading Materials API, allowing users to
          discover, save, and review their favorite reading materials.
        </p>
        <div>
          <a
            className="live-site"
            href="http://44.215.35.137:3004/"
            target="_blank">
            Live Site
          </a>
          <a
            className="github"
            href="https://github.com/zackaryoconnor/Reading-Tracker-Front-End"
            target="_blank">
            Github
          </a>
        </div>
      </section>
    </div>
  )
}
export default Projects
