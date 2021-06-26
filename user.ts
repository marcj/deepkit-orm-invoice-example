import { entity, t } from "@deepkit/type";
import { Invoice } from "./invoice";

@entity.name("user").collectionName("users")
export class User {
    @t.primary.autoIncrement public id: number = 0;
    @t public created: Date = new Date();
    @t public modified?: Date;

    @t public gender?: string;
    @t public occupation?: string;
    @t public school?: string;
    @t public ccmUserName?: string;

    @t.array(() => Invoice).backReference() public invoices?: Invoice[];

    constructor(
        @t public fullName: string,
        @t public friendlyName: string,
        @t public email: string,
        @t public phone: string,

        @t public memberSince: Date,
        @t public curledSince: Date,
        @t public dateOfBirth: Date,
    ) {
    }
}
