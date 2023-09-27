import { useState } from "react"


function PortadaSeccion(){
    return<div className="prod-container d-flex justify-content-center ">
    <div className=" prod-innercontainer col-6 d-flex justify-content-center align-items-center">
            <h1 className="prod-tituloPrincipal">Productos</h1>
    </div>
</div> 
}

function CardProd(props){
   const producto = props.element;

    return<div className="cards-separador">

        <div className="cards-inner">
            <div className="cards-img" style={{backgroundImage:`url(${producto.img})`}}>
                
                <div className="valores-producto">
                    <span className="precio-producto">{producto.precio}</span>
                    <span className="estado-producto">new</span>
                </div>
                
            </div>
            <div className="cards-info">
                <h4>{producto.titulo}</h4>
                <ul>
                    <li className="fav">G</li>
                    <li className="verdetalle">D</li>
                    <li className="tocarrito">C</li>
                </ul>
            </div>
        </div>
              
    </div>
    
}






function GrillaProd(props){
    
    const currentProducts=props.currentProducts;    

    return <div>             
        <div className="container-cards">    
            {currentProducts.map((item, index)=>{
            return <CardProd key={index} element={item}></CardProd>
            })}
        </div>
    </div>
}




function AsideProd(){
    return<div className="col-lg-3 bg-danger order-lg-1">
                    {/* Buscador */}
                    <aside>
                        <input type="text" placeholder="Buscar..." />
                    </aside>

                    {/* menu */}
                    <aside>
                        <div className="aside-title">
                            <h4>CATEGORIAS</h4>
                        </div>
                        <div className="aside-lista-categorias">
                            <ul>
                                <li>
                                    <span>Accesorios</span>
                                    <ul>
                                        <li>Gorro</li>
                                        <li>Abrigo</li>
                                        <li>Remera</li>
                                        <li>Calzado</li>
                                    </ul>
                                </li>

                                <li>
                                    <span>Adornos</span>
                                    <ul>
                                        <li>Cuadros</li>
                                        <li>Figuras</li>
                                        <li>Peluches</li>
                                        <li>Llaveros</li>
                                    </ul>
                                </li>

                                <li>
                                    <span>Videojuegos</span>
                                    <ul>
                                        <li>Aventura</li>
                                        <li>Peleas</li>
                                        <li>Carreras</li>
                                        <li>Puzzle</li>
                                        <li>Shooter</li>
                                        <li>Estrategia</li>
                                    </ul>
                                </li>
                            </ul>
                            
                        </div>
                    </aside>

                    {/* Precio */}
                    <aside>
                        <div><h4>PRECIO</h4></div>
                        <div><div></div></div>
                    </aside>

                    {/* Supuesta publicidad */}
                    <aside>
                        <img/>
                    </aside>
                    <aside>
                        <img/>
                    </aside>

                </div>
}

function MainProd(props){
    /////
    const [products, setProducts] = useState(props.listaProd);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    /* Solicitud al servidor 
    **************/
    
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    
    const maxNum= products.length / indexOfLastProduct;
    const maxPage= Math.ceil(maxNum);
    
    
    
    const nextPage = ()=>{
        if(currentPage<maxPage){
            setCurrentPage(currentPage + 1);
        }
    }
   
    
    const previousPage = ()=>{
        if(currentPage>1){
            setCurrentPage(currentPage -1);
        }
    }
   
    
    ////

    

    

    return <div >
    
    <PortadaSeccion></PortadaSeccion>

    <div className="prod-area">
        <div className="prod-area-container">
            <div className="row">
                
                <AsideProd></AsideProd>    
                <div className="col-lg-9 bg-danger order-lg-2">
                    
                    <div className="mt-auto btn-pagina">
                        <button onClick={previousPage}>Anterior</button>
                        <span>{currentPage}</span>
                        <button onClick={nextPage}>Siguiente</button>
                    </div>

                    <GrillaProd listaProd={props.listaProd} currentProducts={currentProducts}></GrillaProd>
                     
                </div>
                
                
            </div>   
             
        </div>
    </div>
    
</div>
}

export default function Productos(props){
    return <MainProd listaProd={props.listaProd}></MainProd>
}