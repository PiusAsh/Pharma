import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastyService } from 'ng-toasty';
import { ProductService } from 'src/app/core/operation/services/product/product.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: any = null;
  onSubmit: boolean = false;
  loading: boolean = false;
  AllAddedItems: any;
  // categories: any;
  cart: any;
  newArrivals: any = null;
  constructor(
    private loaderService: LoaderService,
    private route: Router,
    private notify: ToastyService
  ) {}

  ngOnInit(): void {}

  // Menu Data
  menus = [
    {
      name: 'Category 1',
      subcategories: ['Subcategory 1', 'Subcategory 2'],
      showSubcategories: false,
    },
    {
      name: 'Category 2',
      subcategories: ['Subcategory 1', 'Subcategory 2'],
      showSubcategories: false,
    },
    {
      name: 'Category 3',
      subcategories: ['Subcategory 1', 'Subcategory 2'],
      showSubcategories: false,
    },
    {
      name: 'Category 4',
      subcategories: ['Subcategory 1', 'Subcategory 2'],
      showSubcategories: false,
    },
    {
      name: 'Category 5',
      subcategories: ['Subcategory 1', 'Subcategory 2'],
      showSubcategories: false,
    },
  ];

  // Toggle Submenu on Icon Click
  toggleSubmenu(menu: any) {
    menu.showSubcategories = !menu.showSubcategories;
  }

  // Carousel Data
  carouselSlides = [
    {
      image: 'https://via.placeholder.com/800x400.png?text=Slide+1',
      title: 'Your Health, Our Priority',
      description: 'Discover top pharmacy products for your wellbeing.',
    },
    {
      image: 'https://via.placeholder.com/800x400.png?text=Slide+2',
      title: 'Quality Products',
      description: 'Pharmacy products from trusted brands.',
    },
    {
      image: 'https://via.placeholder.com/800x400.png?text=Slide+3',
      title: 'Easy Return',
      description: 'Experience hassle-free returns and customer support.',
    },
  ];

  // Features Section Data
  features = [
    {
      icon: 'bi bi-star',
      title: 'Quality',
      description: 'Products & Services',
    },
    {
      icon: 'bi bi-truck',
      title: 'Pickup & Delivery',
      description: 'Products & Services',
    },
    {
      icon: 'bi bi-arrow-repeat',
      title: 'Easy Return',
      description: 'Products & Services',
    },
    {
      icon: 'bi bi-headset',
      title: 'Support',
      description: 'Products & Services',
    },
  ];
}