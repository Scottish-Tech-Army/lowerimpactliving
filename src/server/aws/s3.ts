import { S3 } from "@aws-sdk/client-s3";
import { env } from '../../env/server.mjs'

// export const s3Client = new S3({
//     region: env.LIL_AWS_REGION,
//     credentials: {
//         accessKeyId: env.LIL_AWS_ACCESS_KEY,
//         secretAccessKey: env.LIL_AWS_SECRET_KEY,
//     },
// });

export const s3Client = new S3({
    region: "eu-west-1",
    credentials: {
        accessKeyId: "ASIATV23ZKNFGYLC6H5Q",
        secretAccessKey: "pHgJF+H6N/9rvVcxw2PrKxzy1stGLH0lRrOdQ0uC",
    },
});
