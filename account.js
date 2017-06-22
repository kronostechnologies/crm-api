var graphQLTools = require('graphql-tools');
var fs = require('fs');
var path = require('path');

var schemaContent = fs.readFileSync(path.join(__dirname, 'account.graphqls'), "utf-8");
const myMockServer = graphQLTools.mockServer(schemaContent);
myMockServer.query(`{
  remoteAccounts(filters: {ownerId: 1}) {
  	id,
	type,
	description,
	isMain,
	priority,
	host,
	email,
	userLogin,
	userDisplayName,
	contactAccount { 
		enabled,
		syncAddresses
	},
	agendaAccount { 
		enabled,
	},
	mailAccount { 
		enabled,
	},
	owner {
		id
	},
  }
}`).then(function(result) {
	console.log(JSON.stringify(result));
});