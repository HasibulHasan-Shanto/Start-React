const ProductTable = ({ products }) => {
    console.log(products);
    return (
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>

            <tbody>
                {
                    products.map((product, index) => <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                    </tr>)
                }
            </tbody>
        </table>
    );
};

export default ProductTable;