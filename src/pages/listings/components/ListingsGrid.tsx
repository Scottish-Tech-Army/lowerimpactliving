import React, { useState } from 'react';
import { ListingInterface } from '../../../../database/entities/listing';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { api } from '../../../utils/api';

interface ListingGridProps {
    items: ListingInterface[];
}

const ListingsGrid: React.FC<ListingGridProps> = ({ items }) => {

    const router = useRouter();

    const handleRedirect = () => {
        router.push('/createListings'); // Change this path to the actual path you want to redirect to
    };
    

    const { mutate } = api.listing.deleteSingle.useMutation({
        onError(error) {

        }
    });

    const handleDelete = (itemId: string) => {

        const transformedFormData = {
            id: itemId
        };

        try {
            mutate(transformedFormData);
        } catch {
            console.error("error deleting listing")
        }
        finally {
            router.reload();
        }
    }

    return (
        <div className="grid gap-4 grid-cols-4 grid-rows-3">

            <div className="bg-gray-200 p-4 rounded flex items-center justify-center">
                <button onClick={handleRedirect} className="text-9xl font-bold ml-2">+</button>
            </div>

            {/* Create Listing Button */}

            {items?.map((item) => (
                <Link key={item.id} href={`/listing/${item.id}`} passHref>
                    <article className="bg-gray-200 overflow-hidden rounded-lg shadow-lg">

                        <a href="#">
                            <img src="/images/available-2.jpg" alt="logo" className="block h-auto w-full" />
                        </a>

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 className="text-lg">
                                <a className="no-underline hover:underline text-black" href="#">
                                    {item.productName}
                                </a>
                            </h1>
                            <p className="text-grey-darker text-sm">
                                £{item.cost}
                            </p>
                        </header>

                        <div className='flex items-center p-5'>
                            <p className="text-sm">{item.tags.join(' ')}</p>
                        </div>
                        <div className='flex items-center p-5'>
                            <p className="text-sm">{item.description}</p>
                        </div>
                        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                            <a className="flex items-center no-underline hover:underline text-black" href="href={`/listing/${item.id}`">
                                {/* <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"> */}
                                
                                <p className="ml-2 text-sm">
                                    view listing -{'>'}
                                </p>
                            </a>

                            <button onClick={() => handleDelete(item.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Delete Listing
                            </button>
                        </footer>

                    </article>
                </Link>

            ))}
        </div>
    );
};

export default ListingsGrid;
