import React, { FunctionComponent } from "react";

interface BookProps {
  title: string;
  isbn: Array<string>;
  author: string;
  publishYear: number;
}

const Book: FunctionComponent<BookProps> = ({
  title,
  isbn,
  author,
  publishYear,
}) => {
  return (
    <div className="c-book">
      <div className="c-book-cover">
        <title className="c-book-cover__title">{title}</title>
        {isbn && <p className="c-book-cover__isbn">{isbn[0]}</p>}
      </div>
      <title className="c-book-title">{title}</title>
      <div className="c-book-attribution">
        <p>
          {author} - {publishYear}
        </p>
      </div>
    </div>
  );
};

export default Book;
