import { entity, t } from "@deepkit/type";
import { User } from './user';

@entity.name("invoice")
export class Invoice {
    @t.primary.autoIncrement public id: number = 0;
    @t public created: Date = new Date();
    @t public modified?: Date;

    @t.type(() => User).reference() public user?: User;

    @t public payPalInvoiceId?: string;

    constructor(
        @t public invoiceNum: number,
        @t public dueDate: Date,
        @t public invoiceAmount: number,
        @t public amountPaid: number,
    ) {
    }
}
