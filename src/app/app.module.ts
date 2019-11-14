import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GamePerformanceComponent } from './components/game-performance/game-performance.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameStatisticsComponent } from './components/game-performance/game-statistics/game-statistics.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material';
import { DataLogComponent } from './components/game-performance/data-log/data-log.component';
import { ChartStatisticsComponent } from './components/game-performance/chart-statistics/chart-statistics.component';
import { DataGraphComponent } from './components/game-performance/data-graph/data-graph.component';
import { TraceRouteComponent } from './components/game-performance/trace-route/trace-route.component';
import { BackgroundchangeDirective } from './directive/backgroundchange.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamePerformanceComponent,
    GameStatisticsComponent,
    DataLogComponent,
    ChartStatisticsComponent,
    DataGraphComponent,
    TraceRouteComponent,
    BackgroundchangeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
