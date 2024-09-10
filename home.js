// Lista de productos con su stock inicial
const products = [
    { id: 'limpiaparabrisas', stock: 20 },
    { id: 'vidrios', stock: 10 },
    { id: 'llantas', stock: 15 },
    { id: 'timon', stock: 8 },
    { id: 'baterias', stock: 5 },
    { id: 'frenos', stock: 6 }
];

// Función para manejar las compras
products.forEach(product => {
    const buyBtn = document.getElementById(`buy-btn-${product.id}`);
    const cancelBtn = document.getElementById(`cancel-btn-${product.id}`);
    const quantityInput = document.getElementById(`quantity-${product.id}`);
    const stockElement = document.getElementById(`stock-${product.id}`).querySelector('span');

    buyBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);

        if (quantity <= product.stock && quantity > 0) {
            product.stock -= quantity;  // Reducir el stock
            stockElement.textContent = product.stock;  // Actualizar el stock en la página
            alert(`Has comprado ${quantity} ${product.id}.`);
        } else {
            alert('Cantidad no disponible en stock.');
        }
    });

    cancelBtn.addEventListener('click', () => {
        quantityInput.value = 1;
    });
});