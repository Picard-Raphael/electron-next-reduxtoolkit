import { useState } from 'react';
import { Button, Title } from '@schoolmouv/react-kit';
import { useAppSelector } from '../../store/hooks';
import Layout from '../../components/Layout';
import { useActionsText } from '../../store/text';

const TextPage = () => {
  const text = useAppSelector((state) => state.text.text);
  const { changeText } = useActionsText();
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
      <Button onClick={() => changeText(newText)} type='primary' size='large'>
        Validate
      </Button>
    </Layout>
  );
};

export default TextPage;

export async function getStaticProps() {
  return {
    props: {},
  };
}
