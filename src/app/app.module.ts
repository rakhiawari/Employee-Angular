import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableContentComponent } from './table-content/table-content.component';
import { AddComponent } from './actions/add/add.component';
import { UpdateComponent } from './actions/update/update.component';
import { DeleteComponent } from './actions/delete/delete.component';
import { ViewComponent } from './actions/view/view.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
      

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableContentComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    ViewComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule, 
    Ng2SearchPipeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
