# examQuiz

A role-based quiz and exam management application built with Angular 15 and TypeScript. The project allows administrators to create, manage, and update quizzes, while users can browse available quizzes, read instructions, and take exams in a guided flow.

## Overview

`examQuiz` is designed for educational and assessment use cases where an admin manages quiz categories, question sets, and exam content, while end users participate in assessments through a clean dashboard-based experience.

The application includes:

- User authentication and authorization
- Role-based access control for admin and normal users
- Quiz and category management
- Question creation and editing
- Exam instructions and quiz attempting flow
- Material Design interface with Angular components
- Loading indicators and snack bar notifications

## Features

### Admin Features

- Sign up and login
- Admin dashboard with navigation panel
- Manage quiz categories
- Add, view, update, and delete quizzes
- Manage questions for each quiz
- Update quiz details and question details
- View quiz data in structured admin screens
- Role-protected admin routes

### User Features

- Sign up and login
- User dashboard with category-based quiz access
- Browse quizzes by category
- Read quiz instructions before starting
- Start timed/step-based quiz flow
- Attempt exam and review quiz experience
- Protected user routes with guards

### UI and UX

- Angular Material components
- Responsive layout and dashboard structure
- Snackbars and alerts for user feedback
- Loading spinners with `ngx-ui-loader`
- CKEditor support for rich text question content

## Tech Stack

- Angular 15
- TypeScript
- RxJS
- Angular Material
- Bootstrap Grid
- CKEditor 5
- SweetAlert2
- ngx-ui-loader

## Project Structure

```bash
examQuiz/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── footer/
│   │   │   └── nav-bar/
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   │   ├── add-category/
│   │   │   │   ├── add-question/
│   │   │   │   ├── add-quiz/
│   │   │   │   ├── admin-dashboard/
│   │   │   │   ├── sidebar/
│   │   │   │   ├── update-quiz/
│   │   │   │   ├── update-quiz-question/
│   │   │   │   ├── view-category/
│   │   │   │   ├── view-quiz-question/
│   │   │   │   ├── view-quizzes/
│   │   │   │   └── welcome/
│   │   │   ├── home/
│   │   │   ├── login/
│   │   │   ├── profile/
│   │   │   ├── signup/
│   │   │   └── user/
│   │   │       ├── instructions/
│   │   │       ├── load-quiz/
│   │   │       ├── sidebar/
│   │   │       ├── start-quiz/
│   │   │       └── user-dashboard/
│   │   ├── services/
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   └── app.component.spec.ts
│   ├── assets/
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── .editorconfig
├── .gitignore
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
├── README.md
└── .vscode/
```

## Application Flow

The app uses Angular routing to separate front-end experiences for different roles.

### Public Routes

- `/` — Home page
- `/signup` — User registration
- `/login` — Authentication page

### Admin Routes

- `/admin-dashboard` — Main admin area
- `/admin-dashboard/categories` — Manage categories
- `/admin-dashboard/add-category` — Add category
- `/admin-dashboard/view-quizzes` — View all quizzes
- `/admin-dashboard/add-quiz` — Add new quiz
- `/admin-dashboard/quiz/:qid` — Update quiz
- `/admin-dashboard/quiz/question/:qid/:title` — View quiz questions
- `/admin-dashboard/add-question/:qid/:title` — Add question
- `/admin-dashboard/update-question/:quesid/:qtitle` — Update question

### User Routes

- `/user-dashboard` — User homepage/dashboard
- `/user-dashboard/:catId` — Load quizzes by category
- `/user-dashboard/instructions/:qId` — Show quiz instructions
- `/start-quiz/:qId` — Start selected quiz

## Authentication and Authorization

The application uses route guards for access protection:

- `AdminGuard` restricts admin-only routes
- `UserGuard` restricts user-only routes
- `auth.interceptor` handles authenticated HTTP requests

This ensures that only authorized users can access admin and user-specific flows.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (recommended LTS version)
- npm
- Angular CLI

### Installation

```bash
npm install
```

### Run the app locally

```bash
ng serve
```

Then open:

```bash
http://localhost:4200
```

### Build for production

```bash
ng build
```

### Run tests

```bash
ng test
```

## Available Scripts

From `package.json`:

```json
"scripts": {
  "ng": "ng",
  "start": "ng serve",
  "build": "ng build",
  "watch": "ng build --watch --configuration development",
  "test": "ng test"
}
```

## Notes

- This project is built as a front-end Angular application for educational quiz workflows.
- It is intended to demonstrate role-based access, quiz management, and exam-taking functionality.
- The repository currently does not include an explicit license file.

## Contributing

Contributions, improvements, and bug fixes are welcome. You can fork the repository, make changes, and submit a pull request.

## Author

Abhijeet-Chakraborty

## Repository

- GitHub: https://github.com/Abhijeet-Chakraborty/examQuiz
