import { Component } from '@angular/core';
import { IProduct } from './product';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Conditional } from '@angular/compiler';
import { ProductService } from './product.service';
{}
@Component({
    selector: 'pm-products', //prefix with pm as it relates to the project 
    templateUrl: './product-list.component.html', //template html
    styleUrls: ['./product-list-component.css'] , // template css
})
export class ProductListComponent implements OnInit { // Implementing onInit lifecycle hook
    pageTitle: string = 'Product List';
    imageWidth: number = 50; //defining image width property
    imageMargin: number = 2;
    showImage: boolean = false; // setting showImages ppty to false implies images are not loaded when page is loaded
    errorMessage: string;
    // filtering and sorting products
    _listFilter: string; 
    // when the data binding needs the value, it will call the getter and get the value
    get listFilter(): string {
        return this._listFilter;
    }
    // if the user modifies the value, data binding calls the setter passing in the changed value
    set listFilter(value:string) {
        this._listFilter = value
        // Using the javascript Conditional operator below
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = []; // products takes the interface type of IProduct 
   
    constructor(private _productService:ProductService) { // Using shorthand syntax to define dependency
        // i.e Assigning injected service instance (ProductService) to our local variable 
        // private == accessor keyword 
        // _productService == _ denotes its a private variable to hole the injected service instance
        // ProductService == Injected INstance of the requested Service
        // constructor is the function that is executed when the component is first initialized
        
        // this.listFilter = 'cart';
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List:' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase(); // .toLocaleLowerCase() to achieve case-insensitve comparism
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
            //indexOf() is used to determined if the filtered text is found in the product name 
    }   

    toggleImage(): void { // void signiifes that method has no return type
        this.showImage = !this.showImage; // toggles the body of the show image property
    }     

    ngOnInit(): void { //ngOnInit method
        // console.log('In OnInit'); 
        this._productService.getProducts()
            .subscribe(products =>  {
                this.products = products;    
            this.filteredProducts = this.products;
     },
        error => this.errorMessage = <any>error);
    }
}