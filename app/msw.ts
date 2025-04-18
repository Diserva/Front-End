import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { SettingsType } from './lib/axios/apiSchemas';

const responseBody: SettingsType = [
	{
		name: 'Main',
		children: [
			{
				type: 'ContainerMain',
				name: 'Main',
				isSwitchable: false, // раніше removeable: false
				children: [
					{
						type: 'DefTextInput',
						name: 'Prefix',
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
						name: 'Use message Commands',
						isCheckedByDefault: true
					},
					{
						type: 'Checkbox',
						name: 'Disable context commands',
						isCheckedByDefault: false
					},
					{
						type: 'Checkbox',
						name: 'Delete member information after guild leaving',
						isCheckedByDefault: false
					}
				]
			}
		]
	},
	{
		name: 'Moderation',
		children: {
			type: 'ContainerMain',
			name: 'Загальні параметри модерації',
			isSwitchable: false, // раніше removeable: false
			children: [
				{
					type: 'Checkbox',
					name: 'Підключити модерацію',
					isCheckedByDefault: true
				},
				{
					type: 'Checkbox',
					name: 'Виносити попередження за кацапську',
					isCheckedByDefault: false
				},
				{
					type: 'Select',
					name: 'адмін права має',
					defaultOption: 'консерватор',
					options: ['консерватор', 'кава', 'курумі']
				}
			]
		}
	},
	{
		name: 'Greeting',
		children: {
			type: 'ContainerMain',
			name: 'Greeting',
			isSwitchable: true, // раніше removeable: true
			children: {
				type: 'ExtandableTextInput',
				name: 'Привітання',
				placeholder: 'введіть якийсь текст',
				defaultText: 'Привіт мандрівник'
			}
		}
	},
	{
		name: 'Level',
		children: {
			type: 'ContainerMain',
			name: 'Головні налаштування',
			isSwitchable: true, // раніше removeable: true
			children: {
				type: 'Checkbox',
				name: 'Оберіть правду чи брехню',
				isCheckedByDefault: true
			}
		}
	},
	{
		name: 'Other',
		children: {
			type: 'ContainerMain',
			name: 'Про себе',
			isSwitchable: false, // раніше removeable: false
			children: {
				type: 'ExtandableTextInput',
				name: 'Повідайте свою історію',
				placeholder: 'шлях у тисячу миль починається з першого кроку',
				defaultText: ''
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
