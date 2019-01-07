# filmadvisor-api

### How to run this GraphQL API

1. Install Docker from https://store.docker.com/editions/community/docker-ce-desktop-windows

- Run Docker

2. Clone this repository using a UNIX Terminal with Git installed by issuing `git clone https://github.com/rosenbergm/filmadvisor-api`

- Go to the cloned repository by issuing `cd filmadvisor-api`

3. Install NodeJS from https://nodejs.org/dist/v10.15.0/node-v10.15.0-x64.msi
4. Initialize all the modules by issuing `npm i` in the project folder
5. Compose the Docker container and start the Database by running `docker-compose up -d`
6. Run `./node_modules/.bin/sequelize db:create` to create the Database
7. Update the Database and insert all Seeders by running `npm run update-db`
8. Start the API by issuing `npm run dev`
