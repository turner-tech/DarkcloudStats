export var WeaponAbilities = [
  {
    id: 1,
    name: 'Abs Up',
    description: 'Increases Abs absorption by 20%.',
    weapon: [],
    random: false,
  },
  {
    id: 2,
    name: 'Big Bucks',
    description:
      'Doubles the money acquired when you defeat an enemy. Opposite of Poor.',
    weapon: [],
    random: false,
  },
  {
    id: 3,
    name: 'Critical',
    description: 'Small chance to kill an enemy with one hit.',
    weapon: [],
    random: false,
  },
  {
    id: 4,
    name: 'Drain',
    description:
      "Restores a small amount of hit points(about 1% of the damage dealt, regardless of enemy's health) with each attack. Opposite of Heal.",
    weapon: [26],
    random: false,
  },
  {
    id: 5,
    name: 'Durable',
    description: 'Delays the rate at which WHp is lost. Opposite of Fragile.',
    weapon: [],
    random: true,
  },
  {
    id: 6,
    name: 'Fragile',
    description:
      'Increases the rate at which WHp is lost. Opposite of Durable.',
    weapon: [],
    random: true,
  },
  {
    id: 7,
    name: 'Heal',
    description:
      'Restores 1 Health Point every couple of seconds. Opposite of Drain.',
    weapon: [],
    random: false,
  },
  {
    id: 8,
    name: 'Poison',
    description:
      'Small chance to Poison an enemy, causing it lose health over time.',
    weapon: [],
    random: false,
  },
  {
    id: 9,
    name: 'Poor',
    description:
      'Decreases the Gilda acquired when you defeat an enemy. Opposite of Big Bucks.',
    weapon: [],
    random: false,
  },
  {
    id: 10,
    name: 'Quench',
    description:
      'Reduces the rate at which the thirst meter decreases. Opposite of Thirst.',
    weapon: [5],
    random: false,
  },
  {
    id: 11,
    name: 'Steal',
    description: 'Small chance to steal an item from an enemy hitting them.',
    weapon: [],
    random: false,
  },
  {
    id: 12,
    name: 'Stop',
    description: 'Small chance to freeze an enemy during an attack.',
    weapon: [14],
    random: false,
  },
  {
    id: 13,
    name: 'Thirst',
    description:
      'Doubles the rate at which the thirst meter empties, but each slain enemy refills one drop. Opposite of Quench.',
    weapon: [9],
    random: false,
  },
];
