import './pizzaMenu.css';
import pol from './img/pol.png';


function PizzaMenu(props){
    return(
        <div classname="pizzaCell">
            <img src={props.pizza.img}/>
            <div>
                <h3>{props.pizza.name}</h3>
                <p>{props.pizza.desc}</p>
            </div>
        </div>    
    );
}

export default PizzaMenu;