import {Component, OnInit} from "@angular/core";

declare let AWS: any;
declare let AWSCognito: any;

@Component({
    selector: 'catalog-ui',
    template: '<p>Hello and welcome!"</p>'
})
export class AboutComponent {

}

@Component({
    selector: 'catalog-ui',
    templateUrl: './landinghome.html'
})
export class HomeLandingComponent {
    constructor() {
        console.log("HomeLandingComponent constructor");
    }
}

@Component({
    selector: 'catalog-ui',
    templateUrl: './home.html'
})
export class HomeComponent implements OnInit {

    constructor() {
        console.log("HomeComponent constructor");
    }

    ngOnInit() {

    }
}


