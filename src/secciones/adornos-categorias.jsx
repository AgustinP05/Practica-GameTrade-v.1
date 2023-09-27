import {Card} from "./accesorio-categorias";

export default function AdornosCategorias(props){
    return <section className="seccion-acc">
        <h2>Adornos<br/>Categorias</h2>
        <section className="accCat">
        {props.listaAdo.map((item,index)=>{
                return <Card key={index} element={item}></Card>
            })}
        </section>
        <a className="btVerMas" href="#">Ver Mas</a>
    </section>
}