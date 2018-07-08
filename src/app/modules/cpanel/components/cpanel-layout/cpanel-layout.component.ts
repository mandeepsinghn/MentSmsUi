import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

import '../../../../../assets/admin/js/jquery.slimscroll.js';
import '../../../../../assets/admin/js/sidebarmenu.js';
import '../../../../../assets/admin/js/lib/sticky-kit-master/dist/sticky-kit.min.js';
import '../../../../../assets/admin/js/custom.min.js';
@Component({
  selector: 'app-cpanel-layout',
  templateUrl: './cpanel-layout.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../../../../assets/admin/css/helper.css',
    '../../../../../assets/admin/css/style.css',
  ]
})
export class CpanelLayoutComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
      });
      $('body').addClass('fix-header fix-sidebar');
    });
  }
}
