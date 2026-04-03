import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld, {Welcome} from "./components/HelloWorld";
import SplitComponent from "./components/SplitComponent";
import Profile from "./components/Profile";
import Bordered from "./components/Bordered";
import Dashboard from "./components/conditional-render/Dashboard";
import ItemWithFlag from "./components/conditional-render/ItemWithFlag";
import ItemList from "./components/ItemList";
import UserList from "./components/UserList";
import EventDemo from "./components/interactivity/EventDemo";
import PropagationDemo from "./components/PropagationDemo";
import Counter from "./components/Couter";
import TimmerDemo from "./components/TimmerDemo";
import BatchUpdateDemo from "./components/BatchUpdateDemo";
import ItemListWithState from "./components/ItemListWithState";
import ObjectUpdate from "./components/ObjectUpdate";
import {FormData} from "next/dist/compiled/@edge-runtime/primitives";
import FormDemo from "./components/Form/FormDemo";
import ReFormDemo from "./components/Form/ReFormDemo";
import LoginForm from "./components/Form/LoginForm";
import Tabs from "./components/Tabs";
import ParentToChild from "./components/ParentToChild";
import PosForm from "./components/PosForm";
import FilterableProductTable from "./components/FilterableProductTable";
import FilterableProduct from "./components/FilterableProduct";
import DestroyComponent from "./components/reconcilition/DestroyComponent";
import TodoList from "./components/TodoList";
import CounterWithReducer from "./components/reducer/CounterWithReducer";
import TodoListWithReducer from "./components/reducer/TodoListWithReducer";
import WhyContext from "./components/context/WhyContext";
import ContextDemo from "./components/context/ContextDemo";
import TodoWithContext from "./components/context/TodoWithContext";
import TodoWithContextDemo from "./components/context/TodoWithContextDemo";
import WhyRef from "./components/ref/WhyRef";
import FocusInput from "./components/ref/FocusInput";
import CustomInputDemo from "./components/ref/CustomInputDemo";
import EffectDemo from "./components/effect/EffectDemo";
import EffectLifCycle from "./components/effect/EffectLifeCycle";
import TimerDemo from "./components/effect/TimerDemo";
import CleanUpDemo from "./components/effect/CleanUpDemo";
import TodoCount from "./components/context/TodoCount";
import TodoWithDataFetch from "./components/effect/TodoWithDataFetch";
import LoadTodo from "./components/hooks/LoadTodo";
import LoadUser from "./components/hooks/LoadUser";
import LoadDataWithHook from "./components/hooks/LoadDataWithHook";
import FormWithHook from "./components/hooks/FormWithHook";
import SimpleLoginForm from "./components/Form/SimpleLoginForm";
import MovieForm from "./components/Form/MovieForm";
import WhyRenderProp from "./components/design_pattern/render_property/WhyRenderProp";
import RenderPropDemo from "./components/design_pattern/render_property/RenderPropDemo";
import WhyHoc from "./components/design_pattern/hoc/WhyHoc";
import HocWithLoggeDemo from "./components/design_pattern/hoc/HocWithLoggeDemo";
import WhyHocAuth from "./components/design_pattern/hoc/WhyHocAuth";
import AuthDemo from "./components/design_pattern/hoc/AuthDemo";
import ProtectedDemo from "./components/design_pattern/componund/ProtectedDemo";
import RouterDemo from "./components/router/RouterDemo";
import WhyUseCallback from "./components/hooks/WhyUseCallback";
import MemoDemo from "./components/hooks/MemoDemo";
import PortalDemo from "./components/PortalDemo";
import TableDemo from "./components/table/TableDemo";
import DatagridDemo from "./components/table/DatagridDemo";

export default function Home() {
  return (
    <div className={styles.page}>

        <h1 className={styles.head}>Hello React Js Day 7</h1>
          {/*<HelloWorld />*/}
          {/*<HelloWorld />*/}
          {/*<Welcome />*/}
        {/*<Bordered>*/}
        {/*    <Profile*/}
        {/*        image = "https://i.imgur.com/MK3eW3Am.jpg"*/}
        {/*        name ={"Katherine Johnson"}*/}
        {/*    />*/}
        {/*</Bordered>*/}



        {/*<Bordered>*/}
        {/*    <Profile*/}
        {/*        image= "http://res.cloudinary.com/dg52gsebs/image/upload/v1768621347/fjjb2yeg2wuagzudyaoe.jpg"*/}
        {/*        name = "Katherine Johnson"*/}
        {/*    />*/}
        {/*</Bordered>*/}
        {/*<Dashboard role={'admin'} />*/}
        {/*<ItemWithFlag flag={true} name={'Apple'} />*/}
        {/*<ItemList />*/}

        {/*<UserList />*/}


        {/*<EventDemo />*/}
        {/*<PropagationDemo />*/}
        {/*<Counter />*/}
        {/*<TimmerDemo />*/}
        {/*<BatchUpdateDemo />*/}
        {/*<ItemListWithState />*/}
        {/*<ObjectUpdate />*/}

        {/*<FormDemo />*/}
        {/*<ReFormDemo />*/}
        {/*<LoginForm />*/}

        {/*<Tabs headers={['Tab1', 'Tab2', 'Tab3']} >*/}
        {/*    <div>*/}
        {/*        Page 1*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        Page 2*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        Page 3*/}
        {/*    </div>*/}

        {/*</Tabs>*/}
        {/*<ParentToChild />*/}

        {/*<PosForm />*/}
        {/*<FilterableProductTable />*/}
        {/*<FilterableProduct />*/}
        {/*<DestroyComponent />*/}
        {/*<TodoList />*/}
        {/*<CounterWithReducer />*/}
        {/*<WhyContext />*/}
        {/*<ContextDemo />*/}
        {/*<TodoWithContextDemo />*/}
        {/*<WhyRef />*/}
        {/*<FocusInput />*/}
        {/*<CustomInputDemo />*/}
        {/*<EffectDemo />*/}
        {/*<EffectLifCycle />*/}
        {/*<TimerDemo />*/}
        {/*<CleanUpDemo />*/}
        {/*<TodoWithDataFetch />*/}
        {/*<LoadTodo />*/}
        {/*<LoadUser />*/}
        {/*<LoadDataWithHook />*/}
        {/*<TodoListWithReducer />*/}
        {/*<FormWithHook />*/}
        {/*<SimpleLoginForm />*/}
        {/*<MovieForm />*/}
        {/*<WhyRenderProp />*/}
        {/*<RenderPropDemo />*/}
        {/*<WhyHoc />*/}
        {/*<HocWithLoggeDemo />*/}
        {/*<WhyHocAuth />*/}
        {/*<AuthDemo />*/}
        {/*<ProtectedDemo />*/}
        {/*<RouterDemo />*/}

        {/*<WhyUseCallback />*/}
        {/*<MemoDemo />*/}
        {/*<PortalDemo />*/}
        {/*<TableDemo />*/}
        <DatagridDemo />
    </div>
  );
}
