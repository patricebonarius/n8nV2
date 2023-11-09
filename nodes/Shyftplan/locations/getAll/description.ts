import { INodeProperties } from 'n8n-workflow';
export const getApiV1LocationsGetAllFields: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['getApiV1Locations'],
				resource: ['locations'],
			},
		},
		options: [
			{
				displayName: 'Updated After',
				name: 'updated_after',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Return all records which are updated after',
			},
			{
				displayName: 'Created After',
				name: 'created_after',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Return all records which are created after',
			},
			{
				displayName: 'Updated Before',
				name: 'updated_before',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Return all records which are updated before',
			},
			{
				displayName: 'Created Before',
				name: 'created_before',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Return all records which are created before',
			},
			{
				displayName: 'ID',
				name: 'id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Filter for single Location ID',
			},
			{
				displayName: 'IDs[]',
				name: 'idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Filter an array of Location ID',
			},
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Filter for single Company ID',
			},
			{
				displayName: 'Company IDs[]',
				name: 'company_idsSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Filter an array of Company ID',
			},
		],
	},
];
