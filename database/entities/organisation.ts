import { ElectroEvent, Entity } from "electrodb";
import { DB_CLIENT } from "../client";
import { TABLE_NAME } from "../table";

// const logger = (event: ElectroEvent) => {
//     console.log(JSON.stringify(event, null, 4));
// }


export const organisation = new Entity({
    model: {
        entity: 'organisation',
        version: '1',
        service: 'lil'
    },
    attributes: {
        id: {
            type: 'string',
            default: () => '1-2-3',
            // default: () => uuid(),
        },
        email: {
            type: 'string',
            required: true,
        },

        tags: {
            type: 'set',
            items: 'string',
        },
        onBoarded: {
            type: 'boolean',
            default: () => false,
        },
        fake: {
            type: 'string',
            default: () => 'fake',
        }
    },
    indexes: {
        locations: {
            pk: {
                field: "pk",
                composite: ["email"]
            },
            sk: {
                // highlight-next-line
                field: 'sk',
                composite: ['fake']
            }
        }
    }
}, {
    client: DB_CLIENT, table: TABLE_NAME,
    //  logger 
});