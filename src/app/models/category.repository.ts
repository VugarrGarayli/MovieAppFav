import { Category } from './category';

export class CategoryRepository {
  private categories: Category[];
  constructor() {
    this.categories = [
      { id: 1, name: 'Adventure' },
      { id: 2, name: 'Romantic' },
      { id: 3, name: 'Sci-Fi' },
      { id: 4, name: 'Comedy' },
      { id: 5, name: 'Action' },
      { id: 6, name: 'Fantasy' },
      { id: 7, name: 'Mystery' },
    ];
  }

  getCategories() {
    return this.categories;
  }
}
