const { GoogleSpreadsheet } = require('google-spreadsheet');
const { promisify } = require('util');

const creds = require('./client_secret.json');

async function addClientToSpreadsheet({ name, email, phone, message }){
	const doc = new GoogleSpreadsheet('116igb7qXVpMpvBaDSrMb5ZkRpq_SnjNEPYZG7yXH9p4');
	await doc.useServiceAccountAuth(creds);
	await doc.loadInfo();
	const sheet = doc.sheetsByIndex[0];
	console.log('Adding row');
	const toAdd = {
		nombre: name,
		email,
		telefono: phone,
		mensaje: message
	}

	await sheet.addRow(toAdd);
}

addClientToSpreadsheet({ 
	name: "Pedro",
	email: "pedro@udec.cl",
	phone: "+56999999999",
	message: "Ola kiero DipJab"
})
