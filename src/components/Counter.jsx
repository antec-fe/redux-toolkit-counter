import { useDispatch, useSelector } from "react-redux";
// import { CounterActions, ToggleActions } from "../store/data";
import { CounterActions } from "../store/counterSlice";
import { ToggleActions } from "../store/toggleSlice";

export default function Counter() {
  // useSelector or useStore
  // useSelectorun en esas musbet ceheti , state deyismediyi halda yeniden update olmur
  // useSelector vasitesi ile STORE ve Component arasinda connect temin olunur
    // counter: {
    //     counter: 0
    // },
    // toggle: {
    //     flag : false
    // }
  const counter = useSelector(state=>state.counter.counter);
  const flag = useSelector(state=>state.toggle.flag)
  const dispatch = useDispatch();
  const incrementMath = () =>{
    dispatch(CounterActions.increment())
  }
  const decrementMath = () =>{
    dispatch(CounterActions.decrement())
  }
  const increase = ()=>{
    dispatch(CounterActions.increase(5))
  }
  const toggle = ()=>{
    dispatch(ToggleActions.toggle())
  }
  return (
    <div>
        {
          flag && <>
            <h1>Counter</h1>
            <h3>{counter}</h3>
            <button onClick={incrementMath}>Artir+</button>
            <button onClick={decrementMath}>Azalt-</button>
            <button onClick={increase}>Artir +5</button> <br />
          </>
        }
        <button onClick={toggle}>Toggle Counter</button>
    </div>
  );
}