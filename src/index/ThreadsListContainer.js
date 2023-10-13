import { useEffect, useState } from "react";
import ThreadItem from "./ThreadItem";

function ThreadsListContainer() {
  const [threadsList, setThreadsList] = useState([]);

  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetch error");
        }
        return response.json();
      })
      .then((data) => {
        setThreadsList(data);
      });
  }, []);

  const threadItems = threadsList.map((item) => (
    <ThreadItem title={item.title} id={item.id} />
  ));

  return (
    <div className="container">
      <h1>新着スレッド</h1>
      {threadItems}
    </div>
  );
}

export default ThreadsListContainer;
