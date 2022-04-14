import './Card.css'


function Card(props){
    const hello ='Card' + props.className ;
    return <div className={hello}> {props.children} </div>
}

export default Card;