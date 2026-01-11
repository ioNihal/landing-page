import Searchbox from "@/components/Hero/Searchbox";
import ExploreCategories from "@/components/Shared/ExploreCategories";
import FAQSection from "@/components/Shared/FAQSection";
import FeaturedTools from "@/components/Shared/FeaturedTools";
import Newsletter from "@/components/Shared/Newsletter";
import ReviewSection from "@/components/Shared/ReviewSection";
import ToolCardTopicPage from "@/components/TopicPage/ToolCardTopicPage";
import DropDownSelect from "@/components/ui/DropDownSelect";
import { Check } from "lucide-react";
import Image from "next/image";
import { SELECT_OPTIONS, tools } from "../../_tools-category/topic-page/page";
import Link from "next/link";
import { CATEGORIES } from "../page";

const normalizeString = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;

  const matchedCategory = CATEGORIES.find(cat =>
    cat.subcategories.some(sub => sub.slug === category)
  );

  const matchedSubcategory = matchedCategory?.subcategories.find(
    sub => sub.slug === category
  );

  const catTitle = matchedCategory?.title ?? null;
  const subcatTitle = matchedSubcategory?.title ?? null;

  if (!matchedCategory || !matchedSubcategory) {
    return <main className="grow relative text-white flex items-center justify-center">
      Catgory Not Found
      </main>
  }


  return (
    <main className="relative isolate bg-slate-950 text-white">
      { /* Background */}
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-purple-500/10 to-green-400/20" />

      {/* breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="absolute top-6 left-6 z-20"
      >
        <ol className="flex items-center gap-2 text-xs text-slate-300">
          <li>
            <Link
              href="/"
              className="hover:text-white transition"
            >
              Home
            </Link>
          </li>

          <li className="opacity-60">/</li>

          <li>
            <Link
              href={`/collections/${normalizeString(catTitle || "")}`}
              className="hover:text-white transition"
            >
              {catTitle}
            </Link>
          </li>

          <li className="opacity-60">/</li>

          <li className="text-white font-medium">
            {subcatTitle}
          </li>
        </ol>
      </nav>



      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* badge text */}
        <div className="flex items-center justify-center gap-2 w-max mx-auto
                     bg-linear-to-r from-cyan-400/20 to-purple-400/20 rounded-full
                     p-5 py-2 backdrop-blur-sm text-xs border border-cyan-400/30">
          <span>{catTitle}</span>
        </div>

        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-bold
                    bg-linear-to-r from-cyan-400 to-purple-400
                    bg-clip-text text-transparent">
          {subcatTitle}
        </h1>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Compare 3 AI {subcatTitle} tools. Find free trials, pricing, and real user reviews.
        </p>

        {/* Searchbox */}
        <Searchbox />


        <ul className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-3 text-sm">
          <li className="flex items-center gap-3"><Check size={20} className="text-green-600" />Updated Weekly</li>
          <li className="flex items-center gap-3"><Check size={20} className="text-green-600" />50k+ Users Trust Us</li>
          <li className="flex items-center gap-3"><Check size={20} className="text-green-600" />Verified Reviews</li>
        </ul>

        <div className=" flex flex-col lg:flex-row items-center justify-center mt-10 gap-6">
          <div className="flex -space-x-3">
            <Image src={'/avatars/1.png'} alt="avatar-one" height={64} width={64} className="w-10 h-10" />
            <Image src={'/avatars/2.png'} alt="avatar-two" height={64} width={64} className="w-10 h-10" />
            <Image src={'/avatars/3.png'} alt="avatar-three" height={64} width={64} className="w-10 h-10" />
          </div>
          <p className="text-sm  bg-linear-to-r from-amber-400 to-red-300 bg-clip-text text-transparent font-bold">&ldquo;Join 50,000+ AI enthusiasts finding better tools&rdquo;</p>
        </div>

      </div>

      <div className="bg-slate-950 py-10">
        <div className="max-w-7xl mx-auto pb-10 px-4 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-3 lg:gap-0">
            <h2 className="text-lg lg:text-2xl font-semibold">Best AI {subcatTitle} Tools to Explore in 2025</h2>
            <DropDownSelect options={SELECT_OPTIONS} />
          </div>
        </div>
        <div className="max-w-7xl mx-auto pb-10 px-4 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          {/* main content */}
          <div className="space-y-6">
            <div className="space-y-6">
              {tools.map((tool) => (
                <ToolCardTopicPage key={tool.id} tool={tool} />
              ))}
            </div>

            {/* faq */}
            <FAQSection />

            {/* review */}
            <ReviewSection />
          </div>

          {/* sidebar */}
          <aside className="space-y-6">
            {/* newsletter */}
            <Newsletter />

            {/* featured tools */}
            <FeaturedTools />
          </aside>
        </div>
      </div>

      {/* Explore tools categories */}
      <section className="bg-slate-950 ">
        <ExploreCategories />
      </section>

    </main>
  )
}
