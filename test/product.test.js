import Product from "../src/model/Product"
import sellProduct from "../src/service/sellProduct"

test("deve validar baixa de estoque na venda de uma unidade", () => {
    let produto = new Product("xiaomi redmi note 7", 500.00, 900.00, 10)
    sellProduct(produto, 1)
    expect(produto.stock).toBe(9)
})

test("deve aceitar a venda de mais do que um unidade", () => {
    let produto = new Product("xiaomi redmi note 7", 500.00, 900.00, 10)
    sellProduct(produto, 3)
    expect(produto.stock).toBe(7)
})