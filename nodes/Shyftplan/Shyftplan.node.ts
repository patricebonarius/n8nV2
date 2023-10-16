import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

// import { OptionsWithUri } from 'request';

import { employmentsOps } from './employments/employmentsOps';
import { employmentsExecute } from './employments/employmentsExecute';
import { absencesOps } from './absences/absencesOps';
import { absencesExecute } from './absences/absencesExecute';
import { absence_reasonsOps } from './absence_reasons/absence_reasonsOps';
import { absence_reasonsExecute } from './absence_reasons/absence_reasonsExecute';

export class Shyftplan implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Shyftplan',
		name: 'Shyftplan',
		// eslint-disable-next-line n8n-nodes-base/node-class-description-icon-not-svg
		icon: 'file:shyftplan-icon.png',
		group: ['transform'],
		version: 1,
		description: 'Consume Shyfplan Beta API',
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		defaults: {
			name: 'Shyftplan',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'shyftplanApi',
				required: true,
			},
		],

		// Basic node details will go here
		properties: [
			// Resources and operations will go here
			// First Resource Objects - The things to operate on
			{
				displayName: 'Resource',
				name: 'resource',
				// type tells which type of data to expect from user
				// options result in a drop down
				type: 'options',
				options: [
					{
						name: 'Absence',
						value: 'absences',
					},
					{
						name: 'Absence Reason',
						value: 'absence_reasons',
					},
					{
						name: 'Employment',
						value: 'employments',
					},
				],
				default: 'employments',
				noDataExpression: true,
				required: true,
				description: 'Choose a resource / endpoint',
			},

			/* absences Operations */
			...absencesOps,

			/* absence_reasons Operations */
			...absence_reasonsOps,

			/* Employments Operations */
			...employmentsOps,
		],
	};

	// The execute method will go here
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		// Handle data coming from previous nodes
		const items = this.getInputData();
		// Get the std credentials
		//const credentials = await this.getCredentials('shyftplanApi');
		let responseData;
		let returnData = [];

		// get the chosen resource (aka endpoint) and operation(aka CRUD)
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		// For each item from incoming data, make an API call to create an employee
		// <= to run at least once
		for (let i = 0; i < items.length; i++) {
			// Employments
			if (resource === 'absences') {
				responseData = await absencesExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'absence_reasons') {
				responseData = await absence_reasonsExecute(this, operation, i);
				returnData.push(responseData);
			}
			if (resource === 'employments') {
				responseData = await employmentsExecute(this, operation, i);
				returnData.push(responseData);
			}
		}
		// Map data to n8n data structure
		return [this.helpers.returnJsonArray(returnData)];
	}
}
