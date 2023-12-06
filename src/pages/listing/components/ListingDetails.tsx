
import { ListingInterface } from "../../../../database/entities/listing";
const ListingDetails = ({ listingData }: { listingData: ListingInterface }) => {
  return (

        <div className="flex flex-col justify-center items-center h-[90vh]">

            <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                <div className="">
                    <label className="block text-xl font-bold dark:text-black" htmlFor="productName">
                        {listingData.productName} 
                    </label>
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
        </div>
  );
};

export default ListingDetails;
