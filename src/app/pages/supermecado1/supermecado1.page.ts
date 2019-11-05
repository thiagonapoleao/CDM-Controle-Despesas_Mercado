import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-supermecado1',
  templateUrl: './supermecado1.page.html',
  styleUrls: ['./supermecado1.page.scss'],
})
export class Supermecado1Page implements OnInit {

  constructor() { }

  //  constructor(private barcodeScanner: BarcodeScanner) {

  // }

  ngOnInit() { }

  // lerCodigo() {
  //   this.barcodeScanner.scan().then(barcodeData => {
  //     console.log('Barcode data', barcodeData);
  //   }).catch(err => {
  //     console.log('Error', err);
  //   });
  // }

}
