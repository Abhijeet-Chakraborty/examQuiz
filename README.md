# examQuiz

examQuiz is a quiz management and exam-taking application built with Angular. It provides a role-based system for both administrators and users, enabling quiz creation, management, and participation in a structured web application.

## Features

- User signup and login
- Role-based access for admin and user accounts
- Admin dashboard for managing:
  - categories
  - quizzes
  - quiz questions
  - quiz updates
- User dashboard for:
  - browsing quizzes by category
  - reading quiz instructions
  - starting a quiz
  - attempting the exam
- Material Design UI components
- Angular routing and route guards
- Notification system using snackbars and alerts
- Loading indicators for better UX
- CKEditor support for rich text-based question content

## Tech Stack

- Angular 15
- TypeScript
- Angular Material
- RxJS
- Bootstrap Grid
- CKEditor
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
│   │   │   ├── home/
│   │   │   ├── login/
│   │   │   ├── profile/
│   │   │   ├── signup/
│   │   │   └── user/
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
└── LICENSE (if added later)
