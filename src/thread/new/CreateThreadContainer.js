import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateThreadContainer() {
  const [threadTitle, setThreadTitle] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();

  function handleClickSubmitButton(event) {
    event.preventDefault(); //デフォルトのリロードが走らないように
    if (isFetching) {
      // 連打しているので2回目のリクエストを無視する
      return;
    }
    setIsFetching(true);
    if (threadTitle === "") {
      alert("スレッドタイトルを入力してください");
      setIsFetching(false);
      return;
    }
    const body = { title: threadTitle };

    fetch("https://railway.bulletinboard.techtrain.dev/threads", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => {
        setIsFetching(false);
        if (!response.ok) {
          throw new Error(response);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/");
      });
  }

  return (
    <div className="container">
      <h1>スレッド新規作成</h1>
      <form onSubmit={handleClickSubmitButton}>
        <input
        name="thread-title"
        type="text"
        className="thread-title-input"
        required={true}
        placeholder="スレッドタイトル"
        value={threadTitle}
        onChange={(event) => setThreadTitle(event.target.value)}
      ></input>
      <div className="action-buttons">
        <Link to={"/"}>Topに戻る</Link>
        <button type="submit">作成</button>
      </div>
      </form>
    </div>
  );
}

export default CreateThreadContainer;
