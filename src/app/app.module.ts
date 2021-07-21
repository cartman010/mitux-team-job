import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginCandidateComponent } from './login-candidate/login-candidate.component';
import { LoginCompanyComponent } from './login-company/login-company.component';
import { BasicAuthHttpInterceptorService } from './_services/basic-auth-http-interceptor.service';
import { InfoPersoComponent } from './info-perso/info-perso.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EtudesComponent } from './etudes/etudes.component';
import { ProfessionnelComponent } from './professionnel/professionnel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { EtudeItemComponent } from './etude-item/etude-item.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    LoginCandidateComponent,
    LoginCompanyComponent,
    InfoPersoComponent,
    NavigationComponent,
    EtudesComponent,
    ProfessionnelComponent,
    EtudeItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'logincandidate', component: LoginCandidateComponent },
      { path: 'logincompany', component: LoginCompanyComponent },
      { path: 'user', component: UserComponent, 
        children: [
          {
            path: 'info-perso',
            component: InfoPersoComponent
          },
          {
            path: 'etudes',
            component: EtudesComponent,
          },
          {
            path: 'professionnel',
            component: ProfessionnelComponent,
          }
        ]
      },

      //, canActivate: [AuthGuard]  }
    ]),
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
