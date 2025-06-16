import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { SettingsType } from './lib/axios/apiSchemas';

const responseBody: SettingsType = [
	{
		type: 'Section',
		name: 'Main',
		children: [
			{
				type: 'DefContainer',
				name: 'Main',
				isSwitchable: false, // раніше removeable: false
				children: [
					{
						type: 'DefTextInput',
						name: 'Prefix',
						placeholder: 'some prefix',
						defaultText: '', // 1
						id: 'e3be344a-f034-4ece-b6f6-f794b1afe1de'
					},
					{
						type: 'Container2',
						children: [
							{
								type: 'Select',
								name: 'Main Language',
								defaultOption: 'Ukraininan (UA)',
								options: ['Enlish (US)', 'Dutch (GE)', 'Poland (PL)'], // 2
								id: 'ef3b203a-89c1-4519-ab41-28ac68622b86'
							},
							{
								type: 'Select',
								name: 'Commands Language',
								defaultOption: 'Ukraininan (UA)',
								options: ['Enlish (US)', 'Dutch (GE)', 'Poland (PL)'], //3
								id: '8be730d6-5e51-4ab5-b6fd-bc99ec69237a'
							}
						]
					},
					{
						type: 'Checkbox',
						name: 'Use message Commands',
						isCheckedByDefault: true, //4
						id: '0a27eb41-c844-424a-8208-552b9231bb03'
					},
					{
						type: 'Checkbox',
						name: 'Disable context commands', //5
						isCheckedByDefault: false,
						id: 'befacd5a-5881-4442-b846-8aba71276248'
					},
					{
						type: 'Checkbox',
						name: 'Delete member information after guild leaving', //6
						isCheckedByDefault: false,
						id: '40e63107-39d5-46a8-aa02-e422ba2b38af'
					}
				]
			}
		]
	},
	{
		name: 'Moderation',
		type: 'Section',
		children: {
			type: 'DefContainer',
			name: 'Загальні параметри модерації',
			isSwitchable: false, // раніше removeable: false
			children: [
				{
					type: 'Checkbox',
					name: 'Підключити модерацію', //7
					isCheckedByDefault: true,
					id: '1ef3abaa-26a6-4776-8a2a-d30c64a0ad10'
				},
				{
					type: 'Checkbox',
					name: 'Виносити попередження за кацапську', //8
					isCheckedByDefault: false,
					id: 'efd95ee5-23f9-418b-8e3e-00362d014a62'
				},
				{
					type: 'Select',
					name: 'адмін права має',
					defaultOption: 'консерватор',
					options: ['консерватор', 'кава', 'курумі'],
					id: '4cad0d50-fa9a-4cb5-bb06-dab87e403807' //9
				}
			]
		}
	},
	{
		type: 'Section',
		name: 'Greeting',
		children: {
			type: 'DefContainer',
			name: 'Greeting',
			isSwitchable: true, // раніше removeable: true
			children: {
				type: 'ExtandableTextInput', //10
				name: 'Привітання',
				placeholder: 'введіть якийсь текст',
				defaultText: 'Привіт мандрівник',
				id: '4ca2039d-8bf4-418f-9d94-dd199dace44a'
			}
		}
	},
	{
		type: 'Section',

		name: 'Level',
		children: {
			type: 'DefContainer',
			name: 'Головні налаштування',
			isSwitchable: true, // раніше removeable: true
			children: {
				type: 'Checkbox', //11
				name: 'Оберіть правду чи брехню',
				isCheckedByDefault: true,
				id: '4e525325-20fb-4f22-8702-5f6c077f596b'
			}
		}
	},
	{
		type: 'Section',

		name: 'Other',
		children: {
			type: 'DefContainer',
			name: 'Про себе',
			isSwitchable: false, // раніше removeable: false
			children: {
				type: 'ExtandableTextInput', //12
				name: 'Повідайте свою історію',
				placeholder: 'шлях у тисячу миль починається з першого кроку',
				defaultText: '',
				id: '4e525325-20fb-4f22-8702-5f6c077f596b'
			}
		}
	}
];

const server = setupServer(
	http.get('http://localhost:5000/get-server/test', () =>
		HttpResponse.json(responseBody)
	)
);

server.listen({ onUnhandledRequest: 'bypass' });
