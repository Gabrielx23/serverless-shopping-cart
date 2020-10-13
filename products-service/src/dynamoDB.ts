import AWS from "aws-sdk";

export const productsTableName = 'ProductsTable';
export const DynamoDB = new AWS.DynamoDB.DocumentClient();
