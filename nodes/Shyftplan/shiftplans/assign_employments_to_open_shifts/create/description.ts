import { INodeProperties } from 'n8n-workflow';
export const postApiV1ShiftplansAssignEmploymentsToOpenShiftsCreateFields: INodeProperties[] = [
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
				operation: ['postApiV1ShiftplansAssignEmploymentsToOpenShifts'],
				resource: ['shiftplans'],
			},
		},
	},
	{
		displayName: 'Shiftplan ID',
		name: 'shiftplan_id',
		type: 'number',
		default: '',
		placeholder: '',
		description: 'Enter ID of shiftplan that will be automatically filled',
		required: true,
		displayOptions: {
			show: {
				operation: ['postApiV1ShiftplansAssignEmploymentsToOpenShifts'],
				resource: ['shiftplans'],
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
				operation: ['postApiV1ShiftplansAssignEmploymentsToOpenShifts'],
				resource: ['shiftplans'],
			},
		},
		options: [
			{
				displayName: 'Copy Shiftplan',
				name: 'copy_shiftplan',
				type: 'boolean',
				default: false,
				placeholder: '',
				description:
					'Whether Copy shiftplan and assign employments to open shifts in the copied shiftplan',
			},
			{
				displayName: 'Ignore Rotation_groups',
				name: 'ignore_rotation_groups',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Ignore rotation groups on automation',
			},
			{
				displayName: 'Ignore Conflicts[shifts_collision]',
				name: 'ignore_conflictsSTARTshifts_collisionEND',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Ignore shifts collision on automation',
			},
			{
				displayName: 'Ignore Conflicts[absences_collision]',
				name: 'ignore_conflictsSTARTabsences_collisionEND',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Ignore absences on automation',
			},
			{
				displayName: 'Ignore Conflicts[maximum_working_hours]',
				name: 'ignore_conflictsSTARTmaximum_working_hoursEND',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Ignore maximum working hours limit on automation',
			},
			{
				displayName: 'Ignore Conflicts[only_native_assignments]',
				name: 'ignore_conflictsSTARTonly_native_assignmentsEND',
				type: 'boolean',
				default: false,
				placeholder: '',
				description: 'Whether Only assign employees to their master locations',
			},
			{
				displayName: 'Scoring Rules[consistent_position]',
				name: 'scoring_rulesSTARTconsistent_positionEND',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Select consistent position priority',
			},
			{
				displayName: 'Scoring Rules[consistent_time]',
				name: 'scoring_rulesSTARTconsistent_timeEND',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Select time consistent priority',
			},
			{
				displayName: 'Scoring Rules[availabilities]',
				name: 'scoring_rulesSTARTavailabilitiesEND',
				type: 'string',
				default: '',
				placeholder: '',
				description: 'Enter Select availabilities priority',
			},
			{
				displayName: 'Employment Tag_IDs[only_include][]',
				name: 'employment_tag_idsSTARTonly_includeENDSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Filter in employees with these employee attributes on automation',
			},
			{
				displayName: 'Employment Tag_IDs[exclude][]',
				name: 'employment_tag_idsSTARTexcludeENDSTARTEND',
				type: 'json',
				typeOptions: {
					multipleValues: true,
					multipleValueButtonText: 'Add Tag',
				},
				default: '',
				placeholder: '',
				description: 'Enter Filter out employees with these employee attributes on automation',
			},
		],
	},
];
