const newDate = new Date().toISOString().split('T')[0];

export const TodosData = [
  { id: 1, todo: 'have breakfast', date: newDate },
  { id: 2, todo: 'go to work', date: newDate },
  { id: 3, todo: 'sleep well', date: newDate },
];
