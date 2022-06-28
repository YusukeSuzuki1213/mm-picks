export const Card = () => {
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a
          href=""
          className="block bg-white shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
        >
          <div className="relative pb-48 overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://d1uzk9o9cg136f.cloudfront.net/f/16782696/rc/2022/06/17/15435fddb6d1ee6fe3aa4ce44383c33a9a909af4_large.jpg"
              alt=""
            />
          </div>
          <div className="p-4">
            <h2 className="mb-2 font-bold">湘南美容クリニック presents RIZIN.36</h2>
            <p className="mb-1 text-sm">開催日: 2022年7月2日(土)</p>
            <p className="text-sm">会場: 沖縄アリーナ</p>
          </div>
        </a>
      </div>
    </>
  );
};
