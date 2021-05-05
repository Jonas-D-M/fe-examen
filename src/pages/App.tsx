import React, { useEffect, useState } from "react";

import data from "../data/tintin-example.json";
import { IBook } from "../types/books";
import { get } from "../utils/dataAccess";

function App() {
  const baseUrl = "http://openlibrary.org/search.json";
  const [books, setBooks] = useState<any>();
  const [query, setQuery] = useState("tintin");

  useEffect(() => {
    // fetch data here
    (async function () {
      await get(`${baseUrl}?q=${query}`)
        .then((data) => {
          setBooks(data);
        })
        .catch((error) => {
          console.error(error);
        });
    })();
  }, [query]);

  return (
    <>
      <header>
        <h1>What kind of book do you like?</h1>
      </header>
    </>
  );
}

export default App;
