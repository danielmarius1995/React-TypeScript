import UseStateComponent from "./UseStateComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseContextComponent from "./UseContextComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseRefComponent from "./UseRefComponent";
import CustomHookComponent from "./CustomHookComponent";

const App = (): JSX.Element | null => {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>useCustomHook</h1>
      <CustomHookComponent />
    </div>
  );
};

export default App;
