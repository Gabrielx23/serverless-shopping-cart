export const functions = {
    createProduct: {
        handler: 'src/handlers/createProduct.handler',
            events: [
            {
                http: {
                    method: 'post',
                    path: '/products',
                    cors: true
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
                    cors: true
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
                    cors: true
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
                    cors: true
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
                    cors: true
                }
            }
        ]
    }
};
