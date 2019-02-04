
import React from 'react';
import ReactDOM from 'react-dom'
import Card from './Card';
import List from './List';
import STORE from './store'

function App(props) {
  const { lists, allCards} = props;
  
  console.log(lists)

  const id = lists.cardIds.map((id) => allCards.find(function(element) {
    return element === id;
  }));

  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes</h1>
      </header> 
      <div className="App-list">
  { lists.map((list) => <List header={list.header} cards={id} />) }
      </div>
    </main>
  );
}


export default App;

ReactDOM.render(<App props={STORE}/>, document.getElementById('root'));
