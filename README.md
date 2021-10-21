### Created by Michael Kazierad

Blog content originally found [here](https://www.theverge.com/2021/6/24/22546791/microsoft-windows-11-announcement-features-updates#:~:text=The%20first%20thing%20you'll,both%20centered%20on%20the%20taskbar.&text=Windows%2011%20Snap%20layouts.,modes%20that%20Windows%2011%20supports)

# Frameworks/Technologies

- ReactJS: ReactJS is a popular Javascript framework for frontend development. I chose ReactJS as opposed to Vue or Angular because I prefer the organization of components. Components will allow me to easily modularize the design of this webpage so that it is highly configurable.

- JDBC: I am more familiar with JDBC as opposed to other frameworks such as Hibernate. JDBC is more practical for simpler databases such as storing user comments for this blog post.

- Database with PostreSQL: I am more familiar with using psql, though mysql would also be suitable for this project.

# Outline

### Frontend:

- File Structure:

  - Assets: Resource files that are imported by header, and content section
  - Components: Small visual or functional pieces imported by containers or other larger components
  - Containers: Large grouping of components that serve a larger function
  - Style: files needed to visually arrange and style the blog post.

- Divide up the page into 3 main sections:

  - Header
    - Title, author, header image
  - Content
    - Paragraphs for blog content, embedded images, hyperlinks
  - CommentSection
    - Handles backend, Populates the comment section with Axios calls, renders comments and replies

- Libraries:
  - Axios: used for making get, post, and patch requests to the backend
  - Momentum: used for grabbing and formatting the current time to be sent to the backend

### Backend:

- File Structure:
  - Application: The executable java file responsible for running spring boot
  - BlogController: Maps paths to functions within the BlogService file
  - BlogService: Intermediary between BlogRepository and BlogController. Formats query data to objects and vice versa
  - BlogRepository: Directly interacts with the PSQL database. Executes queries and formats them into HashMaps.

### Database:

- Tables:

  - Users: (userid unique, name)
  - Comments: (userid references users(userid), commentid unique, posted, text, likes, dislikes)
  - Replies: (userid references users(userid), commentid unique, parentid references comments(commentid), posted, text, likes, dislikes)
