import React from 'react';
import { ListingInterface } from '../../../../database/entities/listing';
import { CreateListingForm } from './CreateListingForm';

interface ListingGridProps {
  items: ListingInterface[];
}

const ListingsGrid: React.FC<ListingGridProps> = ({ items }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* CreateListingForm component */}

        {items.map((item) => (
            <div className="bg-gray-200 p-4 rounded" key={item.id}>
            {/* Image placeholder */}
            <div className="mb-4">
                <img src="/images/available-2.jpg" alt="logo" className="w-full h-full object-cover" />
            </div>
            {/* Product details */}
                <div>
                    <h2 className="text-2xl font-bold mb-2">{item.productName}</h2>
                    <p className="text-gray-700 mb-2">{item.description}</p>

                    {/* Display quantity and cost if available */}
                    <p className="text-sm">
                        Quantity: {item.quantity} | Cost: ${item.cost}
                    </p>

                    {/* Additional properties */}
                    <p className="text-sm">
                        Shipping Location: {item.shippingLocation}
                    </p>
                    <p className="text-sm">
                        Condition: {item.condition}
                    </p>
                    <p className="text-sm">
                        Tags: {item.tags.join(', ')}
                    </p>
                </div>
            </div>
        ))}
        </div>
    );
};

export default ListingsGrid;