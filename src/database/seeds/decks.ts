import { Deck } from '@prisma/client';

const currentDate = new Date();

export const decks = (): Deck[] => {
  return [
    {
      id: '741d8b0a-4810-4060-8cb0-4bad8beb3869',
      name: 'Marselha',
      createdAt: currentDate,
      updatedAt: currentDate,
    },
    {
      id: '3778e849-6c51-4356-b5f4-7a99db712162',
      name: 'Le Normand',
      createdAt: currentDate,
      updatedAt: currentDate,
    },
  ];
};
