import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld, {Welcome} from "@/app/components/HelloWorld";
import SplitComponent from "@/app/components/SplitComponent";
import Profile from "@/app/components/Profile";
import Bordered from "@/app/components/Bordered";
import Dashboard from "@/app/components/conditional-render/Dashboard";
import ItemWithFlag from "@/app/components/conditional-render/ItemWithFlag";
import ItemList from "@/app/components/ItemList";
import UserList from "@/app/components/UserList";
import EventDemo from "@/app/components/interactivity/EventDemo";
import PropagationDemo from "@/app/components/PropagationDemo";
import Counter from "@/app/components/Couter";
import TimmerDemo from "@/app/components/TimmerDemo";
import BatchUpdateDemo from "@/app/components/BatchUpdateDemo";
import ItemListWithState from "@/app/components/ItemListWithState";
import ObjectUpdate from "@/app/components/ObjectUpdate";
import {FormData} from "next/dist/compiled/@edge-runtime/primitives";
import FormDemo from "@/app/components/Form/FormDemo";
import ReFormDemo from "@/app/components/Form/ReFormDemo";
import LoginForm from "@/app/components/Form/LoginForm";
import Tabs from "@/app/components/Tabs";
import ParentToChild from "@/app/components/ParentToChild";
import PosForm from "@/app/components/PosForm";
import FilterableProductTable from "@/app/components/FilterableProductTable";
import FilterableProduct from "@/app/components/FilterableProduct";
import DestroyComponent from "@/app/components/reconcilition/DestroyComponent";
import TodoList from "@/app/components/TodoList";
import CounterWithReducer from "@/app/components/reducer/CounterWithReducer";

export default function Home() {
  return (
    <div className={styles.page}>

        <h1 className={styles.head}>Hello React Js Day 3</h1>
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
        <TodoList />
        {/*<CounterWithReducer />*/}
    </div>
  );
}
