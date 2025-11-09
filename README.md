# Terra-Civitas: Community Crime Reporting & Alert System

<div align="center">
  <img src="src/components/logo.tsx" alt="Terra-Civitas Logo" width="120" />
</div>

<p align="center">
  A modern, real-time community crime reporting and alert system designed to keep neighborhoods informed and safe.
</p>

---

## Table of Contents

- [About The Project](#about-the-project)
  - [Key Features](#key-features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)

---

## About The Project

**Terra-Civitas** is a web application that serves as a central hub for community members to report and stay informed about crime and safety-related incidents in their area. It provides a real-time feed of alerts, an interactive map, and analytics to help users understand local safety trends.

### Key Features

- **Real-time Crime Alerts**: View a live feed of reported incidents, including details, categories (theft, assault, etc.), and timestamps.
- **Interactive Dashboard**: A clean and responsive user interface with a collapsible sidebar for easy navigation.
- **User Authentication**: Secure login system to ensure that only registered users can access the dashboard.
- **Alert Map (Planned)**: A future feature to visualize crime data geographically.
- **Analytics (Planned)**: A dedicated section for visualizing crime statistics and trends over time.

---

## Built With

This project is built on a modern, robust, and scalable technology stack:

-   **[Next.js](https://nextjs.org/)**: A React framework for building server-rendered and static web applications.
-   **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
-   **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that enhances code quality and maintainability.
-   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
-   **[ShadCN UI](https://ui.shadcn.com/)**: A collection of beautifully designed, reusable components built on Radix UI and Tailwind CSS.
-   **[Genkit](https://firebase.google.com/docs/genkit)**: An open-source framework from Google for building AI-powered features.
-   **[Firebase](https://firebase.google.com/)**: Used for backend services, including user authentication.
-   **[Lucide React](https://lucide.dev/)**: A library of simply beautiful and consistent icons.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v20 or later)
-   npm (or a similar package manager like yarn or pnpm)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone <your-repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of your project and add your Firebase configuration details. You can get these from your Firebase project console.
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    ```

4.  **Run the development server:**
    ```sh
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

---

## Project Structure

The project follows the standard Next.js App Router structure:

-   `src/app/`: Contains all the routes, pages, and layouts.
-   `src/components/`: Contains all shared and UI components.
    -   `src/components/ui/`: Auto-generated components from ShadCN UI.
-   `src/lib/`: Contains utility functions, dummy data, and third-party library configurations (e.g., Firebase).
-   `src/ai/`: Contains Genkit flows for AI-powered features.
-   `public/`: For static assets like images and fonts.
-   `tailwind.config.ts`: Configuration file for Tailwind CSS.
-   `next.config.ts`: Configuration file for Next.js.

---

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode with Turbopack.
-   `npm run build`: Builds the app for production.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Lints the project files using Next.js's built-in ESLint configuration.
