import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  urlImg: string='../../../assets/laptop-gf2bb58296_1280.jpg';
  photo: string=`url('${this.urlImg}')`;
}
