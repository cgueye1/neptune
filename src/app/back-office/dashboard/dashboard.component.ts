import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

import { CanvasJS } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  colors1 = CanvasJS.addColorSet('couleursProfil', [
    '#0095FF',
    '#F9C20A',
    '#fc666a',
  ]);
  chartOptions = {
    theme: 'light2',
    title: {
      horizontalAlign: 'left',
      text: 'Histogramme des chambres',
      fontSize: 16,
      fontColor: '#1F2328',
      fontWeight: '500',
      fontFamily: 'Be Vietnam Pro, sans-serif',
      padding: {
        bottom: 40,
      },
    },
    axisY: {
      title: 'Nombre de demandes',
      titleFontColor: '#1F2328',
      titleFontSize: 14,
      titleFontFamily: 'Be Vietnam Pro, sans-serif',
    },
    exportEnabled: true,
    animationEnabled: true,
    colorSet: 'couleursProfil',
    data: [
      {
        type: 'column',
        name: 'Disponible',
        legendText: 'Disponible',
        showInLegend: true,
        dataPoints: [
          { label: 'Item 1', y: 120 },
          { label: 'Item 2', y: 100 },
          { label: 'Item 3', y: 110 },
          { label: 'Item 4', y: 120 },
          { label: 'Item 5', y: 90 },
        ],
      },
      {
        type: 'column',
        name: 'Réservé',
        legendText: 'Réservé',
        showInLegend: true,
        dataPoints: [
          { label: 'Item 1', y: 80 },
          { label: 'Item 2', y: 90 },
          { label: 'Item 3', y: 110 },
          { label: 'Item 4', y: 95 },
          { label: 'Item 5', y: 120 },
        ],
      },
      {
        type: 'column',
        name: 'Occupé',
        legendText: 'Occupé',
        showInLegend: true,
        dataPoints: [
          { label: 'Item 1', y: 50 },
          { label: 'Item 2', y: 40 },
          { label: 'Item 3', y: 70 },
          { label: 'Item 4', y: 65 },
          { label: 'Item 5', y: 80 },
        ],
      },
    ],
  };

  chartOptions2 = {
    exportEnabled: true,
    animationEnabled: true,
    colorSet: 'couleursProfil',
    theme: 'light2',
    title: {
      horizontalAlign: 'left',
      text: 'Évolution des dossiers',
      fontSize: 16,
      fontColor: '#1F2328',
      fontWeight: '500',
      fontFamily: 'Be Vietnam Pro, sans-serif',
      padding: {
        bottom: 40,
      },
    },
    axisY: {
      title: 'Nombre de demandes',
      titleFontColor: '#1F2328',
      titleFontSize: 14,
      titleFontFamily: 'Be Vietnam Pro, sans-serif',
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: 'rangeArea',
        showInLegend: true,
        name: 'Disponible',
        markerSize: 0,
        dataPoints: [
          { x: new Date(2024, 0, 1), y: [90, 120] },
          { x: new Date(2024, 1, 1), y: [100, 130] },
          { x: new Date(2024, 2, 1), y: [140, 160] },
          { x: new Date(2024, 3, 1), y: [130, 150] },
          { x: new Date(2024, 4, 1), y: [150, 180] },
        ],
      },
      {
        type: 'rangeArea',
        showInLegend: true,
        name: 'Réservé',
        markerSize: 0,
        dataPoints: [
          { x: new Date(2024, 0, 1), y: [70, 90] },
          { x: new Date(2024, 1, 1), y: [80, 95] },
          { x: new Date(2024, 2, 1), y: [100, 110] },
          { x: new Date(2024, 3, 1), y: [90, 100] },
          { x: new Date(2024, 4, 1), y: [110, 120] },
        ],
      },
      {
        type: 'rangeArea',
        showInLegend: true,
        name: 'Occupé',
        markerSize: 0,
        dataPoints: [
          { x: new Date(2024, 0, 1), y: [30, 50] },
          { x: new Date(2024, 1, 1), y: [40, 45] },
          { x: new Date(2024, 2, 1), y: [60, 70] },
          { x: new Date(2024, 3, 1), y: [50, 65] },
          { x: new Date(2024, 4, 1), y: [70, 80] },
        ],
      },
    ],
  };
}
