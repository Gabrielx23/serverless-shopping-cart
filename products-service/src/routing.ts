export const functions = {
    createProduct: {
        handler: 'src/handlers/createProduct.handler',
            events: [
            {
                http: {
                    method: 'post',
                    path: '/products',
                }
            }
        ]
    },
    getAll: {
        handler: 'src/handlers/getProducts.handler',
            events: [
            {
                http: {
                    method: 'get',
                    path: '/products',
                }
            }
        ]
    },
    getOne: {
        handler: 'src/handlers/getProduct.handler',
            events: [
            {
                http: {
                    method: 'get',
                    path: '/products/{id}',
                }
            }
        ]
    },
    update: {
        handler: 'src/handlers/updateProduct.handler',
            events: [
            {
                http: {
                    method: 'put',
                    path: '/products/{id}',
                }
            }
        ]
    },
    delete: {
        handler: 'src/handlers/deleteProduct.handler',
            events: [
            {
                http: {
                    method: 'delete',
                    path: '/products/{id}',
                }
            }
        ]
    }
};
