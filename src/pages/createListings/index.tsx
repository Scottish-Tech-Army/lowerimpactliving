import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { CreateListingForm } from './components/CreateListingForm';
import { api } from '../../utils/api';
import { ListingInterface } from '../../../database/entities/listing';


const ListingPage: NextPage = () => {
  
  const [isFormValid, setIsFormValid] = useState(true);
  const [isListingCreated, setIsListingCreated] = useState(false);

  const handleFormInvalid = () => {
    setIsFormValid(false);
  };

  const handleListingCreated = () => {
    setIsListingCreated(true);
  };
 
  const result = api.listing.getAll.useQuery();
  const listingsData: ListingInterface[] = result.data?.data.map((item) => ({
    id: item.id,
    productName: item.productName,
    description: item.description,
    quantity: item.quantity || 0, // Example default value, adjust as needed
    cost: item.cost || 0, // Example default value, adjust as needed
    shippingLocation: item.shippingLocation || '',
    condition: item.condition || '', // Example default value, adjust as needed
    tags: item.tags || [], // Example default value, adjust as needed
  })) || [];
  
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

        <CreateListingForm onFormInvalid={handleFormInvalid} onListingCreated={handleListingCreated}/>
        
      </div>
    </div>
  );
};

export default ListingPage;

