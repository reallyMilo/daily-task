import { useEffect, useState } from "react";
const Timer = () => {
  const startTime = 16;
  const endTime = 17;
  const totalTime = (endTime - startTime) * 60 * 60;
  const [timeLength, setTimeLength] = useState(totalTime);
  useEffect(() => {
    const timeCheck = setTimeout(() => {
      setTimeLength((prevTime) => prevTime - 1);
      console.log(timeLength);
    }, 1000);

    return () => {
      clearTimeout(timeCheck);
    };
  }, [timeLength]);
  //console.log((timeLength / totalTime) * 100);
  return (
    <div className="w-full h-2 bg-accent rounded-full">
      <div
        className={`h-2 bg-[red] rounded-full`}
        style={{ width: `${(timeLength / totalTime) * 100}%` }}
      ></div>
    </div>
  );
};

export default Timer;
