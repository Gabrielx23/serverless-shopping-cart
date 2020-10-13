import {DynamoDB, productsTableName} from "../dynamoDB";
import {Product} from "../schemas/product";
import {v4 as uuid} from 'uuid';

export const createProduct = async (productData: Product) => {
    const now = new Date().toISOString();

    const product = {
        id: uuid(),
        createdAt: now,
        updatedAt: now,
        ...productData
    };

    await DynamoDB.put({
        TableName: productsTableName,
        Item: product
    }).promise();

    return product;
};

export const updateProduct = async (id: string, productData: Product) => {
    const product = await DynamoDB.update({
        TableName: productsTableName,
        Key: { id: id },
        UpdateExpression: "set productName = :productName, price = :price, taxPercent = :taxPercent, updatedAt = :updatedAt",
        ExpressionAttributeValues: {
            ":productName": productData.productName,
            ":price": productData.price,
            ":taxPercent": productData.taxPercent,
            ":updatedAt": new Date().toISOString()
        },
        ReturnValues: "UPDATED_NEW"
    }).promise();

    return product.Attributes;
};

export const deleteProduct = async (id: string) => {
    const product = await DynamoDB.delete({
        TableName: productsTableName,
        Key: { id: id },
        ConditionExpression: "id = :id",
        ExpressionAttributeValues: { ":id": id }
    }).promise();

    return product.Attributes;
};

export const getProducts = async () => {
    return await DynamoDB.scan({
        TableName: productsTableName
    }).promise();
};

export const getProduct = async (id: string) => {
    return await DynamoDB.get({
        TableName: productsTableName,
        Key: {id: id}
    }).promise();
};