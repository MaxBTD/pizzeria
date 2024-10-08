
import './App.css';
import PizzaMenu from './pizzaMenu';

const pizzas = [{nr: 0, name: "Pizza pół na pół", desc: "Wybierz 2 połówki pizzy w jednej i rozkoszuj się podwójnym smakiem. Cena pojawi się po skompletowaniu zamówienia. Wybierz rozmiar, kliknij w cenę i do dzieła!"},
                {nr: 1, name: "Margherita", desc: "ciasto, sos pomidorowy, ser, oregano"},
                {nr: 2, name: "Capriciosa", desc: "ciasto, sos pomidorowy, ser, szynka, pieczarki, oregano"},
                {nr: 3, name: "Parma", desc: "ciasto, sos pomidorowy, ser mozzarella, szynka dojrzewająca, bazylia świeża, oregano"},
                {nr: 4, name: "Campione", desc: "ciasto, sos pomidorowy, ser, szynka, kabanosy, boczek wędzony, salami, oregano"},
                {nr: 5, name: "Decoro", desc: "ciasto, sos pomidorowy, ser, szynka, pieczarki, papryka konserwowa, czosnek, oregano"}
];

function App() {
  return (
    <div id="App">
        <div id="header">
          <h1>MAMA MIA PIZZA PIE</h1>
        </div>

        <div id="pizzas">
          <PizzaMenu pizza={pizzas[0]}/>
          <PizzaMenu pizza={pizzas[1]}/>
        </div>
        <div>
          <PizzaMenu pizza={pizzas[2]}/>
          <PizzaMenu pizza={pizzas[3]}/>
        </div>
        <div>
          <PizzaMenu pizza={pizzas[4]}/>
          <PizzaMenu pizza={pizzas[5]}/>
        </div>
    </div>
  );
}

export default App;
