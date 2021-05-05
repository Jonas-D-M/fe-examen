// json2ts.com...

interface Availability {
  status: string;
  error_message: string;
  openlibrary_work: string;
  isbn: string;
  num_waitlist: string;
  last_loan_date?: Date;
  openlibrary_edition: string;
  oclc?: any;
  collection: string;
  last_waitlist_date?: Date;
  identifier: string;
}

interface Doc {
  title_suggest: string;
  edition_key: string[];
  cover_i: number;
  isbn: string[];
  has_fulltext: boolean;
  text: string[];
  author_name: string[];
  contributor: string[];
  seed: string[];
  oclc: string[];
  ia: string[];
  author_key: string[];
  availability: Availability;
  subject: string[];
  title: string;
  ia_collection_s: string;
  printdisabled_s: string;
  type: string;
  ebook_count_i: number;
  publish_place: string[];
  id_librarything: string[];
  edition_count: number;
  key: string;
  id_goodreads: string[];
  public_scan_b: boolean;
  publisher: string[];
  language: string[];
  lccn: string[];
  last_modified_i: number;
  first_publish_year: number;
  author_alternative_name: string[];
  cover_edition_key: string;
  first_sentence: string[];
  person: string[];
  publish_year: number[];
  publish_date: string[];
  place: string[];
  time: string[];
  lending_identifier_s: string;
  ia_box_id: string[];
  lending_edition_s: string;
  id_amazon: string[];
  ia_loaded_id: string[];
  id_overdrive: string[];
  subtitle: string;
}

export interface IBook {
  start: number;
  num_found: number;
  numFound: number;
  docs: Doc[];
}
