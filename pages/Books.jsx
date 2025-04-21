import React from 'react';
import Book from '../components/ui/Book'
import { books } from '../data';



export default function Books() {
  return (
    <div id="books__body">
          <main className="books__main">
            <section>
                <div className="books__container">
                    <div className="row">
                        <div className="books__header">
                             <h2 className="section__title books__header--title">
                                All Books</h2> 
                                <select id="filter" defaultValue="DEFAULT">
                                <option value="DEFAULT" disabled>Sort</option>
                                <option value="LOW-TO-HIGH">Price, Low to High</option>
                                <option value="HIGH-TO-LOW">Price, High to Low</option>
                                <option value="RATING">Rating</option>
                                </select>
                        </div>
                        <div className="books">
                           {
                             books.map((book) => (
                             <Book book={book}
                                key={book.id} /> 
                            ))}
                        </div>
                    </div>
                </div>
            </section>
          </main>
      
    </div>
  )
}
