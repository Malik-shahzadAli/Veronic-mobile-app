import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'language', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'primary-name',
    loadChildren: () => import('./primary-name/primary-name.module').then( m => m.PrimaryNamePageModule)
  },
  {
    path: 'date-of-birth',
    loadChildren: () => import('./date-of-birth/date-of-birth.module').then( m => m.DateOfBirthPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'contact-info',
    loadChildren: () => import('./contact-info/contact-info.module').then( m => m.ContactInfoPageModule)
  },
  {
    path: 'driver-splash',
    loadChildren: () => import('./driver-splash/driver-splash.module').then( m => m.DriverSplashPageModule)
  },
  {
    path: 'marriage-status',
    loadChildren: () => import('./marriage-status/marriage-status.module').then( m => m.MarriageStatusPageModule)
  },
  {
    path: 'driver-education',
    loadChildren: () => import('./driver-education/driver-education.module').then( m => m.DriverEducationPageModule)
  },
  {
    path: 'home-owner',
    loadChildren: () => import('./home-owner/home-owner.module').then( m => m.HomeOwnerPageModule)
  },
  {
    path: 'accident-info',
    loadChildren: () => import('./accident-info/accident-info.module').then( m => m.AccidentInfoPageModule)
  },
  {
    path: 'add-another-driver',
    loadChildren: () => import('./add-another-driver/add-another-driver.module').then( m => m.AddAnotherDriverPageModule)
  },
  {
    path: 'vehicle-splash',
    loadChildren: () => import('./vehicle-splash/vehicle-splash.module').then( m => m.VehicleSplashPageModule)
  },
  {
    path: 'add-vehicle',
    loadChildren: () => import('./add-vehicle/add-vehicle.module').then( m => m.AddVehiclePageModule)
  },
  {
    path: 'add-vehicle-by-vin',
    loadChildren: () => import('./add-vehicle-by-vin/add-vehicle-by-vin.module').then( m => m.AddVehicleByVinPageModule)
  },
  {
    path: 'add-vehicle-by-year-make-model',
    loadChildren: () => import('./add-vehicle-by-year-make-model/add-vehicle-by-year-make-model.module').then( m => m.AddVehicleByYearMakeModelPageModule)
  },
  {
    path: 'miles-per-day',
    loadChildren: () => import('./miles-per-day/miles-per-day.module').then( m => m.MilesPerDayPageModule)
  },
  {
    path: 'finance-mode',
    loadChildren: () => import('./finance-mode/finance-mode.module').then( m => m.FinanceModePageModule)
  },
  {
    path: 'add-another-vehicle',
    loadChildren: () => import('./add-another-vehicle/add-another-vehicle.module').then( m => m.AddAnotherVehiclePageModule)
  },
  {
    path: 'get-a-quote',
    loadChildren: () => import('./get-a-quote/get-a-quote.module').then( m => m.GetAQuotePageModule)
  },
  {
    path: 'first-splash',
    loadChildren: () => import('./first-splash/first-splash.module').then( m => m.FirstSplashPageModule)
  },
  {
    path: 'language',
    loadChildren: () => import('./language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OTPPageModule)
  },
  {
    path: 'referring',
    loadChildren: () => import('./referring/referring.module').then( m => m.ReferringPageModule)
  },
  {
    path: 'referred-person',
    loadChildren: () => import('./referred-person/referred-person.module').then( m => m.ReferredPersonPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
