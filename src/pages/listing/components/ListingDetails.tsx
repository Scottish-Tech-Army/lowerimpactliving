
import Link from "next/link";
import { ListingInterface } from "../../../../database/entities/listing";
// id: string,
// condition: string;
// productName: string;
// description: string;
// quantity: number; // Adjust the type accordingly
// cost: number;     // Adjust the type accordingly
// shippingLocation: string;
// tags: string[];   // Adjust the type accordingly
const ListingDetails = ({ listingData }: { listingData: ListingInterface }) => {
    return (

        <div className="flex flex-col justify-center items-center h-[90vh]">

            <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                <div className="">
                    <label className="block text-xl font-bold dark:text-black" htmlFor="productName">
                        {listingData.productName} </label>
                </div>

                <div className="mt-2 mb-8 w-full">
                    <h4 className="px-2 text-m font-bold text-navy-700 dark:text-black">
                        Description
                    </h4>
                    <p className="mt-2 px-2 text-base text-gray-600">
                        {listingData.description}
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 px-2 w-full">
                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Quantity</p>
                        <p className="text-base font-medium text-navy-700 dark:text-black">
                            {listingData.quantity}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Cost</p>
                        <p className="text-base font-medium text-navy-700 dark:text-black">
                            {listingData.cost}
                        </p>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Condition</p>
                        <p className="text-base font-medium text-navy-700 dark:text-black">
                            {listingData.condition}
                        </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Shipping Location</p>
                        <p className="text-base font-medium text-navy-700 dark:text-black">
                            {listingData.shippingLocation}
                        </p>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Tags</p>
                        <p className="text-base font-medium text-navy-700 dark:text-black">
                            {listingData.tags}
                        </p>
                    </div>
                </div>
            </div>

            <Link href={{
                pathname: '/listing/[id]/edit',
                query: { id: listingData.id }
            }}>Edit</Link>
        </div>


        // <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto relative z-10">
        //   <div className="mt-5 bg-white rounded-lg shadow max-w-md">
        //     <h1 className="text-3xl font-bold mb-4">Listing Details</h1>

        //     <div className="px-5 pb-5">
        //       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
        //         Product Name:
        //       </label>
        //       <p className="py-2 px-3 text-gray-700 leading-tight">{listingData.productName}</p>
        //     </div>

        //     <div className="px-5 pb-5">
        //       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
        //         Description:
        //       </label>
        //       <p className="py-2 px-3 text-gray-700 leading-tight">{listingData.description}</p>
        //     </div>

        //     <div className="px-5 pb-5">
        //       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="shippingLocation">
        //         Shipping Location:
        //       </label>
        //       <p className="py-2 px-3 text-gray-700 leading-tight">{listingData.shippingLocation}</p>
        //     </div>

        //     <div className="px-5 pb-5">
        //       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
        //         Quantity:
        //       </label>
        //       <p className="py-2 px-3 text-gray-700 leading-tight">{listingData.quantity || 0}</p>
        //     </div>

        //     <div className="px-5 pb-5">
        //       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cost">
        //         Cost:
        //       </label>
        //       <p className="py-2 px-3 text-gray-700 leading-tight">{listingData.cost || 0}</p>
        //     </div>

        //     <div className="px-5 pb-5">
        //       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
        //         Tags:
        //       </label>
        //       <p className="py-2 px-3 text-gray-700 leading-tight">{listingData.tags?.join(', ') || ''}</p>
        //     </div>

        //     <div className='justify-center'>
        //       <button
        //         className="relative flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize  bg-black rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out"
        //         type="button"
        //         // Implement your click handler as needed
        //       >
        //         Edit Listing
        //       </button>
        //     </div>
        //   </div>
        //   <div className="w-full lg:-mt-96 lg:w-3/6 ml-auto bg-blue-900 rounded-2xl overflow-hidden z-0">
        //     {/* Use the actual image from your listing data */}
        //     {listingData.image && (
        //       <img src={listingData.image} alt="Listing Image" className="w-full h-full object-cover" />
        //     )}
        //   </div>
        // </div>
    );
};

export default ListingDetails;
