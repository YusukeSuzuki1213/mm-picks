import { LockClosedIcon } from '@heroicons/react/solid';

export const Match = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="font-semibold">第10試合</div>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center">
            <div
              className="h-24 w-24 rounded-full bg-center border-2 border-white"
              style={{
                backgroundImage: "url('https://onl.tw/c8emWAL')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: '7.5rem',
                outline: 'solid 2px #F00',
              }}
            />
            <p className="mt-2">萩原京平</p>
          </div>
          <div className="font-bold">VS</div>
          <div className="flex flex-col items-center">
            <div
              className="h-24 w-24 rounded-full bg-center border-2 border-white"
              style={{
                backgroundImage: "url('https://onl.tw/c8emWAL')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: '7.5rem',
                outline: 'solid 2px #00F',
              }}
            />
            <p className="mt-2">萩原京平</p>
          </div>
        </div>

        <div className="flex w-full h-6 mt-2">
          <div className="flex items-center justify-center bg-red-500 w-[60%]">
            <div className="text-center text-white font-semibold">60%</div>
          </div>
          <div className="flex items-center justify-center bg-blue-500 w-[40%] text-center">
            <div className="text-center text-white font-semibold">40%</div>
          </div>
        </div>
        <div className="relative w-full mt-2">
          <div className="flex h-7 blur-[3px]">
            <div className="flex items-center justify-center bg-gray-500 w-[50%]">
              <div className="text-center text-white">50%</div>
            </div>
            <div className="flex items-center justify-center bg-gray-500 w-[50%] text-center">
              <div className="text-center text-white">50%</div>
            </div>
          </div>
          <LockClosedIcon className="h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
        </div>
      </div>
    </>
  );
};
