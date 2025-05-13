import { useState } from "react";

function Form() {
  const [status, setStatus] = useState<string>("");
  return (
    <>
      <label htmlFor="username-input">Username</label>
      <input id="username-input" />
      <button
        onClick={() => {
          const username = (
            document.getElementById("username-input") as HTMLInputElement
          ).value;
          if (!username) {
            setStatus("用户名不能为空");
            return;
          }
          setStatus("提交成功");
        }}
      >
        提交
      </button>
      <span>{status}</span>
    </>
  );
}

export default Form;
