
import Casita from './Casita.png';
import TablaGestorProducto from "../components/TablaGestorProducto";



const GestorProductos= () =>{
    return (
        <div class="container">
            <div class="row">
                <div class="col">
            <h3 align="left" >Seleccione el producto a gestionar</h3>
            <img src={Casita} width="500" height="600" alt="Casita" align="left"></img>
                </div>
            
                <div class="col" >
            <TablaGestorProducto />
                </div>

            
            </div>
        </div>

    );
}





export default GestorProductos;

