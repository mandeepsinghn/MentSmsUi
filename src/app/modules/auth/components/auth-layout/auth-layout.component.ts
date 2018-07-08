import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

// import '../../../../../assets/admin/js/jquery.slimscroll.js';
// import '../../../../../assets/admin/js/sidebarmenu.js';
// import '../../../../../assets/admin/js/lib/sticky-kit-master/dist/sticky-kit.min.js';
// import '../../../../../assets/admin/js/custom.min.js';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css'
  // '../../../../../assets/admin/css/helper.css',
  // '../../../../../assets/admin/css/style.css'
]
})
export class AuthLayoutComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    
    // $('body').addClass("fix-header fix-sidebar");
  }
}
