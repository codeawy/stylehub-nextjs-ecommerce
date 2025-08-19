import dynamic from "next/dynamic";
import CategorySectionSkeleton from "@/components/skeletons/CategoryCard";

const CategorySection = dynamic(
  () =>
    import("@/components/CategorySection").then((mod) => ({
      default: mod.CategorySection,
    })),
  {
    loading: () => <CategorySectionSkeleton />,
    ssr: true,
  }
);

export default function Home() {
  return (
    <div>
      <div className="text-4xl font-bold">StyleHub</div>

      <CategorySection />
    </div>
  );
}
