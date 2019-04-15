## Quick start with Docker

```bash
# Clone the repository
git clone https://github.com/ricardommps/validatorCpf

# Go inside the directory
cd validatorCpf

# Get your containers running
docker-compose build

# Make Docker spin up the containers, just run:
docker-compose up

Runs the app.<br>
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

## Quick start of api without docker

# Go inside the directory
cd validatorCpf/api

# Install dependencies
npm install

# Start development server
npm start

# Start test
npm test

## Quick start of client without docker


# Go inside the directory
cd validatorCpf/client

# Install dependencies
npm install

# Start development server
npm start

Runs the api server.<br>
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

Runs the client react.<br>
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.
