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
 
    this.routerExtension.navigate([{ outlets: {
      busquedaTab: ["busqueda"],
      graficoTab:  ["grafico"],
      accesoTab:  ["acceso"]} }], { relativeTo: this.activeRoute });
  }
  }
