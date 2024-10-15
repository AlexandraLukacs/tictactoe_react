import logo from './logo.svg';
import './App.css';
import Jatekter from './components/Jatekter';
import { useState } from 'react';

function App() {
  //react state - leírja a program állapotát, ha a state-ben megadott 
  //változó értéke változik, akkor a react frissíti az oldal tartalmát 
  //azon a részen, amelyik a változótól függ
  // state-k létrehozásához useState hook-ot használunk - speciális függvény beállító függvény
  const [lista, setLista]=useState([" "," ","X","O"," "," ","X","O"," "])
  const [lepes, setLepes]=useState(0)
  function katt(adat){
    //itt akarjuk lekezelni, hogy melyik elemre kattintottink és mit írjunk a listába
    // state-ket közvetlenül nem módosíthatjuk, csak a beállító függvényen keresztül
    //1. csináluk egy másolatot az adatokról
    const slista=[...lista] // ne referenciát adjunk át, hanem másolatot készítsünk
    //2. a másolatot módosítjuk
    if (lepes % 2 == 0) {
      slista[adat]="X"
    }else{
      slista[adat]="O"
    }
    console.log(lepes)
    let sv=lepes
    sv++
    setLepes(sv)
    // setLepes(lepes+1) - három sor egyben 
    console.log(lepes)
    //3. másolatot értékül adjuk az eredtinek
    setLista([...slista])
    console.log(lista)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTacToe</h1>
      </header>
      <article>
        <Jatekter lista={lista} katt={katt} />
      </article>
      <footer>Lukács Alexandra</footer>
    </div>
  );
}

export default App;
