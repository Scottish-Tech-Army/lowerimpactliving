import { NextPage } from 'next';
import { api } from '../../utils/api';
import { ListingInterface } from '../../../database/entities/listing';
import { useSearchParams } from 'next/navigation'
import ListingDetails from './components/ListingDetails';
import Link from 'next/link';


const ListingPage: NextPage = () => {
  
  const searchParams = useSearchParams();

  const query_id = searchParams.get('id');

  const result = api.listing.getSingle.useQuery({ id: typeof query_id === 'string' ? query_id : '' });

  const item = result.data?.data
  const singleListingData: ListingInterface | undefined = item ? {
      id: item.id,
      productName: item.productName,
      description: item.description,
      quantity: item.quantity || 0, // Example default value, adjust as needed
      cost: item.cost || 0, // Example default value, adjust as needed
      shippingLocation: item.shippingLocation || '',
      condition: item.condition || '', // Example default value, adjust as needed
      tags: item.tags || [], // Example default value, adjust as needed
    }
  : undefined;

  return (
    <div>
      <header></header>
      <div>
        {singleListingData ? (
          <ListingDetails listingData={singleListingData} />
        ) : (
          <p>No listing data available</p>
        )}
      </div>
      {/* <div className="flex flex-col justify-center items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/listings">Go to Listings</Link>
        </button>
      </div> */}
    </div>
  );
};

export default ListingPage;

