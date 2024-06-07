import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../style/addissue.css";

function AddIssue() {
  const [name, setName] = useState("");
  const [name_ar, setNameAr] = useState("");
  const [title, setTitle] = useState("");
  const [title_ar, setTitleAr] = useState("");
  const [description, setDescription] = useState("");
  const [description_ar, setDescriptionAr] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState('');
  const [errorMessage0, setErrorMessage0] = useState('');
  const [errorMessage1, setErrorMessage1] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const [errorMessage3, setErrorMessage3] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://gradhub.hwnix.com/api/create_Fullissue", {
        name,
        name_ar,
        title,
        title_ar,
        description,
        description_ar
      })
      .then((res) => {
        console.log(res);
        navigate("/commonIssues");
      })
      .catch((err) => console.log(err));
  }

  const handleLanguage2 = (e) => {
    const newValue = e.target.value;

    // Regular expression to detect Arabic characters
    const arabicRegex = /[\u0600-\u06FF]/;

    if (arabicRegex.test(newValue)) {
      setErrorMessage1('Please write Name in English.');
    } else {
      setErrorMessage1('');
      setName(newValue);
    }
  }

  const handleNameChangeNA = (e) => {
    const newValue2 = e.target.value;

    // Regular expression to detect English characters
    const englishRegex = /[A-Za-z]/;

    if (englishRegex.test(newValue2)) {
      setErrorMessage0('Please write Name in Arabic.');
    } else {
      setErrorMessage0('');
      setNameAr(newValue2);
    }
  };

  const handleLanguage = (e) => {
    const newValue = e.target.value;

    // Regular expression to detect Arabic characters
    const arabicRegex = /[\u0600-\u06FF]/;

    if (arabicRegex.test(newValue)) {
      setErrorMessage('Please write title in English.');
    } else {
      setErrorMessage('');
      setTitle(newValue);
    }
  }

  const handleDescriptionChange = (e) => {
    const value = e.target.value;

    // Regular expression to detect Arabic characters
    const arabicRegex = /[\u0600-\u06FF]/;

    if (arabicRegex.test(value)) {
      setError('Please write Description in English.');
    } else {
      setError('');
      setDescription(value);
    }
  }

  const handleTitleChangeA = (e) => {
    const newValue2 = e.target.value;

    // Regular expression to detect English characters
    const englishRegex = /[A-Za-z]/;

    if (englishRegex.test(newValue2)) {
      setErrorMessage2('Please write title in Arabic.');
    } else {
      setErrorMessage2('');
      setTitleAr(newValue2);
    }
  };

  const handleDescriptionChangeA = (e) => {
    const newValue3 = e.target.value;

    // Regular expression to detect English characters
    const englishRegex = /[A-Za-z]/;

    if (englishRegex.test(newValue3)) {
      setErrorMessage3('Please write Description in Arabic.');
    } else {
      setErrorMessage3('');
      setDescriptionAr(newValue3);
    }
  };

  return (
    <div className="pfott">
      <div className="d">
        <div className='main-divppissue'>
          <form className="form-issue" onSubmit={handleSubmit}>
            <label htmlFor="name" className="label-pregnancy">
              Name
            </label>
            <input
              className="outbox"
              value={name}
              onChange={handleLanguage2}
              required
            />
            {errorMessage1 && <p style={{ color: 'red' }}>{errorMessage1}</p>}

            <label htmlFor="name_ar" className="label-pregnancy">Name In Arabic</label>
            <input
              className="outbox"
              value={name_ar}
              onChange={handleNameChangeNA}
              required
            />
            {errorMessage0 && <p style={{ color: 'red' }}>{errorMessage0}</p>}

            <label htmlFor="title" className="label-pregnancy">
              Title
            </label>
            <input
              className="outbox"
              value={title}
              onChange={handleLanguage}
              required
            />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <label htmlFor="title_ar" className="label-pregnancy">
              Title In Arabic
            </label>
            <input
              className="outbox"
              value={title_ar}
              onChange={handleTitleChangeA}
              required
            />
            {errorMessage2 && <p style={{ color: 'red' }}>{errorMessage2}</p>}

            <label htmlFor="description" className="label-pregnancy">
              Description
            </label>
            <input
              className="outbox"
              value={description}
              onChange={handleDescriptionChange}
              required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <label htmlFor="description_ar" className="label-pregnancy">
              Description In Arabic
            </label>
            <input
              className="outbox"
              value={description_ar}
              onChange={handleDescriptionChangeA}
              required
            />
            {errorMessage3 && <p style={{ color: 'red' }}>{errorMessage3}</p>}

            <button type="submit" className="b-issue">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddIssue;