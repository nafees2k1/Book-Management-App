import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
    const { books } = useBooksContext();

    const renderedBooks = books.map((book) => {
        return (
            <BookShow key={book.id} book={book} />
        )
    });

    return (
        <div className="book_list">
            {renderedBooks}
        </div>
    )
};

export default BookList;