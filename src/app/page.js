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

export default function Home() {
  return (
    <div className={styles.page}>

        <h1>Hello React Js Day 2</h1>
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
        <ObjectUpdate />
    </div>
  );
}
