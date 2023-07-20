import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrls: ['./categorys.component.scss']
})
export class CategorysComponent implements OnInit {

  public categorys: any = []
  constructor(
    public service: ServiceService,
    private spinner: NgxSpinnerService
  ){

  }

  ngOnInit(): void {
    this.getCategorys()
  }

  getCategorys(){
    this.categorys = []
    this.spinner.show()
    this.service.httpGet('categorys/listAll').subscribe((data: any) => {
      this.categorys = data
      this.spinner.hide()
    })
  }
}
