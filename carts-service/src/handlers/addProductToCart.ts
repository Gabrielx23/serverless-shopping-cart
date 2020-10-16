import {APIGatewayProxyHandler} from 'aws-lambda';
import 'source-map-support/register';
import {updateCart, getCart} from "../dao/cartDAO";
import createError from 'http-errors';
import middleware from "../middleware";

const addProductToCartHandler: APIGatewayProxyHandler = async (event, _context) => {
    const { id, productId } = event.pathParameters;
    const cart = (await getCart(id)).Item;

    if (!cart) {
        throw new createError.NotFound();
    }

    const products = cart.products.push(productId);

    const updatedCart = await updateCart(id, {
        cartName: cart.name,
        products: products
    });

    return {statusCode: 200, body: JSON.stringify(updatedCart)};
};

export const handler = middleware(addProductToCartHandler);
