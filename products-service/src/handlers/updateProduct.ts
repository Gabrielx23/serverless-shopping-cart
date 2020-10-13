import {APIGatewayProxyHandler} from 'aws-lambda';
import 'source-map-support/register';
import {updateProduct, getProduct} from "../dao/productDAO";
import createError from 'http-errors';
import middleware from "../middleware";
import {Product} from "../schemas/product";

const updateProductHandler: APIGatewayProxyHandler = async (event, _context) => {
    const { id } = event.pathParameters;
    const { productName, price, taxPercent } = event.body;
    const productData: Product = {productName, price, taxPercent};

    if (!(await getProduct(id)).Item) {
        throw new createError.NotFound();
    }

    const product = await updateProduct(id, productData);

    return {statusCode: 200, body: JSON.stringify(product)};
};

export const handler = middleware(updateProductHandler);
