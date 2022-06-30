import { Card } from '@/components/page/Top/Card';
export const Top = () => {
  return (
    <>
      <h2 className="m-14 text-3xl font-bold text-center">大会一覧</h2>
      <div className="flex flex-wrap m-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};
