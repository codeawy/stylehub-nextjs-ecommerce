import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/interface/category";
import Link from "next/link";

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link href={`/category?category=${category.slug}`}>
      <Card className="overflow-hidden h-[300px] transition-all hover:shadow-lg py-0">
        <CardContent className="p-0 h-full relative">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-105"
            style={{
              backgroundImage: `url(${
                category.image ?? "/assets/placeholder.svg"
              })`,
            }}
          />
          <div className="absolute inset-0 bg-black/30 hover:bg-black/40 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white">{category.name}</h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
