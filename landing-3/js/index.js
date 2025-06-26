let data = [];

window.addEventListener('load', async () => {
    console.log('iniciando');
    const dataFetch = await fetch('https://fakestoreapi.com/products');
    data = await dataFetch.json();

    const productList = document.getElementById('product-list');
    if (productList) {
        // buscar y agregar producto al carrito almacenado en local storage
        const getCarritoLocal = localStorage.getItem('carrito');
        if (getCarritoLocal) {
            agregarProductoAlCarrito(getCarritoLocal);
        }
        // Crear tarjetas de productos
        data.forEach(product => {
            const col = document.createElement("div");
            col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";
            col.innerHTML = getCardProduct(product);
            productList.appendChild(col);
        });
    }
});

const getCardProduct = (product) => {
    return `
                <div class="card h-100 shadow-sm">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text fw-bold">$${product.price.toFixed(2)}</p>
                        <button class="btn btn-primary mt-auto btn-agregar-producto" data-id-product="${product.id}" id="btn-agregar-producto"><i class="bi bi-cart3"></i>Agregar al carrito</button>
                    </div>
                </div>
            `;
}

const crearProductoEnCarrito = (product) => {
    return `
        <div class="d-flex align-items-center mb-3">
            <img src="${product.image}" width="60" class="rounded me-2" alt="Producto 1">
            <div class="flex-grow-1">
                <div class="fw-semibold">${product.title}</div>
                <div class="text-muted">$${product.price.toFixed(2)}</div>
            </div>
            <button class="btn btn-sm btn-outline-danger">
                <i class="bi bi-x"></i>
            </button>
        </div>
    `
}

setTimeout(function() {
    const btnAgregarAlCarritoElements = document.querySelectorAll('.btn-agregar-producto');
    btnAgregarAlCarritoElements.forEach(btnAgregarAlCarritoElement => {
        btnAgregarAlCarritoElement.addEventListener('click', () => {
        const idProducto = btnAgregarAlCarritoElement.getAttribute('data-id-product');
        if (idProducto) {
            agregarProductoAlCarrito(idProducto);
            localStorage.setItem('carrito', idProducto);
        }
    })
})
}, 2000)

const agregarProductoAlCarrito = (idProducto) => {
    console.log(' idProducto ', idProducto, data);
    const findProduct = data.find(product => product.id == idProducto)
    const containerCarrito = document.querySelector('.cart-items');
    if (containerCarrito) {
        const itemCarrito = document.createElement('div');
        itemCarrito.innerHTML = crearProductoEnCarrito(findProduct)
        containerCarrito.appendChild(itemCarrito);
        // sumar el contador de carrito
        const countCartElement = document.getElementById('countProductCart');
        countCartElement.innerText = Number(countCartElement.innerHTML) + 1;
    }
}
