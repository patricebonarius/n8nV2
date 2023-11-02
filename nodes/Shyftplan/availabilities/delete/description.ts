import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1AvailabilitiesAvailabilityIdDeleteFields: INodeProperties[] = [
	{
		displayName: 'Availability ID',
		name: 'availability_id',
		type: 'number',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['deleteApiV1AvailabilitiesAvailabilityId'],
				resource: ['availabilities'],
			},
		},
		placeholder: '',
		description: 'Enter Availability ID',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['deleteApiV1AvailabilitiesAvailabilityId'],
				resource: ['availabilities'],
			},
		},
		options: [
			{
				displayName: 'Company ID',
				name: 'company_id',
				type: 'number',
				default: '',
				placeholder: '',
				description: 'Enter company ID',
			},
		],
	},
];
