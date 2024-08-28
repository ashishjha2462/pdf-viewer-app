# PDF Viewer App

This project is a PDF Viewer application built with React. It allows users to upload a PDF file and view it with smooth scrolling and page navigation.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

To run this project, you'll need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Features

- Upload and view PDF files.
- Smooth scrolling and page navigation.
- Error handling for invalid file types.

## Components

### `PDFViewer`

This component is responsible for rendering the uploaded PDF. It utilizes the `@react-pdf-viewer/core` and `@react-pdf-viewer/default-layout` plugins for displaying the PDF with a default layout.

- **Props**: 
  - `file`: The PDF file to be displayed.
  
- **State**:
  - `pdf`: Stores the binary data of the PDF file.
  - `currentPage`: Tracks the currently viewed page.
  - `totalNumberOfPages`: Stores the total number of pages in the PDF.

### `PDFUploader`

This component handles the file upload process and checks if the uploaded file is a valid PDF.

- **Props**:
  - `onFileSelect`: A callback function triggered when a valid file is selected.
  
- **State**:
  - `error`: Stores any error messages related to file upload.

## Usage

1. Clone the repository:

   `git clone https://github.com/ashishjha2462/pdf-viewer-app.git`
   `cd pdf-viewer-app`

2. Install the dependencies:

  `npm install`

3. Start the development server:

  `npm start`

4. Open http://localhost:3000 in your browser to view the app.

Deployment
For deployment, you can follow the instructions in the Create React App deployment documentation.

Troubleshooting
If you encounter issues during build or deployment, check out the troubleshooting guide.

License
This project is open source and available under the MIT License.
