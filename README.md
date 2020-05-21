# sidebar-body-related

- To seed database: npm run seed from root directory

- to start app: npm run start from root dir

- navigate to localhost:1992/?_x (x being proxyId of desired record)

CRUD API info:

POST:
- '/mainbody' : adds a new game to the database based on data in the request body; need to include at least a name property(string) and proxyId (number)

GET:
- '/mainbody': loads static page that says "Main body loading... Side bar content loading..."
- '/mainbody/:proxyId': reponds with single data object (array of objects) and static files to render module based on query data
-

PUT:
-'/mainbody/:proxyId': updates the name of game based on query data and name given in request body

DELETE:
-'/mainbody/:proxyId': deletes game based on query data




