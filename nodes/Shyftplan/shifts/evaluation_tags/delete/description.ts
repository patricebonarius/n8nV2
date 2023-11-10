import { INodeProperties } from 'n8n-workflow';
export const deleteApiV1ShiftsShiftIdEvaluationTagsDeleteFields: INodeProperties[] = [
	{
		displayName: 'Company ID',
		name: 'company_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Company ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1ShiftsShiftIdEvaluationTags'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'Shift ID',
		name: 'shift_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Shift ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1ShiftsShiftIdEvaluationTags'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'Tag ID',
		name: 'tag_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter Evaluation Tag ID',
		required: true,
		displayOptions: {
			show: {
				operation: ['deleteApiV1ShiftsShiftIdEvaluationTags'],
				resource: ['shifts'],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				operation: ['deleteApiV1ShiftsShiftIdEvaluationTags'],
				resource: ['shifts'],
			},
		},
		options: [],
	},
];
