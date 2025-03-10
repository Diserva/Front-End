//! використовую цей файл лише для тимчасово написання типів для документації

type Element_Select = {
	type: 'Select';
	name: string;
	defaultOption: string;
	options: string[];
};

type Element_Checkbox = {
	type: 'Checkbox';
	isCheckedByDefault: boolean;
	description: string;
};

type Element_TextInput = {
	type: 'TextInput';
	name: string;
	extandable: boolean;
	placeholder: string;
	defaultText: string;
};

type SimpleContainer = {
	type: 'Container1' | 'Container2';
	children: AnyContent | AnyContent[];
};

type Container_Main = {
	type: 'ContainerMain';
	heading: string;
	removeable: boolean;
	children: AnyContent | AnyContent[];
};

type Section = {
	sectionName: string;
	sectionHref: string;
	sectionContent: Container_Main | Container_Main[];
};

type AnyContent =
	| Element_Select
	| Element_Checkbox
	| Element_TextInput
	| SimpleContainer;

const test = [
	{
		sectionName: 'Main',
		sectionHref: '/main',
		sectionContent: [
			{
				type: 'ContainerMain',
				removeable: false,
				heading: 'Main',
				children: [
					{
						type: 'TextInput',
						name: 'Prefix',
						extandable: false,
						placeholder: 'some prefix',
						defaultText: ''
					},
					{
						type: 'Container2',
						children: [
							{
								type: 'Select',
								name: 'Main Language',
								defaultOption: 'Ukraininan (UA)',
								options: ['Enlish (US)', 'Dutch (GE)', 'Poland (PL)']
							},
							{
								type: 'Select',
								name: 'Commands Language',
								defaultOption: 'Ukraininan (UA)',
								options: ['Enlish (US)', 'Dutch (GE)', 'Poland (PL)']
							}
						]
					},
					{
						type: 'Checkbox',
						isCheckedByDefault: true,
						description: 'Use message Commands'
					},
					{
						type: 'Checkbox',
						isCheckedByDefault: false,
						description: 'Disable context commands'
					},
					{
						type: 'Checkbox',
						isCheckedByDefault: false,
						description: 'Delete member information after guild leaving'
					}
				]
			},
			{
				type: 'ContainerMain',
				removeable: true,
				heading: 'Member Leveling',
				children: [
					{
						type: 'TextInput',
						name: 'Prefix',
						extandable: false,
						defaultText: '',
						placeholder: '!'
					},
					{
						type: 'Container2',
						children: [
							{
								type: 'Select',
								name: 'Main Language',
								defaultOption: 'Ukrainian (UA)',
								options: ['Enlish (US)', 'Dutch (GE)', 'Poland (PL)']
							},
							{
								type: 'Select',
								name: 'Command Language',
								defaultOption: 'English (US)',
								options: ['Enlish (US)', 'Dutch (GE)', 'Poland (PL)']
							}
						]
					},
					{
						type: 'Checkbox',
						isCheckedByDefault: true,
						description: 'Use message Commands'
					},
					{
						type: 'Checkbox',
						isCheckedByDefault: false,
						description: 'Disable context commands'
					},
					{
						type: 'Checkbox',
						isCheckedByDefault: false,
						description: 'Delete member information after guild leaving'
					}
				]
			}
		]
	}
];

const test2 = [
	{
		sectionName: 'Main',
		sectionHref: '/main',
		sectionContent: [
			{
				type: 'ContainerMain',
				removeable: false,
				heading: 'Main',
				children: [
					{
						type: 'TextInput',
						name: 'Prefix',
						extandable: false,
						placeholder: 'some prefix',
						defaultText: ''
					},
					{
						type: 'Container2',
						children: [
							{
								type: 'Select',
								name: 'Main Language',
								defaultOption: 'Ukraininan (UA)',
								options: ['Enlish (US)', 'Dutch (GE)', 'Poland (PL)']
							},
							{
								type: 'Select',
								name: 'Commands Language',
								defaultOption: 'Ukraininan (UA)',
								options: ['Enlish (US)', 'Dutch (GE)', 'Poland (PL)']
							}
						]
					},
					{
						type: 'Checkbox',
						isCheckedByDefault: true,
						description: 'Use message Commands'
					},
					{
						type: 'Checkbox',
						isCheckedByDefault: false,
						description: 'Disable context commands'
					},
					{
						type: 'Checkbox',
						isCheckedByDefault: false,
						description: 'Delete member information after guild leaving'
					}
				]
			}
		]
	}
];
