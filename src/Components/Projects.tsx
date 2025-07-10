import '../Projects.Module.css'

function Projects() {
  // const tagColors: Record<string, string> = {
    // Typescript: 'red',
    // Javascript: 'blue',
    // React: 'green',
    // Tailwind: 'purple',
  // }

  // const tagList = ['Typescript', 'Javascript', 'React', 'Tailwind']

  // const renderTags = () =>
  //   tagList.map((tag) => (
  //     <li
  //       key={tag}
  //       style={{ backgroundColor: tagColors[tag] || 'black', color: 'white' }}>
  //       {tag}
  //     </li>
  //   ))

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
          This is a modern, full-stack e-commerce platform offering a complete online shopping experience. It features secure user authentication, a dynamic product catalog, and efficient order management. Built with React and TypeScript for a responsive frontend, and Node.js with Express on the backend, the user interface is cleanly styled using Tailwind CSS for an intuitive design.
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
          Developed a movie tracking application leveraging Node.js and Express for robust backend logic, and EJS for efficient server-side rendering. Users can effectively track and manage their movie watchlists.
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
          Developed a Todo List application using Node.js and Express for robust backend logic, combined with EJS for efficient server-side rendering. Users can effectively manage their tasks in a straightforward interface.
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
          A collaborative full-stack project developed during the General Assembly Software Engineering bootcamp. This application features a React frontend that interacts with our custom Reading Materials API, enabling users to discover, save, and review their favorite books and articles.
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
