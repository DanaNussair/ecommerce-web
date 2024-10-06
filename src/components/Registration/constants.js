export const FORM_OPTIONS = [
	{
		id: 1,
		name: 'Name',
		fieldType: 'TEXT',
		minLength: 1,
		maxLength: 100,
		defaultValue: 'John Doe',
		required: true,
	},
	{
		id: 2,
		name: 'Age',
		fieldType: 'NUMBER',
		minLength: 1,
		maxLength: 50,
		defaultValue: '24',
		required: true,
	},
	{
		id: 3,
		name: 'Email',
		fieldType: 'EMAIL',
		minLength: 1,
		maxLength: 50,
		defaultValue: 'hello@mail.com',
		required: true,
	},
	{
		id: 4,
		name: 'Password',
		fieldType: 'PASSWORD',
		minLength: 1,
		maxLength: 50,
		defaultValue: 'hello@mail.com',
		required: true,
	},
	{
		id: 5,
		name: 'Role',
		fieldType: 'LIST',
		defaultValue: 'customer',
		required: true,
		listOfValues: [
			{ value: 'retailer', label: 'Retailer' },
			{ value: 'customer', label: 'Customer' },
		],
	},
	{
		id: 6,
		name: 'Love React?',
		fieldType: 'RADIO',
		defaultValue: '1',
		required: true,
		listOfValues: ['Yes', 'No'],
	},
];
