function ProductList() {
    const products = [
        { id: 1, name: "phone", price: "$699" },
        { id: 2, name: "laptop", price: "$12000" },
        { id: 3, name: "headphones", price: "$199" },
    ];

    return (
        <ol>
            {products.map(({ id, name, price }) => (
                <li>
                    <div id={id} style={{ display: "flex", gap: "8px" }}>
                        <h3>Item:{name}</h3>
                        <h5>{price}</h5>
                    </div>
                </li>
            ))}
        </ol>
    );
}

export default ProductList;
