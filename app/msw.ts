import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

const responseBody = [
	{
		name: 'Main',
		children: [
			{
				type: 'ContainerMain',
				removeable: false,
				name: 'Main',
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
	},
	{
		name: 'Moderation',
		children: {
			type: 'ContainerMain',
			removeable: false,
			name: 'Загальні параметри модерації',
			children: [
				{
					type: 'Checkbox',
					isCheckedByDefault: true,
					description: 'Підключити модерацію'
				},
				{
					type: 'Checkbox',
					isCheckedByDefault: false,
					description: 'Виносити попередження за кацапську'
				},
				{
					type: 'Select',
					options: ['консерватор', 'кава', 'курумі'],
					defaultOption: 'консерватор',
					name: 'адмін права має'
				}
			]
		}
	},
	{
		name: 'Greeting',
		children: {
			type: 'ContainerMain',
			removeable: true,
			name: 'Greeting',
			children: {
				type: 'TextInput',
				defaultText: 'Привіт мандрівник',
				placeholder: 'введіть якийсь текст',
				name: 'Привітання',
				extandable: true
			}
		}
	},
	{
		name: 'Level',
		children: {
			type: 'ContainerMain',
			removeable: true,
			name: 'Головні налаштування',
			children: {
				type: 'Checkbox',
				isCheckedByDefault: true,
				description: 'Оберіть правду чи брехню'
			}
		}
	},
	{
		name: 'Other',
		children: {
			type: 'ContainerMain',
			name: 'Про себе',
			removeable: false,
			children: {
				type: 'TextInput',
				defaultText: '',
				name: 'Повідайте свою історію',
				placeholder: 'шлях у тисячу миль починається з першого кроку',
				extandable: true
			}
		}
	}
];

const server = setupServer(
	http.get('http://localhost:5000/get-server/test', () => HttpResponse.json(responseBody))
);

server.listHandlers()
