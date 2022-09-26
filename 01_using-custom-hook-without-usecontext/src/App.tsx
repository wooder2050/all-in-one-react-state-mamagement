import { Dispatch, SetStateAction, useState, useEffect } from "react";

// const useCount = (): [number, Dispatch<SetStateAction<number>>] => {
//   const [count, setCount] = useState<number>(0);
//   return [count, setCount];
// };
// const useCount = (): [number, Dispatch<SetStateAction<number>>] => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("count is changed to", count);
//   }, [count]);
//   return [count, setCount];
// };

const useCount = (): [number, Dispatch<SetStateAction<number>>] => {
  const [count, setCount] = useState(0);
  const inc = () => setCount((c) => c + 1);
  return [count, inc];
};
const Component = () => {
  const [count, setCount] = useCount();
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
};

const App = () => {
  return <Component />;
};

export default App;
