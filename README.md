---
title: Ahmed Osama Blog README
---

This README provides details on how to set up and run the project, as well as insights into the design decisions, libraries, and tools used during development.

## Project Structure

The project follows the **Atomic Design pattern**, a methodology for creating design systems and design patterns that promotes the reusability of UI components. This pattern is organized into five distinct levels of components: Atoms, Molecules, Organisms, Templates, and Pages. This structure promotes a modular and scalable approach to building user interfaces.

## Libraries and Tools Used

- **Next.js**: Next.js is a React framework used for building server-rendered React applications.

- **TypeScript**: TypeScript is used to provide static typing for JavaScript. This enhances code quality and developer productivity by catching type-related errors early in development.

- **Axios**: Employed for handling HTTP requests. Axios is a popular JavaScript library for making asynchronous HTTP requests to REST APIs.

- **React Query**: Used for managing server state. React Query is a library for fetching, caching, synchronizing, and updating server state in React applications.

- **Formik and Yup**: Utilized for form management and validation. Formik simplifies form handling in React applications, while Yup is used for schema-based validation.

- **Husky**: Integrated for pre-commit hooks. Husky helps ensure code quality by running scripts before commits are made.

- **Chakra UI**: Employed for building UI components and theming. Chakra UI is a set of accessible and composable UI components for React.

- **Tailwind CSS**: Used for writing styles. Tailwind CSS is a utility-first CSS framework that allows for rapid UI development.



## Setting Up and Running the Project

Follow these steps to set up and run the project locally:

1. **Clone the project repository:**
   ```bash
   git clone https://github.com/Ahmed-Osama-Salem/Blog-Nextjs.git

2. **Navigate to the project directory:**
   ```bash
   cd BlogOwn

3. **Install project dependencies:**
   ```bash
   npm install

4. **Start the development server:**
   ```bash
   npm run dev

5. **build a production version of the application, run**
   ```bash
   npm run build

6. **start the production server, use**
   ```bash
   npm run start
 


**Deployed Version**
A deployed version of the project can be accessed online at https://blog-nextjs-sigma-seven.vercel.app/.