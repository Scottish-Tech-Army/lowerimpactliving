
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
    <div>
    <h1>{listingData.productName}</h1> 
                <div class="rounded">

                    {listingData.description}
                    {listingData.quantity}
                    {listingData.cost}
                    {listingData.condition}
                    {listingData.shippingLocation}
                    {listingData.tags}
                </div>
                <div>
                    {/* put photo here */}
                </div>
                    
    </div>
  );
};

export default ListingDetails;
