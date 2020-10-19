export const functions = {
    createCart: {
        handler: 'src/handlers/createCart.handler',
            events: [
            {
                http: {
                    method: 'post',
                    path: '/carts',
                    cors: true
                }
            }
        ]
    },
    getAll: {
        handler: 'src/handlers/getCarts.handler',
            events: [
            {
                http: {
                    method: 'get',
                    path: '/carts',
                    cors: true
                }
            }
        ]
    },
    getOne: {
        handler: 'src/handlers/getCart.handler',
            events: [
            {
                http: {
                    method: 'get',
                    path: '/carts/{id}',
                    cors: true
                }
            }
        ]
    },
    clearCart: {
        handler: 'src/handlers/clearCart.handler',
        events: [
            {
                http: {
                    method: 'put',
                    path: '/carts/{id}/clear',
                    cors: true
                }
            }
        ]
    },
    update: {
        handler: 'src/handlers/updateCart.handler',
            events: [
            {
                http: {
                    method: 'put',
                    path: '/carts/{id}',
                    cors: true
                }
            }
        ]
    },
    delete: {
        handler: 'src/handlers/deleteCart.handler',
            events: [
            {
                http: {
                    method: 'delete',
                    path: '/carts/{id}',
                    cors: true
                }
            }
        ]
    },
    addProductToCart: {
        handler: 'src/handlers/addProductToCart.handler',
        events: [
            {
                http: {
                    method: 'patch',
                    path: '/carts/{id}/add/{productId}',
                    cors: true
                }
            }
        ]
    },
    removeProductFromCart: {
        handler: 'src/handlers/removeProductFromCart.handler',
        events: [
            {
                http: {
                    method: 'patch',
                    path: '/carts/{id}/remove/{productId}',
                    cors: true
                }
            }
        ]
    }
};
