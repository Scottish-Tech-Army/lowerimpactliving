import { Entity } from "electrodb";

import { v4 as uuid4 } from 'uuid';
import { TABLE_NAME } from "../table";
import { DB_CLIENT } from "../client";
export declare enum conditionEnum {
    EXCELLENT,
    GOOD,
    FAIR,
    POOR

}
export interface ListingInterface {
    id: string,
    productName: string;
    description: conditionEnum;
    quantity: number; // Adjust the type accordingly
    condition: string;
    cost: number;     // Adjust the type accordingly
    shippingLocation: string;
    tags: string[];   // Adjust the type accordingly
}


export const listing = new Entity({
    model: {
        entity: 'listing',
        version: '1',
        service: 'lil'
    },
    attributes: {
        id: {
            type: 'string',
            default: uuid4(),
            required: true
        },
        entryType: {
            type: 'string',
            default: 'LISTING'
        },
        productName: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        },
        quantity: {
            type: 'number'
        },
        cost: {
            type: 'number'
        },
        shippingLocation: {
            type: 'string'
        },
        condition: {
            type: ['EXCELLENT', 'GOOD', 'FAIR', 'POOR'] as const,
        },
        tags: {
            type: 'set', // Store tags as a comma-separated string
            items: 'string',
        }
    },
    indexes: {
        locations: {
            pk: {
                field: "pk",
                composite: ["id"]
            },
            sk: {
                // highlight-next-line
                field: 'sk',
                composite: ['entryType']
            }
        }
    }
},
    {
        client: DB_CLIENT, table: TABLE_NAME,
        //  logger 
    });