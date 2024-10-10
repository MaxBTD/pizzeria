import './pizzaMenu.css';
import pol from './img/pol.png';
import marg from './img/margherita.webp';
import capr from './img/capriciosa.webp';
import parm from './img/parma.webp';
import camp from './img/campione.webp';
import decr from './img/decoro.webp';
import {useState} from 'react';



function PizzaMenu(props){
    const [finalPrice, setFinalPrice] = useState(0);
    const imagePick = () =>{
        switch(props.pizza.nr){
            case 0:
                return(<img src={pol}/>);
            case 1:
                return(<img src={marg}/>);
            case 2:
                return(<img src={capr}/>);
            case 3:
                return(<img src={parm}/>);
            case 4:
                return(<img src={camp}/>);
            case 5:
                return(<img src={decr}/>);
            default:
                return(<img src={pol}/>);
        }
    }
    return(
        <div id="pizzaCell">
            <div id="pizzaImg">
                {imagePick()}
            </div>
            <div id="pizzaDesc">
                <h3>{(props.pizza.nr > 0) ? props.pizza.nr+".": ""} {props.pizza.name}</h3>
                <p>{props.pizza.desc}</p>
                <div id="buyButton"><button onclick ={ () => {setFinalPrice({finalPrice}+props.pizza.price)}}/><p>+{props.pizza.price}.00 zł {finalPrice}</p></div>
            </div>
        </div>    
    );
}

export default PizzaMenu;