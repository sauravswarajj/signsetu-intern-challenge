🚀 Project Title & Tagline
==========================
### SignSetu Intern Challenge 🚀
This is a submission for the Full Stack Development Intern coding assignment. The project, "RLS Guard Dog," demonstrates a secure web application with a full authentication flow and role-based data access control built with a modern tech stack.

### Live Demo

You can test the live application here: **https://signsetu.sauravswaraj.com/**

---
### ✨ Features

* **Secure User Authentication:** Full sign-up, sign-in, and email confirmation flow.
* **Automatic Profile Creation:** A Postgres trigger automatically creates a user profile upon sign-up.
* **Row-Level Security (RLS):** A security policy on the database ensures that users can only read and access their own private data.
* **Modern, Responsive UI:** A clean and mobile-friendly interface built with Tailwind CSS and shadcn/ui.


📖 Description
---------------
The SignSetu Intern Challenge is a cutting-edge web application designed to provide interns with a platform to demonstrate their skills and showcase their projects. This application is built using the latest technologies, including React, Next.js, and Tailwind CSS, to provide a seamless and intuitive user experience. With its robust features and scalable architecture, this application is perfect for interns looking to make a lasting impression.

The application is designed to be highly customizable, with a modular architecture that allows for easy integration of new features and components. The use of Supabase for authentication and authorization ensures that the application is secure and reliable. Whether you're an intern looking to showcase your skills or an organization looking to provide a platform for your interns, the SignSetu Intern Challenge is the perfect solution.

The application is built with a focus on performance, scalability, and maintainability. The use of TypeScript and ESBuild ensures that the code is robust and efficient, while the implementation of automated testing and deployment scripts ensures that the application is always up-to-date and running smoothly. With its innovative features and cutting-edge technology, the SignSetu Intern Challenge is poised to revolutionize the way interns showcase their skills and projects.

✨ Features
-----------
Here are some of the key features of the SignSetu Intern Challenge:

1. **Modular Architecture**: The application is built with a modular architecture, allowing for easy integration of new features and components.
2. **Customizable**: The application is highly customizable, with a range of options for tailoring the layout, design, and functionality to meet your needs.
3. **Supabase Authentication**: The application uses Supabase for authentication and authorization, ensuring that the application is secure and reliable.
4. **React and Next.js**: The application is built using React and Next.js, providing a seamless and intuitive user experience.
5. **Tailwind CSS**: The application uses Tailwind CSS for styling, providing a consistent and professional look and feel.
6. **Automated Testing**: The application includes automated testing scripts, ensuring that the application is always up-to-date and running smoothly.
7. **Deployment Scripts**: The application includes deployment scripts, making it easy to deploy the application to a production environment.
8. **TypeScript and ESBuild**: The application is built using TypeScript and ESBuild, ensuring that the code is robust and efficient.

🧰 Tech Stack Table
-------------------
| Technology | Description |
| --- | --- |
| **Frontend** | React, Next.js, Tailwind CSS |
| **Backend** | Supabase |
| **Tools** | TypeScript, ESBuild, Jest, Cypress |

📁 Project Structure
-------------------
The project is structured into the following folders:

* **components**: This folder contains the React components used in the application.
* **pages**: This folder contains the pages used in the application.
* **public**: This folder contains the public assets used in the application.
* **styles**: This folder contains the CSS styles used in the application.
* **utils**: This folder contains the utility functions used in the application.
* **node_modules**: This folder contains the dependencies used in the application.

Each folder has a specific purpose and contains the relevant files and subfolders. For example, the **components** folder contains the individual React components used in the application, while the **pages** folder contains the pages used in the application.

⚙️ How to Run
----------------
To run the application, follow these steps:

1. **Clone the Repository**: Clone the repository using Git.
2. **Install Dependencies**: Install the dependencies using npm or yarn.
3. **Start the Application**: Start the application using the `npm run dev` or `yarn dev` command.
4. **Build the Application**: Build the application using the `npm run build` or `yarn build` command.
5. **Deploy the Application**: Deploy the application to a production environment using the deployment scripts.

🧪 Testing Instructions
------------------------
To test the application, follow these steps:

1. **Run the Tests**: Run the tests using the `npm run test` or `yarn test` command.
2. **Write New Tests**: Write new tests using Jest and Cypress.
3. **Update the Tests**: Update the tests as necessary to ensure that the application is working correctly.

📸 Screenshots
----------------
Here are some screenshots of the application:

* **Home Page/Login Page**: <img width="1381" height="879" alt="signsetu-intern-challenge vercel app_" src="https://github.com/user-attachments/assets/2e011d11-11a9-4a03-9f4c-91095ed1238d" />

* **Dashboard**: <img width="1381" height="879" alt="signsetu-intern-challenge vercel app_ (1)" src="https://github.com/user-attachments/assets/620fb3d9-9f0a-44c4-bdc7-5815bf741178" />


📦 API Reference
------------------
The application uses the following APIs:

* **Supabase API**: The application uses the Supabase API for authentication and authorization.
* **Next.js API**: The application uses the Next.js API for server-side rendering and API routes.

For more information on the APIs used in the application, please refer to the API documentation.

### 🧪 How to Test the Live Application

Please follow these steps to test the core security feature:

1.  **Visit the Live URL:** Navigate to **https://signsetu.sauravswaraj.com/**.
2.  **Create an Account:** Use the "Sign up" button to create a new account with your email.
3.  **Confirm Your Email:** Check your inbox for a confirmation link and click it to verify your account.
4.  **Sign In:** You will be redirected back. Please sign in with the credentials you just created.
5.  **Navigate to the Dashboard:** After signing in, you will be taken to the dashboard page.

#### Expected Result

The dashboard will display the title "Your Grades" but the list of grades will be **empty**.

**This is the correct and expected behavior.** It successfully demonstrates that the Row-Level Security policy is working. As a new user, you have no grades in the database, and the policy is correctly preventing you from seeing grades that belong to other test users.

---

👤 Author
-------------
The SignSetu Intern Challenge was created by Saurav Swaraj(https://github.com/sauravswarajj/).

📝 License
-------------
The SignSetu Intern Challenge is licensed under the MIT License. For more information, please refer to the LICENSE file in the repository.
