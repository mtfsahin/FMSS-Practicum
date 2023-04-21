import { useParams } from "react-router-dom"
import { getBook } from "./data"

export default function Details() {
    let params = useParams()
    let book = getBook(parseInt(params.bookId))
    return (
        <div className="flex flex-col text-center bg-yellow-700 text-white mt-3 p-2">
            <h1>Book Name : {book.name}</h1>
            <p>Book Id: {book.number}</p>
            <p>Book description: {book.description}</p>


        </div>
    )
}