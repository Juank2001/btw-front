import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public limit: number = 10;
  public offset: number = 0;
  public products: any = []
  private productsArray: any = []
  private category: number = 0

  constructor(
    private service: ServiceService,
    private spinner: NgxSpinnerService,
    private _router: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    if (this._router.snapshot.params['category']) {
      this.category = this._router.snapshot.params['category']
      this.getProductsCategory()
    }else{
      this.getProducts()
    }
  }

  getProducts() {
    this.spinner.show()
    this.products = []
    this.service.httpGet('products/listAll/' + this.limit + '/' + this.offset).subscribe((data: any) => {
      this.products = data
      this.productsArray = data
      this.spinner.hide()
    })
  }

  getProductsCategory() {
    this.spinner.show()
    this.products = []
    this.service.httpGet('categorys/products/' + this.category).subscribe((data: any) => {
      this.products = data
      this.productsArray = data
      this.spinner.hide()
    })
  }

  search(valor: any) {
    //se filtran los productos de acuerdo a los criterios del input de busqueda
    this.products = this.productsArray.filter((item: any) => {
      return item.title.toLowerCase().indexOf(
        valor.target.value.toLowerCase()) > -1;
    });
  }
}
