// Exercício 1: Crie um componente React chamado Product que exiba um formulário para cadastro
// de produtos com campos de nome, preço, categoria (select) e descrição; valide que todos os
// campos estejam preenchidos e que o preço seja maior que zero (exibindo erro em vermelho se
// falhar); armazene cada produto num array no estado (incluindo id único, nome, preço
// formatado, categoria e descrição); mostre-os em uma lista filtrável por categoria ("Todos" ou
// cada categoria) e permita remover individualmente cada item.

import { useState } from "react";


function ProductForm () {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productCategory, setProductCategory] = useState('Eletrônicos');
    const [productDescription, setProductDescription] = useState('');

    const [products, setProducts] = useState([])
    const [error, setError] = useState('')

    const [categoryFilter, setCategoryFilter] = useState('Todos')

    const handleNameChange = (event) => setProductName(event.target.value)
    const handlePriceChange = (event) => setProductPrice(event.target.value)
    const handleCategoryChange = (event) => setProductCategory(event.target.value)
    const handleDescriptionChange = (event) => setProductDescription(event.target.value) 

    const handleAddProduct = (event) => {
        event.preventDefault()

        if(!productName || !productPrice || !productDescription) {
            setError('Por favor, preencha todos os campos!')
            return
        }

        if(isNaN(productPrice) || Number(productPrice) <= 0) {
            setError('O preço deve ser positivo')
            return
        }

        setError('')

        const newProduct = {
            id: Date.now(),
            productName: productName,
            productPrice: parseFloat(productPrice).toFixed(2),
            productCategory: productCategory,
            productDescription: productDescription
        }
        setProducts([...products, newProduct] )

        setProductName('')
        setProductPrice('')
        setProductDescription('')
    }

    const handleRemoveProduct = (id) => {
        setProducts(products.filter(
            (product) => product.id !== id))
    }

    const filteredProducts = products.filter(
        (product) => categoryFilter === 'Todos' || 
    product.productCategory === categoryFilter)

    return (
        <div>
            <h1>Cadastro de Produto</h1>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleAddProduct}>
                <label>
                    Name:
                    <input type="text" value={productName} onChange={handleNameChange}></input>
                </label>
                <br/>
                <label>
                    Price:
                    <input type="text" value={productPrice} onChange={handlePriceChange}></input>
                </label>
                <br/>
                <label>
                    Category:
                    <select value={productCategory} onChange={handleCategoryChange}>
                        <option value="Eletrônicos">Eletrônicos</option>
                        <option value="Esporte">Esporte</option>
                        <option value="Brinquedos">Brinquedos</option>
                    </select>
                </label>
                <br/>
                <label>
                    Description:
                    <input type="text" value={productDescription} onChange={handleDescriptionChange}></input>
                </label>
                <br/>

                <button type="submit">Add Product</button>
            </form>

            <label>
                Filtrar por categoria:
                <select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}>
                    <option value="Todos">Todos</option>
                    <option value="Eletrônicos">Eletrônicos</option>
                    <option value="Esporte">Esporte</option>
                    <option value="Brinquedos">Brinquedos</option>
                </select>
            </label>

            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <strong>
                            {product.productName}
                        </strong> - 
                        ${product.productPrice} - {product.productCategory}
                        <p>{product.productDescription}</p>
                        <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductForm