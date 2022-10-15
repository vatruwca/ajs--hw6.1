import orderByProps from '../app';

test('checking for the specified sorting of properties', () => {
  const player = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const expectedArr = [
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'attack', value: 80 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(orderByProps(player, ['defence', 'health'])).toEqual(expectedArr);
});
