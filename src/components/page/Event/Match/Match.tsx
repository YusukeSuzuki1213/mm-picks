export const Match = () => {
  return (
    <>
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center">
          <div
            className="h-20 w-20 rounded-full bg-center"
            style={{
              backgroundImage: "url('https://onl.tw/c8emWAL')",
              backgroundSize: '7rem',
            }}
          />
          <button>WIN</button>
        </div>
        <div>VS</div>
        <div className="flex flex-col items-center">
          <div
            className="h-20 w-20 rounded-full bg-center"
            style={{
              backgroundImage: "url('https://onl.tw/c8emWAL')",
              backgroundSize: '7rem',
            }}
          />
          <button>WIN</button>
        </div>
      </div>
    </>
  );
};
