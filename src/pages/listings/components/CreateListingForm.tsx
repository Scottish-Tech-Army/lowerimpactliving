import React, { useState } from 'react';
import { api } from '../../../utils/api';

interface ListingFormProps {
    onFormInvalid: () => void;
    onListingCreated: () => void; // Callback for when the listing is created
}

export const CreateListingForm: React.FC<ListingFormProps> = ({ onFormInvalid, onListingCreated }) => {

    const [formData, setFormData] = useState({
        productName: '',
        description: '',
        quantity: '',
        cost: '',
        shippingLocation: '',
        tags: '',
    });

    const [hasError, setHasError] = useState(false);

    const [isFormValid, setIsFormValid] = useState(true);

    const { mutate } = api.listing.create.useMutation({
        onError(error) {
            setHasError(true);
        }
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleCreateListing = async () => {
        if (!formData.productName || !formData.description || !formData.shippingLocation) {
            setIsFormValid(false);
            onFormInvalid(); // Call the callback function
            return;
        }

        try {
            const transformedFormData = {
                productName: formData.productName,
                description: formData.description,
                quantity: Number(formData.quantity), // Convert to a number
                cost: Number(formData.cost),         // Convert to a number
                shippingLocation: formData.shippingLocation,
                tags: formData.tags.split(','),      // Convert the comma-separated string to an array
            };

            await mutate(transformedFormData);
            onListingCreated();
        } catch (error) {
            console.error('Error creating listing:', error);
        }
    };

    return (

        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto relative z-10">

            <div className="mt-5 bg-white rounded-lg shadow max-w-md">
                <h1 className="text-3xl font-bold mb-4">Create Listing</h1>

                <form>
                    <div className="px-5 pb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
                            Product Name:
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="productName"
                            name="productName"
                            value={formData.productName}
                            onChange={handleInputChange}
                            required // HTML5 required attribute

                        />
                    </div>

                    <div className="px-5 pb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description:
                        </label>
                        <textarea
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="px-5 pb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shippingLocation">
                            Shipping Location:
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="shippingLocation"
                            name="shippingLocation"
                            value={formData.shippingLocation}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="px-5 pb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
                            Quantity:
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="px-5 pb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cost">
                            Cost:
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="cost"
                            name="cost"
                            value={formData.cost}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="px-5 pb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
                            Tags:
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="tags"
                            name="tags"
                            value={formData.tags}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='justify-center'>
                        <button
                            className="relative flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize  bg-black rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out"
                            type="button"
                            onClick={handleCreateListing}
                        >
                            Create Listing
                        </button>
                    </div>

                </form>
            </div>
            <div className="w-full lg:-mt-96 lg:w-3/6 ml-auto bg-blue-900 rounded-2xl overflow-hidden z-0">
                <img src="/images/available-2.jpg" alt="logo" className="w-full h-full object-cover" />
            </div>

        </div>

    )
};

