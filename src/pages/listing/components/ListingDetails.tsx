
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
    <div className="m-1">
      <div className="m-20 w-2/4 shadow-xl rounded">
        <div className="p-20">
          <h1 className="text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Author Name</h1>
          <div className="m-10 rounded-2xl overflow-hidden">
            <img src="/images/available-2.jpg" alt="logo" className="w-full h-full" />
          </div>

          <div className="rounded">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Title
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={listingData.productName} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Description
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={listingData.description} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Quantity
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" value={listingData.quantity} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Cost
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={listingData.cost} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Condition
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={listingData.condition} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Shipping Location
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={listingData.shippingLocation} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tags
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={listingData.tags} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
