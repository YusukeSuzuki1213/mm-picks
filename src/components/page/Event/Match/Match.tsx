export const Match = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center">
            <div
              className="h-20 w-20 rounded-full bg-center border-2 border-white"
              style={{
                backgroundImage: "url('https://onl.tw/c8emWAL')",
                backgroundSize: '7rem',
                outline: 'solid 2px #F00',
              }}
            />
            <p>萩原京平</p>
          </div>
          <div>VS</div>
          <div className="flex flex-col items-center">
            <div
              className="h-20 w-20 rounded-full bg-center border-2 border-white"
              style={{
                backgroundImage: "url('https://onl.tw/c8emWAL')",
                backgroundSize: '7rem',
                outline: 'solid 2px #00F',
              }}
            />
            <p>萩原京平</p>
          </div>
        </div>

        <div className="flex w-full h-5">
          <div className="bg-red-500 w-[60%]" />
          <div className="bg-blue-500 w-[40%]" />
        </div>
      </div>
    </>
  );
};
