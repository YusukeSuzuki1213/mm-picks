import { useParams } from 'react-router-dom';

import { Match } from './Match';

export const Event = () => {
  const { id } = useParams();
  return (
    <>
      <h2 className="m-14 text-3xl font-bold text-center">εζδΊζ³ {id}</h2>
      <div className="flex flex-col items-center gap-16 mb-10">
        <Match />
        <Match />
        <Match />
        <Match />
      </div>
    </>
  );
};
