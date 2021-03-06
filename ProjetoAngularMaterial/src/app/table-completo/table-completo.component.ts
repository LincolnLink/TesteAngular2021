import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
//Interface
import { PeriodicElement } from '../shared/Entidades/periodicElement';
//Tabela do Angular Material
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-table-completo',
  templateUrl: './table-completo.component.html',
  styleUrls: ['./table-completo.component.css']
})
export class TableCompletoComponent implements AfterViewInit, OnInit {

  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 111.026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 19.122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 126.815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 135.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];

  displayedColumns: string[] = ['position', 'name', 'symbol', 'weight', 'actions'];

  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  //Pega os valores e exibe o total
  getTotalCost() {
    return this.ELEMENT_DATA.map(t => t.weight).reduce((acc, value) => acc + value, 0);
  }


  excluirData(element: PeriodicElement){

    //console.log('oque é isso: ', element)

    this.ELEMENT_DATA = this.ELEMENT_DATA.filter(obj => obj.position != element.position);

    this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }




}
