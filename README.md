# Terazo Technical Assessment

![NPM Build Status](https://github.com/pascalallen/SchoologyAssessment/workflows/NPM/badge.svg)

Technical assessment for Terazo

## Prerequisites

- [Docker](https://www.docker.com/)
- [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Development Environment Setup

### Clone Repository

$ `cd <projects-parent-directory> && git clone https://github.com/pascalallen/TerazoAssessment.git`

### Create Environment file and Modify

$ `cp .env.example .env`

### Install NPM Dependencies

$ `npm install`

### Compile and Start Dev Server

$ `npm run start:dev`

### Run Tests

$ `npm run test`

### Start Swagger Docs Docker Container

```
docker run -p 80:8080 -e BASE_URL=/swagger \
    -e SWAGGER_JSON=/tmp/swagger-for-interviews.yaml \
    -v `pwd`/yaml:/tmp swaggerapi/swagger-ui
```

### Terazo Technical Assessment Setup Instructions

1. Clone repo, install dependencies and start dev server
2. Visit http://localhost:3000/ in your browser
3. (Optional) Swagger Docs can be viewed at http://localhost:3000/swagger, after Docker container has been started
