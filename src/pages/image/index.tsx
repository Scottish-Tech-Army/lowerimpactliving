import React from 'react';
import { api } from '../../utils/api';

import type { NextPage } from 'next';

const Home: NextPage = () => {

    console.log("Index page!")

    const { data } = api.s3.getObject.useQuery({ bucket: "image-bucket-1234567", key: "image.jpg" });

    if (!data) {
        return <div>Loading...</div>;
    }

    console.log(data);

    return (
        <div>
            Hello!
        </div>
    );
};

export default Home;
