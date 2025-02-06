const Products = ({ pro }) => {
    return (
        <div className="products" key={pro.id}>
            <img loading="lazy" src={pro.thumbnail} alt="" />
            <div className="title"> {pro.title}</div>

        </div>
    )
}

export default  Products