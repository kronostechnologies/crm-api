var graphQLTools = require('graphql-tools');
var fs = require('fs');
var path = require('path');

var schemaContent = fs.readFileSync(path.join(__dirname, 'crm.graphqls'), "utf-8");
const myMockServer = graphQLTools.mockServer(schemaContent);
myMockServer.query(`{
  contact (id: 1) {
  	id,
  	activities (filters: { agendaTypeIn: [CALL, MEETING] }) {
  		items {
  			id
  		},
  		pagination {
  			page
  			perPage
  		}
  	}
  }
}`).then(function(result) {
	console.log(JSON.stringify(result));
});