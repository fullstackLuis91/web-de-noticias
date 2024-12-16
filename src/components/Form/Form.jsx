import React, { useEffect, useState } from 'react';

const Form = () => {
  const initialValue = {
    name: "",
    title: "",
    body: ""
  };

  const [data, setData] = useState(initialValue);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const validateForm = () => {
    if (!data.name) {
      setMessage("Name is required.");
      setBtnDisabled(true);
      return;
    } else if (data.name.length < 3) {
      setMessage("Name must be at least 3 characters.");
      setBtnDisabled(true);
      return;
    }

    if (!data.title) {
      setMessage("Title is required.");
      setBtnDisabled(true);
      return;
    } else if (data.title.length < 5) {
      setMessage("Title must be at least 5 characters.");
      setBtnDisabled(true);
      return;
    }

    if (!data.body) {
      setMessage("Body is required.");
      setBtnDisabled(true);
      return;
    } else if (data.body.length < 8) {
      setMessage("Body must be at least 8 characters.");
      setBtnDisabled(true);
      return;
    }

    setMessage("");
    setBtnDisabled(false);
  };

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData(initialValue);
    setMessage("Form submitted successfully!");
    setBtnDisabled(true);
  };

  useEffect(() => {
    validateForm();
  }, [data]);

  return (
    <div>
      <h1>Form</h1>
      <form>
        <input
          type="text"
          name="name"
          value={data.name}
          placeholder="Introduce your name"
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="title"
          value={data.title}
          placeholder="Introduce the title of the news"
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="body"
          value={data.body}
          placeholder="Write the body of the news"
          onChange={handleOnChange}
        />
        <button onClick={handleSubmit} disabled={btnDisabled}>
          Send
        </button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default Form;
