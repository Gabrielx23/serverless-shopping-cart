import {APIGatewayProxyHandler} from 'aws-lambda';
import 'source-map-support/register';
import {updateCart, getCart} from "../dao/cartDAO";
import createError from 'http-errors';
import middleware from "../middleware";

const removeProductFromCartHandler: APIGatewayProxyHandler = async (event, _context) => {
    const { id, productId } = event.pathParameters;
    const cart = (await getCart(id)).Item;

    if (!cart) {
        throw new createError.NotFound();
    }

    cart.products.splice(cart.products.lastIndexOf(productId), 1);

    const updatedCart = await updateCart(id, {
        cartName: cart.cartName,
        products: cart.products
    });

    return {statusCode: 200, body: JSON.stringify(updatedCart)};
};

export const handler = middleware(removeProductFromCartHandler);
