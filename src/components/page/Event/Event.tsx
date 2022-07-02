import { useParams } from 'react-router-dom';

import { Match } from './Match';

export const Event = () => {
  const { id } = useParams();
  return (
    <>
      <h2 className="m-14 text-3xl font-bold text-center">勝敗予想 {id}</h2>
      <div className="flex flex-col items-center gap-8">
        <Match />
        <Match />
        <Match />
        <Match />
      </div>
    </>
  );
};
