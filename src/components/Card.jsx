import "../styles/Card.css"

export default function Card({item}){
    return(
        <div className="item-card">
            <img src={item.image} alt={item.title} className="card-image" />
            <p className="card-title">{item.title}</p>
            <div className="category-price">
                <div className="category">{item.category}</div>
                <div className="card-price">{item.price}$</div>
            </div>
           
        </div>
    )
}