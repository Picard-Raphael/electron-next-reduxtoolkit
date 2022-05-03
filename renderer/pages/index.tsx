import Layout from '@components/Layout';
import { selectCount } from '@store/counter';
import { useAppSelector } from '@store/hooks';
import { useSendIpc } from '@hooks/useSendIpc';
import { Button } from '@schoolmouv/react-kit';

const IndexPage = () => {
  const count = useAppSelector(selectCount);
  useSendIpc();

  const onSayHiClick = () => {
    global.ipcRenderer.send('message', `Hi from next, count = ${count}`);
  };

  return (
    <Layout title='Home | Next.js + TypeScript + Electron Example'>
      <h1>Hello Next.js 👋</h1>
      <Button onClick={onSayHiClick} type='primary' size='small'>
        Say hi to electron
      </Button>
    </Layout>
  );
};

export default IndexPage;
