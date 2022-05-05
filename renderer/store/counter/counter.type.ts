export type CounterState = {
  value: number;
};

export type CounterAction = {
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (amount: number) => void;
};
