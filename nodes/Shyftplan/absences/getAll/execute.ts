import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';

export async function getApiV1AbsencesGetAllExecute(
	node: IExecuteFunctions,
	operation: string,
	i: number,
) {
	const credentials = await node.getCredentials('shyftplanApi');
	let responseData;
	const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
	const data: IDataObject = {};

	// put it  all inputs together
	Object.assign(data, additionalFields);
	Object.assign(data, credentials);

	const header = {
		'content-type': 'x-www-form-urlencoded',
	};

	// construct request
	const myOptions: IHttpRequestOptions = {
		url: credentials.domain + '/api' + '/v1' + '/absences',
		method: 'GET',
		headers: header,
		qs: data,
	};

	responseData = await node.helpers.httpRequest(myOptions);
	return responseData;
}
