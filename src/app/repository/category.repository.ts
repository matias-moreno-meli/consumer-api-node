import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryRepository {

  categoryKey = 'meli-category';

  saveCategory(path: string): void {
    sessionStorage.setItem(this.categoryKey, JSON.stringify(path));
  }

  getCategory(): string {
    return JSON.parse(sessionStorage.getItem(this.categoryKey));
  }
}
