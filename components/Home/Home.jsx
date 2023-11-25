import { useDataContext } from '../../src/dataContext';

export default function Home() {
  const { mode, handleAppMode } = useDataContext();
  console.log(mode);
  console.log(handleAppMode);

  return <div>This is Home Component!</div>;
}
