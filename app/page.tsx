import dynamic from "next/dynamic";
import CategorySectionSkeleton from "@/components/skeletons/CategoryCard";
import SectionHeader from "@/components/SectionHeader";

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
    <div className="container px-4 mx-auto">
      <div className="text-4xl font-bold">StyleHub</div>
      <div>
        {/* Section Header */}
        <SectionHeader
          title="Shop by Category"
          description="Browse our collections and find your perfect style"
        />
        {/* Category Section */}
        <CategorySection />
      </div>
    </div>
  );
}
