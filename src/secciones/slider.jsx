import Swiper,{Pagination,Autoplay} from 'swiper';

  



window.onload = function() {
    const mySwiper=new Swiper(".swiper",{
        loop: true,
    autoplay:{
        delay:1000,
        disableOnInteraction: false, // Desactiva la transición automática si el usuario interactúa con el swiper
        
    },
    
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    modules:[Pagination,Autoplay]
    });


}



function SectionSlider(props){//sectionSlider
    return <section className="swiper-slide sectionSlider">
        <img src={props.element.imgSlider} alt="" title="" className="pop-img"></img>
        <div className="textSlider">
            <p className="slider-top">#{props.element.top} TOP POPULAR</p>
            <h1 className="slider-titulo">{props.element.nombreSlider}</h1>
            <p className="slider-frase">{props.element.fraseSlider}</p>
            <p className="slider-sinopsis">{props.element.sinopsisSlider}</p>
            <div className="botonera">
                <a href="#" className="slider-botonizq">Página oficial</a>
                <a href="#" className="slider-botonder">Comprar ahora</a>
            </div>
        </div>
    </section>
}







function Slider(props){//slider
    return <section className="swiper slider">
        <div className="swiper-wrapper">
            {props.lista.map((item,index)=>{
                return <SectionSlider key={index} element={item}></SectionSlider>
        })}
        </div>
        <div className="swiper-pagination"></div>
   </section>
}




export default Slider;