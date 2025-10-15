fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        data.forEach(product => {
            const card = `
            <div class="col-md-4 col-lg-3">
              <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                  <h6 class="card-title">${product.title}...</h6>
                  <p class="text-success fw-bold">$${product.price}</p>
                  <p class="text-muted small">${product.category}</p>
                  <button class="btn btn-primary btn-sm">View Details</button>
                </div>
              </div>
            </div>
          `;
            productList.innerHTML += card;
        });
    })
    .catch(error => console.error('Error fetching data:', error));