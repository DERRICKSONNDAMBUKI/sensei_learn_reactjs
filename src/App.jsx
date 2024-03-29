import "./App.css";
import { Car } from "./components/class_component/Car";
import { ArrayMethods } from "./components/ES6/ArrayMethods";
import ArrowFucntions from "./components/ES6/ArrowFucntions";
import Classes from "./components/ES6/Classes";
import { Destructuring } from "./components/ES6/Destructuring";
import { Modules } from "./components/ES6/Modules";
import { SpreadOperator } from "./components/ES6/SpreadOperator";
import { Variables } from "./components/ES6/Variables";
import { Football } from "./components/events/Football";
import { MultipleInputs } from "./components/form/MultipleInputs";
import { MyForm } from "./components/form/MyForm";
import { Carf } from "./components/function_components/Carf";
import HelloWorld from "./components/HelloWorld";
import { Lists } from "./components/lists/Lists";
import { Goal } from "./components/operators/Goal";
import { TextArea } from "./components/form/TextArea";
import { Select } from "./components/form/Select";
import { ReactRouterDom } from "./components/react_router_dom/ReactRouterDom";
import { Memo } from "./components/memo/Memo";
import { Css } from "./components/css/Css";
import { Sass } from "./components/sass/Sass";
import { UseState } from "./components/hooks/UseState";
import { UseEffect } from "./components/hooks/UseEffect";
import { UseContext } from "./components/hooks/UseContext";
import { UseRef } from "./components/hooks/UseRef";
import { UseReducer } from "./components/hooks/UseReducer";
import { WithoutUseCallback } from "./components/hooks/useCallback/WithoutUseCallback";
import { UseCallback } from "./components/hooks/useCallback/UseCallback";
import { UseMemo } from "./components/hooks/UseMemo";
import { CustomHook } from "./components/hooks/customHooks/CustomHook";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Classes />
      <ArrowFucntions />
      <Variables />
      <ArrayMethods />
      {/* <Destructuring/> */}
      <SpreadOperator />
      <Modules />
      <Car color="green" model="mustang" />
      {/* props value */}
      <Carf color="blue" />
      <Football/>
      <Goal isGoal={false}/>
      <Lists/>
      <MyForm/>
      <MultipleInputs/>
      <TextArea/>
      <Select/>
      <ReactRouterDom/>
      <Memo/>
      <Css/>
      <Sass/>
      <UseState/>
      <UseEffect/>
      <UseContext/>
      <UseRef/>
      <UseReducer/>
      <WithoutUseCallback/>
      <UseCallback/>
      <UseMemo/>
      <CustomHook/>
    </div>
  );
}

export default App;
