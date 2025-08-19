import { getCategories } from "@/app/actions/categories";

export const CategorySection = async () => {
  const categories = await getCategories();

  return (
    <div>
      {categories.map((category) => (
        <h3>{category.name}</h3>
      ))}
    </div>
  );
};
