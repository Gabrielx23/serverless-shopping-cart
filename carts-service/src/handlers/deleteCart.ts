import {APIGatewayProxyHandler} from 'aws-lambda';
import 'source-map-support/register';
import {deleteCart, getCart} from "../dao/cartDAO";
import createError from 'http-errors';
import middleware from "../middleware";

const deleteCartHandler: APIGatewayProxyHandler = async (event, _context) => {
    const { id } = event.pathParameters;
    const cart = (await getCart(id)).Item;

    if (!cart) {
        throw new createError.NotFound();
    }

    await deleteCart(id);

    return {statusCode: 200, body: JSON.stringify(cart)};
};

export const handler = middleware(deleteCartHandler);
