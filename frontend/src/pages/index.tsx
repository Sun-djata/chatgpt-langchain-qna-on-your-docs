import { Conversation } from "@/components/Conversation";
import { Topics } from "@/components/Topics";
import { useState } from "react";
import styles from './index.module.css'
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  return (
    <div>

      <Navbar />

      <div className={styles.container}>

        <div className={styles.contentContainer}>
          {/* <Botmenu /> */}
          <div className={styles.topicContainer}>
            <Topics updateSelectedTopic={(topic) => setSelectedTopic(topic)} />
          </div>
          <div className={styles.conversationsContainer}>
            <Conversation selectedTopic={selectedTopic} />
          </div>
        </div>
      </div>
      {/* <SendMessage /> */}
    </div>
  );
}
