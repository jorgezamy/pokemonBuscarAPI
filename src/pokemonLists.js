export default function lista(props) {

    return (
        <div class="container">
            <div className="row">
             <div className="col">Pokemon Name: </div>
             <div className="col">{props.nombre}</div>
            </div>
        </div>
    )

}