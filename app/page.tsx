import dynamic from "next/dynamic";

const CategorySection = dynamic(
  () =>
    import("@/components/CategorySection").then((mod) => ({
      default: mod.CategorySection,
    })),
  {
    loading: () => <h3>Loading Categories</h3>,
    ssr: true,
  }
);

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="text-4xl font-bold">StyleHub</div>

      <CategorySection />
    </div>
  );
}
