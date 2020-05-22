# Main Body & Sidebar
This section contains the main body and sidebar components for the Steamy app.

## Getting Started
```sh
npm install
npm run build
npm run seed
npm run start
navigate to localhost:1992/?_x (x being proxyId of desired record)
```

## Built With

* [axios](https://www.npmjs.com/package/axios) - HTTP client for browser and node.js
* [express](https://expressjs.com/) - web framework used
* [mongoose](https://mongoosejs.com/) - ORM for database

## CRUD API:
| Http Verbs | Endpoint           | Action                                 | Error ?            |
|------------|--------------------|----------------------------------------|--------------------|
| POST       | /mainbody          | Creates a game based on req body data  |something went wrong|
| GET        | /mainbody/:proxyId | Gets a game record for 1 game          |something went wrong|
| GET        | /mainbody          | loads static page with loading message |something went wrong|
| PUT        | /mainbody/:proxyId | Updates game name based on req body    |something went wrong|
| DELETE     | /mainbody/:proxyId | Deletes a game info based on query data|something went wrong|





