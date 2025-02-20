import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CategoryType {
  id: number;
  name: string;
}

interface CategoryStore {
  categories: CategoryType[];
  loading: boolean;
  error: string | null;
  fetchCategories: (token: string) => Promise<void>;
}

const useCategoryStore = create(
  persist<CategoryStore>(
    (set) => ({
      categories: [],
      loading: false,
      error: null,

      fetchCategories: async (token: string) => {
        if (!token) return;

        set({ loading: true, error: null });

        try {
          const response = await fetch('https://todo.zmat24.ir/api/category', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Provider: 'atjts55opgIT3TtgRkOg8fuoB5mSWf',
              Authorization: `Bearer ${token}`,
            },
          });

          const res = await response.json();

          if (response.ok) {
            set({ categories: res.categories, loading: false });
          } else {
            set({ error: 'مشکلی در دریافت اطلاعات رخ داد', loading: false });
          }
        } catch (error) {
          console.log(error);
          set({ error: 'ارتباط با سرور ناموفق بود', loading: false });
        }
        
      },
    }),
    { name: 'categories-storage' }
  )
);

export default useCategoryStore;
