// import { Button } from "./components/ui/button";
// import useStore from "./zustand/store";

// type bearCouter = {
//   bears: number;
// };

function App() {
  // const bears = useStore((state: bearCouter) => state.bears);

  // const increasePopulation = useStore((state) => state.increasePopulation);
  // const reset = useStore((state) => state.removeAllBears);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-3xl">Hello</h1>
      {/* <p>Bears: {bears}</p>
      <Button onClick={increasePopulation}>more bears</Button>
      <Button onClick={reset}>reset bears</Button> */}
    </div>
  );
}

export default App;
