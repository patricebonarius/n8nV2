import { IDataObject, IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
    
        export async function deleteApiV1AvailabilitiesExceptionsExceptionIdDeleteExecute(node: IExecuteFunctions, operation: string, i: number) {
            const credentials = await node.getCredentials('shyftplanApi');
            let responseData;
        const exception_id = node.getNodeParameter('exception_id', i) as number;
const additionalFields = node.getNodeParameter('additionalFields', i) as IDataObject;
const data: IDataObject = {
exception_id,
};

        // put it  all inputs together
        Object.assign(data, additionalFields);
        Object.assign(data, credentials);

        // construct request
        const myOptions: IHttpRequestOptions = {
            url: credentials.domain + "/api"+ "/v1"+ "/availabilities"+ "/exceptions"+ "/" +exception_id,
            method: 'DELETE',
            body: data,
        };
        
        responseData = await node.helpers.httpRequest(myOptions);
        return responseData;
        }