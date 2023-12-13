
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
      <h1 className="text-2xl">Author Name</h1>
      <div className="m-10 rounded-2xl overflow-hidden">
          <img src="/images/available-2.jpg" alt="logo" className="w-full h-full"/>
      </div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {listingData.productName}</h1>
      <div className="rounded">
        <h2>{listingData.description}
        </h2>
        {listingData.description}
        {listingData.quantity}
        {listingData.cost}
        {listingData.condition}
        {listingData.shippingLocation}
        {listingData.tags}
      </div>
      </div>
    </div>
    </div>
  );
};

export default ListingDetails;
