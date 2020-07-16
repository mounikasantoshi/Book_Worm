import React from 'react';
import SearchBookForm from '../forms/SearchBookForm';
import { Segment } from 'semantic-ui-react';
import BookForm from '../forms/BookForm';

class NewBookPage extends React.Component {
  state = {
    book: null,
  };

  onBookSelect = (book) => this.setState({ book });

  addBook = () => console.log('hi');

  render() {
    return (
      <Segment>
        <h1>Add new book to your college</h1>
        <SearchBookForm onBookSelect={this.onBookSelect} />

        {this.state.book && (
          <BookForm submit={this.addBook} book={this.state.book} />
        )}
      </Segment>
    );
  }
}

export default NewBookPage;
