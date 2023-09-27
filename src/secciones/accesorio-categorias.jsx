export function Card(props){
    return <a href={props.element.ref} className={"card shake-vertical"}>
        <img src={props.element.img}/>
        <h3>{props.element.titulo}</h3>
        <p>{props.element.desc}</p>
    </a>
} 

export default function AccesorioCategorias(props){
    return <section className="seccion-acc">
        <h2>Accesorios<br/>Categorias</h2>
        <section className="accCat">

            {props.listaAcc.map((item,index)=>{
                return <Card key={index} element={item}></Card>
            })}
        </section>
        <a className="btVerMas" href="#">Ver Mas</a>
    </section>
}