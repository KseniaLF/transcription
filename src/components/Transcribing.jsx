export default function Transcribing(props) {
  const { downloading } = props;

  return (
    <div className="flex items-center flex-col flex-1 justify-center gap-10 ms:gap-14 pb-24 p-4 text-center">
      <div className="flex flex-col gap-2 sm:gap-4">
        <h2 className="text-blue-400 bold font-semibold text-4xl sm:text-5xl md:text-6xl">
          Your transcribing
        </h2>

        <p>{!downloading ? "warm up cylinders" : "core cylinders engaged"}</p>
      </div>

      <div className="flex flex-col gap-2 sm:gap-4 max-w-[400px] mx-auto w-full">
        {[1, 2, 3].map((val) => {
          return (
            <div
              key={val}
              className={
                "rounded-full h-2 sm:h-3 bg-slate-400 loading " +
                `loading${val}`
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
}
