import React, { useRef, useState } from "react";

import Book from "../components/book";
import { get } from "../utils/dataAccess";

function App() {
  const baseUrl = "http://openlibrary.org/search.json";
  const [books, setBooks] = useState<Array<any>>();
  const [error, setError] = useState("");
  const [prevQuery, setPrevQuery] = useState("");
  const [query, setQuery] = useState("");
  const input = useRef(null);

  const onBlur = () => {
    if (query !== prevQuery) {
      fetchBooks();
    }
  };

  const fetchBooks = async () => {
    setPrevQuery(query);
    console.log("fetching books!");
    setBooks([]);
    await get(`${baseUrl}?q=${query}`)
      .then((data) => {
        if (data.docs.length > 0) {
          setBooks(data.docs);
          console.log(data.docs);
          setError("");
        } else {
          setError("No books found");
        }
      })
      .catch((error) => {
        setError("Something went wrong");
      });
  };

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: any) => {
    setBooks([]);
    e.preventDefault();
    //@ts-ignore
    input.current.blur();
    if (query) {
      fetchBooks();
    } else {
      setError("Input cannot be empty");
    }
  };

  return (
    <main className="o-container c-app">
      <header>
        <h1>What kind of book do you like?</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label className="c-searchbox-holder" htmlFor="query">
          <svg
            className="c-searchbox__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            placeholder={"search"}
            ref={input}
            className="c-searchbox"
            type="search"
            name="query"
            id="query"
            value={query}
            onChange={handleTextInput}
            autoComplete="off"
            onBlur={onBlur}
          />
        </label>
      </form>

      <div className="c-book-container">
        {books &&
          books.map(({ first_publish_year, isbn, title, author_name }) => (
            <Book
              title={title}
              author={author_name}
              isbn={isbn}
              publishYear={first_publish_year}
            />
          ))}
      </div>
      {error && <p>{error}</p>}
    </main>
  );
}

export default App;
