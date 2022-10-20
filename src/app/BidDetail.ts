import {Bid} from './Bid';

export interface BidDetail {
    productName: string;
    shortDescription: string;
    description: string;
    category: string;
    startingPrice: number;
    endDate: Date;
    bids: Bid[];
}
