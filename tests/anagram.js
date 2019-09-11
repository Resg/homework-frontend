'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output);
	});
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'карта', 'колун', 'карат', 'катар',
			'клоун', 'кулон', 'нарок',
			'коран', 'крона', 'уклон', 'норка',
		];

		const output = [
			[	"карат", "карта", "катар"	],
			[	"клоун", "колун", "кулон", "уклон"	],
			[	"коран", "крона", "нарок", "норка"	]
		];

		assert.deepEqual(anagram(input), output);
	});
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'колба', 'приказ',
			'бокал', 'каприз',
			'дом',
		];

		const output = [
			[ 'бокал', 'колба' ],
			[ 'каприз', 'приказ' ],
		];

		assert.deepEqual(anagram(input), output);
	});
});
