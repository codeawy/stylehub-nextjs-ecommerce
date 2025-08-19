import { getCategories } from "@/app/actions/categories";
import CategoryCard from "./CategoryCard";

export const CategorySection = async () => {
  const categories = await getCategories();

  return (
    <section>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};
