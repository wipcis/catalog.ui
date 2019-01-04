import {Component} from "@angular/core";
import {UserLoginService} from "../../service/user-login.service";
import {CognitoUtil, LoggedInCallback} from "../../service/cognito.service";
import {UserParametersService} from "../../service/user-parameters.service";
import {Router} from "@angular/router";
import {default as data} from '../../../assets/data/services';

@Component({
    selector: 'awscognito-angular2-app',
    templateUrl: './services.html',
    styleUrls: ['../../../assets/css/catalog.css']
})
export class ServicesComponent implements LoggedInCallback {
    servicesData = data;
    
    constructor(public router: Router, public userService: UserLoginService, public userParams: UserParametersService, public cognitoUtil: CognitoUtil) {
        this.userService.isAuthenticated(this);
        console.log(JSON.stringify(this.servicesData));
    }

    isLoggedIn(message: string, isLoggedIn: boolean) {
        if (!isLoggedIn) {
            this.router.navigate(['/home/login']);
        } else {
            // Shows template
        }
    }
    openApp(i){
        window.open(this.servicesData[i].appUrl,'mywindow');
    }
}
