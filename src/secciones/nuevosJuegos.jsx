export function CardJuego(props){
    return <a href={props.element.ref} className="cardJuego">
        <img src={props.element.img}/>
        <div>
            <h3>{props.element.titulo}</h3>
            <span>{props.element.precio}</span>
        </div>
    </a>
} 

export default function NuevosJuegos(props){
    return <section className="seccion-juegos">
        <h2>Nuevos<br/>Juegos</h2>
        <section className="juegos-grilla">
            {props.listaJue.map((item,index)=>{
                return <CardJuego key={index} element={item}></CardJuego> 
            })}
        </section>
        <a className="btVerMas" href="#">Ver Mas</a>
    </section>
}