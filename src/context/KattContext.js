/* Azt szeretnénk, hogy egyetlen helyen tudjuk kezelni a "globális változókat", azokat a változókat, ...
pl. - KATT függvényt, illetve a LISTÁT,
nem lesz szükség "buborékoltatásra" az adatok több komponensen való átadására

Provider tartalmazza az állapotot, adatokat itt módosítunk és ezt rendeli hozzá a context-hez
A provider az általa körbeölelt komponensek számára tudja átadni az adatokat

useState hook - itt modjuk az egyeskomponensekben, hogy melyik adatot akarjuk ott felhasználni */

import { createContext, useState } from "react";
export const KattContext= createContext("")
// létrehozunk egy provider-t ehhez a context-hez
export const KattProvider=({children})=>{
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

    return <KattContext.Provider value={{lista, katt}}>
        {children}
    </KattContext.Provider>
}