import {APIGatewayProxyHandler} from 'aws-lambda';
import 'source-map-support/register';
import {updateCart, getCart} from "../dao/cartDAO";
import createError from 'http-errors';
import middleware from "../middleware";
import {Cart} from "../schemas/cart";

const updateCartHandler: APIGatewayProxyHandler = async (event, _context) => {
    const { id } = event.pathParameters;
    const { cartName, products } = event.body;
    const cartData: Cart = {cartName, products};

    if (!(await getCart(id)).Item) {
        throw new createError.NotFound();
    }

    await updateCart(id, cartData);

    return {statusCode: 200, body: JSON.stringify((await getCart(id)).Item)};
};

export const handler = middleware(updateCartHandler);
