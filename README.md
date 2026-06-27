# PopX App

A responsive React-based static web application that simulates a basic authentication flow using Local Storage.

## Features

* User Registration with form validation.
* User Login with credential verification.
* Authentication handled using Local Storage.
* Toast notifications for success and error states.
* Responsive mobile-first UI inspired by the provided design.

## Authentication Flow

* If a user attempts to log in without having a registered account in Local Storage, they are shown an error toast:

  **"Invalid Credentials. Register Yourself."**

  and are redirected to the Registration page.

* During registration, user details are validated and stored in Local Storage.

* On successful login with matching credentials, the user is redirected to the Home page.

* The Home page displays:

  * User Full Name
  * User Email Address

* In the absence of user data, default fallback values are displayed.

## Tech Stack

* React.js
* React Router DOM
* Tailwind CSS
* React Hot Toast
* Local Storage

## Future Improvements

Due to time constraints, the following enhancements could not be implemented:

* Loading states and skeleton loaders
* Protected routes
* Session management
* Password visibility toggle
* Form validation using dedicated libraries (React Hook Form / Zod)
* Backend authentication integration

