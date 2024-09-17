import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/assets/environment/environment';



@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  // productUrl: string = "https://pharmacy.cyclic.app/";
  productUrl = environment.BASE_URL;

  private productsSubject = new BehaviorSubject<any[]>([]);
  products$: Observable<any[]> = this.productsSubject.asObservable();

  products!: any;

  addNewProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.productUrl}products/create`, product);
  }
  addBlogPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.productUrl}/blog/posts`, post);
  }
  vendorAddProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.productUrl}products/create`, product);
  }

  getProductId(id: any): Observable<any> {
    return this.http.get<any>(`${this.productUrl}products/` + id);
  }
  getPostByID(id: any): Observable<any> {
    return this.http.get<any>(`${this.productUrl}blog/posts/` + id);
  }
  searchProduct(keyword: any): Observable<any> {
    return this.http.get<any>(
      `${this.productUrl}/products/search?keyword=${keyword}`
    );
  }
  getRelatedProducts(id: any): Observable<any> {
    return this.http.get<any>(`${this.productUrl}products/${id}/get-related`);
  }
  getProductByCategory(name: any): Observable<any> {
    return this.http.get<any>(`${this.productUrl}products/category/${name}`);
  }

  getAllProducts(page, limit): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.productUrl}/products?limit=${limit}`
    );
  }
  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.productUrl}blog/posts`);
  }
  getStoreProducts(storeName: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.productUrl}/products/store/${storeName}`
    );
  }
  getStoreDetails(storeName: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.productUrl}/vendors/${storeName}`);
  }

  getAllFlashProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.productUrl}products/flashsale`);
  }
  getAllTrendingProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.productUrl}products/trending`);
  }

  getAllVendorProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.productUrl}products/vendor`);
  }
  getAllVendorOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.productUrl}orders`);
  }
  getAllOrderByUser(id: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.productUrl}orders/user/${id}`);
  }
  getUserOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.productUrl}users/orders`);
  }
  getAllOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.productUrl}orders`);
  }
  getAllOrdersAdmin(page: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.productUrl}orders?page=${page}`);
  }
  getVendorOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.productUrl}orders/vendor`);
  }
  getVendorOrderStats(): Observable<any[]> {
    return this.http.get<any[]>(`${this.productUrl}users/orders
`);
  }
  getVendorMetric(): Observable<any[]> {
    return this.http.get<any[]>(`${this.productUrl}users/orders`);
  }
  getAllNewArrivals(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.productUrl}products/newly-arrived-brands`
    );
  }
  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.productUrl}categories`);
  }
  addCategory(product: any): Observable<any> {
    return this.http.post<any>(`${this.productUrl}categories`, product);
  }

  getCategoryById(id: any): Observable<any> {
    return this.http.get<any>(`${this.productUrl}categories/` + id);
  }

  updateCategory(id: any, category: any): Observable<any> {
    return this.http.put<any>(`${this.productUrl}categories/${id}`, category);
  }
  deleteCategory(id: any): Observable<any> {
    return this.http.delete<any>(`${this.productUrl}categories/${id}`);
  }
  UpdateProduct(id: any, product: any): Observable<any> {
    return this.http.patch<any>(`${this.productUrl}products/${id}`, product);
  }
  deleteProduct(id: any): Observable<any> {
    return this.http.delete<any>(`${this.productUrl}products/${id}`);
  }
  deleteOrder(id: any): Observable<any> {
    return this.http.delete<any>(`${this.productUrl}orders/${id}`);
  }
  UpdateOrder(data: any, id: any): Observable<any> {
    return this.http.put<any>(`${this.productUrl}orders/${id}`, data);
  }

  // getAllFoodsBySearch(searchTerm: string): Observable<any[]> {
  // return this.getAllProducts().pipe(
  //   map(products => products.filter(x => x.category.toLowerCase().includes(searchTerm.toLowerCase())))
  // );
  // }
}
