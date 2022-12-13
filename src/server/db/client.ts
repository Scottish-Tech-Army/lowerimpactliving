import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const DB_CLIENT = new DynamoDBClient({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_SECRET_KEY!,
    },
    region: process.env.AWS_REGION,
    endpoint: process.env.AWS_DYNAMODB_ENDPOINT
});
