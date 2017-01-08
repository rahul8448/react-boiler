# react-boiler

This is a simple dockerized react boiler plate project.This assumes that you already have node, npm docker and webpack installed in your local environment and have basic undertsanding of them.Below are the steps to get the project up and running on your local env:

   1. Clone the project from github.
   2. Run npm install command from the root of the project in your local env. This should download all the npm packages specified in the package.json file.
   3. Run the command webpack from the root of the project in you local env. This will create bundled content in the bundle.js file from the app folder.
   4. Run the below docker command from the root of the project to built and image from the Dockerfile.
      - docker build -t `<name of ur image`> .   
   5. Check if the images have been successfully downloaded and built by running the docker images command.
   6. Now create a docker container from the image and run the contianer by running the following command.
      - docker run -p `<some free port in your local env`>:8080 `<name of ur docker image`> npm start.
   7. Once the container is running, open the application in the browser by going to the below url:
       - localhost: `<your local port`>
   8. You should see the text "React boiler plate project!".

    Note: The project also contains docker-compose.yml file. This file is currently not used. If you wish and have experience with 
    docker compose you can write this file and build and run the container using docker compose commands.
