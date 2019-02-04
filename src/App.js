
import React from 'react';
import ReactDOM from 'react-dom'
import Card from './Card';
import List from './List';
import STORE from './store'

function App({store}) {
  const { lists, allCards} = store;
  
  console.log(lists)

  // const id = lists.cardIds.map((id) => allCards.find(function(element) {
  //   return element === id;
  // }));

  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes</h1>
      </header> 
      <div className="App-list">
  { lists.map((list, index) => {
    const cards = list.cardIds.map(function(id){
      return allCards[id]
    })
      return <List key = {index} header={list.header} cards={cards}/>
  })}
      </div>
    </main>
  );
}


export default App;

ReactDOM.render(<App store={STORE}/>, document.getElementById('root'));
