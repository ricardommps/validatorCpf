## Quick start with Docker


```sh
# Clone the repository
git clone https://github.com/ricardommps/validatorCpf

# Go inside the directory
cd validatorCpf

# Get your containers running
docker-compose build

# Make Docker spin up the containers, just run:
docker-compose up
```
Then open [http://localhost:3001/](http://localhost:3001/) to see your app.<br>

### Quick start of api without docker

```sh
# Go inside the directory
cd validatorCpf/api

# Install dependencies
npm install

# Start development server
npm start

# Start test
npm test
```


### Quick start of client without docker

```sh
# Go inside the directory
cd validatorCpf/client

# Install dependencies
npm install

# Start development server
npm start
```

Then open [http://localhost:9000/](http://localhost:9000/) to see your api server.<br>

Then open [http://localhost:3001/](http://localhost:3001/) to see your app react.<br>
