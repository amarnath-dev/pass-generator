<div align="center">
    <h1><strong>🔐Locker</strong></h1>
</div>
<p align="center">    
    <a href="">
        <img alt="GitHub" src="https://img.shields.io/badge/node.js-6DA55F?&logo=node.js&logoColor=white">
    </a>   
    <a href="">
        <img alt="GitHub" src="https://img.shields.io/badge/express.js-%23404d59.svg?&logo=express&logoColor=%2361DAFB">
    </a>    
     <a href="">
        <img alt="GitHub" src="https://img.shields.io/badge/react-%2320232a.svg?&logo=react&logoColor=%2361DAFB">
    </a>   
    <a href="">
        <img alt="GitHub" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&logo=mongodb&logoColor=white">
    </a>
    <a href="">
        <img alt="GitHub" src="https://img.shields.io/badge/typescript-gray?logo=typescript">
    </a>
    <a href="">
        <img alt="GitHub" src="https://img.shields.io/badge/tailwind-blue?logo=tailwindcss">
    </a>
</p>

<h4 align="center">
    <p>
        <a href="https://pass-generator-z55c.onrender.com">See live demo</a>
    <p>
</h4>

Locker is an advanced password generation application built with React.js, Node.js, Express.js, and MongoDB, utilizing TypeScript for development. Locker provides and efficient way for creating strong passwords based on user requirements.

## Key Features:
- **Dynamic UI**: Developed with React.js and TypeScript for a dynamic user experience.
- **Secure Authentication**: Utilizes Google authentication for secure user access.
- **Customized password generation**: Generate passwords based on user requirements.
- **Preset Requirements**: Allows users to create strong passwords from preset password requirements.
- **Add note for identification**: Users can add notes for each password for uniquely identifying.
- **Save generated password**: Offers password saving functionality for each generated password.

## UI demo
  <p align="center">
    <picture>
    <img alt="locker" src="./assets/Screenshot (467).png" width=90%>
    </picture>
</p>
<p align="center">
    <picture>
    <img alt="locker" src="./assets/Screenshot (486).png" width=90%>
    </picture>
</p>

## Run this locally in your system:

1. Clone the repository:
   ```bash
   git clone https://github.com/amarnath-dev/pass-generator.git
2. Navigate to the project directory:
    ```bash
   cd gen-v
3. Install dependencies for both frontend and backend:
    ```bash
    cd client
    npm install
    cd ..
    cd server
    npm install
4. Set up environment variables:
   - Create a .env file in the server directory and add necessary environment variables.
   - Example:
     ```makefile

     ## server-env
    PORT = 8000
    CONNECTION_STRING = <mongo-URI> 
    JWT_SECRETE = <jwt-secrete-key>
    CRYPTO_SECRETE = <crypto-secrete-key>

  1. Start the development server:
     ```bash
     cd client
     npm run dev
     cd ..
     cd server
     npm start
  2. Access application in your browser at [http://localhost:5173/](http://localhost:5173/).

## Technologies Used:
- React.js
- Node.js
- Express
- MongoDB
- TypeScript
- Tailwind CSS