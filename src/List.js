
import React from 'react';

function List(props) {
  return (
    <section className="list">
      <header className="List-header">
        {props.header}
      </header>

      <div className="List-cards">
        {props.cards}
      </div>
    </section>
  )
}

export default List;
