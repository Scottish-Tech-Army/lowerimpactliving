import { ElectroEvent, Entity } from "electrodb";

import { v4 as uuid4 } from 'uuid';
import { TABLE_NAME } from "../table";
import { DB_CLIENT } from "../client";

export const listing = new Entity({
    model: {
        entity: 'listing',
        version: '1',
        service: 'lil'
    },
    attributes: {
        id: {
            type: 'string'
        },
        userId: {
            type: 'string',
            required: true
        },
        productName: {
            type: 'string'
        },
        quantity: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        free: {
            type: 'string'
        },
        price: {
            type: 'string'
        },
        shippingLocation: {
            type: 'string'
        },
        tags: {
            type: 'string', // Store tags as a comma-separated string
        }
          
        // Category 
        // Seller
        // tags -> lego, plastic 
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
                composite: ['tags']
            }
        }
    }
},
{
    client: DB_CLIENT, table: TABLE_NAME,
    //  logger 
});



