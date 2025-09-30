# Bug Blaster: Agile Issue Management Platform

## Project Overview

**Bug Blaster** is a modern, streamlined platform designed to help development teams efficiently log, prioritize, and resolve software defects (bugs) and track feature requests. It provides a clean, intuitive interface to manage the full issue lifecycle, from initial report to final deployment.

The goal of this project is to demonstrate best practices in full-stack development, specifically focusing on data modeling, secure authentication, and a responsive user experience.

---

## 🚀 Key Features

* **Agile Board View:** Visualize issues in Kanban-style columns (e.g., To Do, In Progress, Under Review, Done).
* **Detailed Issue Tracking:** Log bugs with comprehensive details, including severity, priority, environment, and reproduction steps.
* **User Assignment & Collaboration:** Assign issues to specific team members and track who is working on what.
* **Status & Priority Tags:** Quickly filter and sort issues based on customizable status labels and priority levels.
* **User Authentication:** Secure login and registration system with role-based access control (e.g., Admin, Developer, Reporter).
* **Search and Filtering:** Robust tools to quickly find issues based on keywords, users, or tags.

---

## 💻 Tech Stack

This project is built using a modern full-stack architecture.

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | `React` / `Next.js` | Built for a fast, component-based user interface. |
| **Styling** | `Tailwind CSS` / `Styled Components` | Utility-first CSS framework or CSS-in-JS solution for rapid styling. |
| **Backend** | `Node.js` with `Express` | The RESTful API server handling all application logic and routing. |
| **Database** | `MongoDB` / `PostgreSQL` | A flexible, persistent data store for issues, users, and projects. |
| **Authentication** | `JWT (JSON Web Tokens)` | Secure, stateless user authentication. |

---

## ⚙️ Installation and Setup

Follow these steps to set up and run the Bug Blaster application locally.

### Prerequisites

Ensure you have the following installed:

* [Node.js](https://nodejs.org/) (LTS recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* A running instance of the required database (e.g., MongoDB server or local PostgreSQL instance).

### Backend Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/rayancmorais/bugBlaster.git](https://github.com/rayancmorais/bugBlaster.git)
    cd bugBlaster
    ```

2.  **Navigate to the server directory** (Assuming a common structure):
    ```bash
    cd server
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a file named `.env` in the `server` directory and add your configuration variables:
    ```env
    PORT=5000
    DATABASE_URL="your_database_connection_string"
    JWT_SECRET="a_long_secret_key"
    ```

4.  **Run the Backend:**
    ```bash
    npm start
    # The server should now be running at http://localhost:5000
    ```

### Frontend Setup

1.  **Navigate to the client directory** (Assuming a common structure):
    ```bash
    cd ../client
    npm install
    ```

2.  **Configure Environment Variables:**
    Create a file named `.env` (or `.env.local`) in the `client` directory:
    ```env
    REACT_APP_API_URL=http://localhost:5000/api
    ```

3.  **Run the Frontend:**
    ```bash
    npm start
    # The application should open in your browser at http://localhost:3000
    ```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/rayancmorais/bugBlaster/issues) to log a bug or suggest a new feature.

### Forking the Repository

1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'feat: Add AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

