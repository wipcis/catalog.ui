import {Component} from "@angular/core";
import {UserLoginService} from "../../service/user-login.service";
import {CognitoUtil, LoggedInCallback} from "../../service/cognito.service";
import {UserParametersService} from "../../service/user-parameters.service";
import {Router} from "@angular/router";


@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './contribute.html',
    styleUrls: ['../../../assets/css/catalog.css']
})
export class ContributeComponent implements LoggedInCallback {
    contribute = {
        "title": "",
        "outcomes": "",
        "priceRange": ""
    };

    constructor(public router: Router, public userService: UserLoginService, public userParams: UserParametersService, public cognitoUtil: CognitoUtil) {
        this.userService.isAuthenticated(this);
        console.log("In ContributeComponent");
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/home/login']);
        } else {
            // Shows template
        }
    }

    onSubmit(){
        console.log("Request submitted");
    }
}
