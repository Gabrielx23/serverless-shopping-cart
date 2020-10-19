export const functions = {
    createCart: {
        handler: 'src/handlers/createCart.handler',
            events: [
            {
                http: {
                    method: 'post',
                    path: '/carts',
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
                }
            }
        ]
    }
};
