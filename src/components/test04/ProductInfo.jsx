class Product {
    constructor(item, price, availability) {
        this.item = item;
        this.price = price;
        this.availability = availability;
    }
}

const product01 = new Product("Laptop", 1200, "in stock");

function ProductInfo() {
    return (
        <>
            <div>
                <h4>
                    Name:{product01.item}, Price:${product01.price},
                    Availability:{product01.availability}
                </h4>
            </div>
        </>
    );
}

export default ProductInfo;
