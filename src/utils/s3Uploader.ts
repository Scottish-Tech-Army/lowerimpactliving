// import AWS from 'aws-sdk';

// const s3 = new AWS.S3();

// export async function uploadImageToS3(file: Buffer, bucketName: string, key: string): Promise<string> {
//     try {
//         const params: AWS.S3.Types.PutObjectRequest = {
//             Bucket: bucketName,
//             Key: key,
//             Body: file,
//             ContentType: 'image/jpeg',
//             ACL: 'public-read',
//         };
//         const result = await s3.upload(params).promise();
//         return result.Location || '';
//     } catch (error) {
//         console.error('Error uploading image to S3:', error);
//         throw error;
//     }
// }
