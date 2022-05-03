import Layout from '@components/Layout';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useState } from 'react';
import { changeText } from '@store/text';
import { Button, Title } from '@schoolmouv/react-kit';

const TextPage = () => {
  const dispatch = useAppDispatch();
  const text = useAppSelector((state) => state.text.text);
  const [newText, setNewText] = useState('');
  return (
    <Layout title='Counter'>
      <Title semantic='h2' size='xl' weight='bold'>
        Text 👋
      </Title>
      <Title semantic='div' size='s' weight='regular'>
        {text}
      </Title>
      <div style={{ margin: '10px' }}>
        <input
          value={newText}
          onChange={(e) => setNewText(String(e.target.value))}
        />
      </div>
      <Button
        onClick={() => dispatch(changeText(newText))}
        type='primary'
        size='large'
      >
        Validate
      </Button>
    </Layout>
  );
};

export default TextPage;
