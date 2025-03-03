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
	removeable: boolean;
	children: AnyContent | AnyContent[];
};

type Section = {
	sectionName: string;
	sectionHref: string;
	sectionContent: Container_Main;
};

type AnyContent =
	| Element_Select
	| Element_Checkbox
	| Element_TextInput
	| SimpleContainer;

const test: Section[] = [
	{
		sectionName: 'Main',
		sectionHref: '/main',
		sectionContent: {
			type: 'ContainerMain',
			removeable: false,
			children: [
				{
					type: 'Container1',
					children: {
						type: 'TextInput',
						extandable: false,
						placeholder: 'some prefix',
						defaultText: ''
					}
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
	}
];
