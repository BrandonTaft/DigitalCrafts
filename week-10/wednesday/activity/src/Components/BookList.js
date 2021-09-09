import { Component } from "react";


class BookList extends Component {

    render() {

        const bookItems = this.props.books.map((book, index) => {
            return <li key = {index}>{book.title}</li>
        })


        return (
            <ul>
                {bookItems}
            </ul>
        )
    }

}

export default BookList 