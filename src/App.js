
import './App.css';
import PizzaMenu from './pizzaMenu';
import pol from './img/pol.png';

const pizzas = [{nr: 0, name: "Pizza pół na pół", img: {pol}, desc: "Wybierz 2 połówki pizzy w jednej i rozkoszuj się podwójnym smakiem. Cena pojawi się po skompletowaniu zamówienia. Wybierz rozmiar, kliknij w cenę i do dzieła!"},
                {nr: 1, name: "Margherita", img: "margherita.webp", desc: "ciasto, sos pomidorowy, ser, oregano"}
];

function App() {
  return (
    <div className="App">
      <PizzaMenu pizza={pizzas[0]}/>
      <PizzaMenu pizza={pizzas[1]}/>
    </div>
  );
}

export default App;
