import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { CreateListingForm } from './components/CreateListingForm';

const ListingPage: NextPage = () => {

  const [isFormValid, setIsFormValid] = useState(true);
  const [isListingCreated, setIsListingCreated] = useState(false);


  const handleFormInvalid = () => {
    setIsFormValid(false);
  };

  const handleListingCreated = () => {
    setIsListingCreated(true);
  };

  return (
    <div className="">
        <div className="mt-5 ">
        <Head>
          <title>Create Listing</title>
        </Head>


        {!isFormValid && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            Please fill in all required fields.
          </div>
        )}

        {isListingCreated && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            Listing created successfully!
          </div>
        )}

        {/* Use the ListingForm component and pass the callback */}
        
        <CreateListingForm onFormInvalid={handleFormInvalid}  onListingCreated={handleListingCreated}/>
      </div>
    </div>
  );
};

export default ListingPage;
