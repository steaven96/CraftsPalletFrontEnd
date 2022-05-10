import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}
const FRUITS: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-admin-products-categories',
  templateUrl: './admin-products-categories.component.html',
  styleUrls: ['./admin-products-categories.component.scss']
})
export class AdminProductCategoriesComponent {

  displayedColumns: string[] = ['id', 'categoryName', ];
  dataSource: MatTableDataSource<UserData>;
  listingcategory: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productService: ProductService) {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
   // this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit() {
		this.getCategoryList();
		
	}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getCategoryList() {
		this.productService.getProductCategories().subscribe(res => {
			//console.log('Product Categories= in cart ' + JSON.stringify(res));
			this.listingcategory = JSON.stringify(res);
			this.listingcategory = JSON.parse(this.listingcategory);
			console.log('prodData in Categories', this.listingcategory);

		});

	}



/** Builds and returns a new User. */
}

function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
  };



}




