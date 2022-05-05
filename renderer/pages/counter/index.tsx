import { useEffect, useState } from 'react';
import { Button, Title } from '@schoolmouv/react-kit';
import { useAppSelector } from '../../store/hooks';
import {
  countSelector,
  selectCount,
  useActionsCounter,
} from '../../store/counter';
import { useIpcRenderOn } from '../../hooks/useIpcRenderOn';
import Layout from '../../components/Layout';

const CounterPage = () => {
  const { increment, decrement, incrementByAmount } = useActionsCounter();
  const count = useAppSelector(selectCount);
  const state = useAppSelector((state) => state);
  console.log(state);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  useIpcRenderOn('electron-increment', () => increment());
  useIpcRenderOn('electron-decrement', () => decrement());

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
          onClick={() => decrement()}
          type='primary'
          size='small'
          style={{ marginRight: '10px' }}
        >
          Decrement
        </Button>
        <Button onClick={() => increment()} type='primary' size='small'>
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
          onClick={() => incrementByAmount(Number(incrementAmount))}
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

export async function getStaticProps() {
  return {
    props: {},
  };
}
