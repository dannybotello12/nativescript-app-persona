import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'ns-feature',
  templateUrl: './feature.component.html'
})
export class FeatureComponent implements OnInit {


  constructor(private routerExtension: RouterExtensions,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
 
    this.routerExtension.navigate([{ outlets: { homeTab: ["home"], browseTab: ["browse"], searchTab:["search"]   } }], { relativeTo: this.activeRoute });
  }
  }


