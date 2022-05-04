import Layout from '@components/Layout';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Button, Title } from '@schoolmouv/react-kit';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '@store/counter';
import { useState } from 'react';
import { useIpcRenderOn } from '@hooks/useIpcRenderOn';

const CounterPage = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  useIpcRenderOn('electron-increment', () => dispatch(increment()));
  useIpcRenderOn('electron-decrement', () => dispatch(decrement()));

  return (
    <Layout title='Counter'>
      <Title semantic='h2' size='xl' weight='bold'>
        Counter 👋
      </Title>
      <Title semantic='div' size='s' weight='regular'>
        {count}
      </Title>
      <div style={{ display: 'flex', marginBottom: '10px' }}>
        <Button
          onClick={() => dispatch(decrement())}
          type='primary'
          size='small'
          style={{ marginRight: '10px' }}
        >
          Decrement
        </Button>
        <Button
          onClick={() => dispatch(increment())}
          type='primary'
          size='small'
        >
          Increment
        </Button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type='number'
          style={{ marginBottom: '10px' }}
        />
        <Button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
          type='primary'
          size='small'
        >
          Increment
        </Button>
      </div>
    </Layout>
  );
};

export default CounterPage;
