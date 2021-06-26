import 'reflect-metadata';
import { Invoice } from './invoice';
import { User } from './user';
import { ConsoleTransport, Logger } from '@deepkit/logger';
import { database } from './db';

const logger = new Logger([new ConsoleTransport]);

async function main() {
    await database.migrate(); //create tables

    const user1 = new User(
        'Peter Smith', 'Pete', 'pete@google.com', '123132', new Date, new Date, new Date,
    );

    const invoice1 = new Invoice(1, new Date, 123, 123);
    invoice1.user = user1;

    const invoice2 = new Invoice(2, new Date, 100, 200);
    invoice2.user = user1;

    await database.persist(user1, invoice1, invoice2);

    const users = await database.query(User).joinWith('invoices').find();
    for (const user of users) {
        logger.log(`User <yellow>${user.fullName}</yellow> has ${user.invoices?.length} invoices`);
        if (user.invoices) {
            for (const invoice of user.invoices) {
                logger.log(`   Invoice <yellow>${invoice.invoiceNum}</yellow> amount of <green>${invoice.amountPaid}</green>/<red>${invoice.invoiceAmount}</red>`);
            }
        }
    }
}

main();
