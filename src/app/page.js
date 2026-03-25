import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld, {Welcome} from "@/app/components/HelloWorld";
import SplitComponent from "@/app/components/SplitComponent";
import Profile from "@/app/components/Profile";
import Bordered from "@/app/components/Bordered";
import Dashboard from "@/app/components/conditional-render/Dashboard";
import ItemWithFlag from "@/app/components/conditional-render/ItemWithFlag";
import ItemList from "@/app/components/ItemList";

export default function Home() {
  return (
    <div className={styles.page}>

        <h1>Hello React Js Day 1</h1>
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

        <ItemList />
    </div>
  );
}
