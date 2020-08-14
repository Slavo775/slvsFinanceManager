#Project description

project use node.js, express, typescript is API for frontEnd slvsFinanceManager


#First run this project
`npm install`
#For run server
`npm run start`
 server is available on http://localhost:3000
#.env must contain
`PORT`
`MONGO_DB_URL`
and its locate in src/.env

# run mongo db dev
## mongo db on docker
### create docker volume
`docker volume create --name=mongodata`
### run image
`docker run --name mongodb -v mongodata:/data/db -d -p 27017:27017 mongo`
### stop image
`docker stop mongodb`
### remove image
`docker rm mongodb`
