import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateThreadContainer() {
  const [threadTitle, setThreadTitle] = useState("");
  const navigate = useNavigate();

  function handleClickSubmitButton() {
    if (threadTitle === "") {
      return;
    }
    const body = { title: threadTitle };

    fetch("https://railway.bulletinboard.techtrain.dev/threads", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => {
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
        <button onClick={handleClickSubmitButton}>作成</button>
      </div>
    </div>
  );
}

export default CreateThreadContainer;
