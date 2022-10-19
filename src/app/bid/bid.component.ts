import { Component, OnInit } from '@angular/core';
import { SellerService} from '../seller.service';
import { Product} from '../Product';
import { BidDetail } from '../BidDetail';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  products: Product[];
  bidDetail: BidDetail | undefined;
  selectedProduct: string ='';

  constructor(private sellerService: SellerService) {
     this.products=[];
   }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.sellerService.getProducts().
    subscribe( products => this.products = products);
  }

  showBids(): void {
    if(this.selectedProduct.length==0)
    {
      alert('Please select a product');
      return;
    }
    this.sellerService.showBids(this.selectedProduct).
    subscribe( bidDetail => this.bidDetail = bidDetail);
  }

}
