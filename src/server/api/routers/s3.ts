import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';
import { GetObjectCommand, PutObjectCommand, UploadPartCommand } from '@aws-sdk/client-s3';

export const s3Router = createTRPCRouter({
    getObjects: publicProcedure
        .query(async ({ ctx }) => {
            const { s3Client } = ctx.clients;

            const listObjectsOutput = await s3Client.listObjectsV2({
                Bucket: "listings-bucket-asdasd",
            });

            return listObjectsOutput.Contents ?? [];
        }),

    getObject: publicProcedure
        .input(z.object({
            bucket: z.string(),
            key: z.string(),
        }))
        .query(async ({ input, ctx }) => {
            console.log("Here!")

            try {
                const { s3Client } = ctx.clients;

                const printRegion = async () => {
                    const region = await s3Client.config.region();
                    console.log("region: ", region);
                };

                await printRegion();

                const command = new GetObjectCommand({
                    Bucket: input.bucket,
                    Key: input.key
                });

                const objectData = await s3Client.send(command);

                console.log("Calling S3!")

                return objectData;

            } catch (error) {
                console.error('Error retrieving S3 object:', error);
                return {};
            }
        })
});
