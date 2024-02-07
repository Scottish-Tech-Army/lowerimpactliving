import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { env } from "../src/env/server.mjs";

export const DB_CLIENT =
  new DynamoDBClient({
    credentials: {
      accessKeyId: env.LIL_AWS_ACCESS_KEY!,
      secretAccessKey: env.LIL_AWS_SECRET_KEY!,
    },
    region: env.LIL_AWS_REGION,
    endpoint: env.LIL_AWS_DYNAMODB_ENDPOINT
  });
