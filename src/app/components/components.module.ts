import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { DBFormFixed } from './db-form-fixed/db-form-fixed.component'
import { Banner1 } from './banner1/banner1.component'
import { HomeNavbar4 } from './home-navbar4/home-navbar4.component'
import { Dashboardhero3 } from './dashboardhero3/dashboardhero3.component'
import { HomeFeatures18 } from './home-features18/home-features18.component'
import { Profilecontent } from './profilecontent/profilecontent.component'
import { HomeFooter15 } from './home-footer15/home-footer15.component'
import { ProfileNavbar } from './profile-navbar/profile-navbar.component'
import { ProfileTeam9 } from './profile-team9/profile-team9.component'
import { HomeHero31 } from './home-hero31/home-hero31.component'
import { HomeLogos1 } from './home-logos1/home-logos1.component'
import { HomeFeatures171 } from './home-features171/home-features171.component'
import { HomeCTA1 } from './home-cta1/home-cta1.component'
import { HomeContact4 } from './home-contact4/home-contact4.component'
import { DBFormNext } from './db-form-next/db-form-next.component'
import { HomeFAQ1 } from './home-faq1/home-faq1.component'
import { HomeFeatures17 } from './home-features17/home-features17.component'
import { DBHero } from './db-hero/db-hero.component'
import { HomeGallery1 } from './home-gallery1/home-gallery1.component'
import { SignUp1 } from './sign-up1/sign-up1.component'

@NgModule({
  declarations: [
    DBFormFixed,
    Banner1,
    HomeNavbar4,
    Dashboardhero3,
    HomeFeatures18,
    Profilecontent,
    HomeFooter15,
    ProfileNavbar,
    ProfileTeam9,
    HomeHero31,
    HomeLogos1,
    HomeFeatures171,
    HomeCTA1,
    HomeContact4,
    DBFormNext,
    HomeFAQ1,
    HomeFeatures17,
    DBHero,
    HomeGallery1,
    SignUp1,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    DBFormFixed,
    Banner1,
    HomeNavbar4,
    Dashboardhero3,
    HomeFeatures18,
    Profilecontent,
    HomeFooter15,
    ProfileNavbar,
    ProfileTeam9,
    HomeHero31,
    HomeLogos1,
    HomeFeatures171,
    HomeCTA1,
    HomeContact4,
    DBFormNext,
    HomeFAQ1,
    HomeFeatures17,
    DBHero,
    HomeGallery1,
    SignUp1,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
