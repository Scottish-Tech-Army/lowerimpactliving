import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { api } from '../../../utils/api'
import { ListingInterface } from '../../../../database/entities/listing';

const EditListingPage = () => {

    const router = useRouter();
    const id = router.query.id;
    const queryResult = api.listing.getSingle.useQuery({ id: typeof id === 'string' ? id : '' });
    const item = queryResult.data?.data;
    const listing: ListingInterface | undefined = item ? {
        id: item.id,
        productName: item.productName,
        description: item.description,
        quantity: item.quantity || 0,
        cost: item.cost || 0,
        shippingLocation: item.shippingLocation || '',
        condition: item.condition || '',
        tags: item.tags || [],
    }
        : undefined;

    const { mutate } = api.listing.update.useMutation({
        onError(error) {
            console.log(error)
        }
    });

    const [productName, setProductName] = useState(listing ? listing.productName : '');
    const [description, setDescription] = useState(listing ? listing.description : '');
    const [shippingLocation, setShippingLocation] = useState(listing ? listing.shippingLocation : '');
    const [quantity, setQuantity] = useState(listing ? listing.quantity : 0);
    const [cost, setCost] = useState(listing ? listing.cost : 0);
    const [tags, setTags] = useState(listing ? listing.tags : []);

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        switch (name) {
            case 'productName':
                setProductName(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'shippingLocation':
                setShippingLocation(value);
                break;
            case 'quantity':
                setQuantity(value);
                break;
            case 'cost':
                setCost(value);
                break;
            case 'tags':
                setTags([value]);
                break;
            default:
                break;
        }
    };

    const handleUpdateClick = () => {
        const updatedValues = {
            id: listing ? listing.id : '',
            productName: productName,
            description: description,
            shippingLocation: shippingLocation,
            quantity: quantity,
            cost: cost,
            tags: tags,
        };

        mutate(updatedValues);

        router.push(`/listing/${updatedValues.id}`)
    };

    return (
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto relative z-10">

            <div className="mt-5 bg-white rounded-lg shadow max-w-md">

                <h1 className="text-3xl font-bold mb-4">
                    Edit Listing
                </h1>

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
                            value={productName}
                            onChange={handleInputChange}
                            required />
                    </div>

                    <div className="px-5 pb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description:
                        </label>
                        <textarea
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            name="description"
                            value={description}
                            onChange={handleInputChange} />
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
                            value={shippingLocation}
                            onChange={handleInputChange} />
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
                            value={quantity}
                            onChange={handleInputChange} />
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
                            value={cost}
                            onChange={handleInputChange} />
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
                            value={tags}
                            onChange={handleInputChange} />
                    </div>

                    <div className='justify-center'>
                        <button
                            className="relative flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize  bg-black rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out"
                            type="button"
                            onClick={handleUpdateClick}>
                            Update Listing
                        </button>
                    </div>
                </form>
            </div>

            <div className="w-full lg:-mt-96 lg:w-3/6 ml-auto bg-blue-900 rounded-2xl overflow-hidden z-0">
                <img src="/images/available-2.jpg" alt="logo" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}

export default EditListingPage;
