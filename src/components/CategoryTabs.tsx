import { CATEGORIES } from '../data'

interface CategoryTabsProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryTabs({
  selectedCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-4">
      {CATEGORIES.map((category) => (
        <button
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedCategory === category.value
              ? 'bg-primary text-primary-foreground shadow-warm-md'
              : 'bg-secondary text-foreground hover:bg-secondary/80'
          }`}
        >
          <span>{category.icon}</span>
          <span>{category.label}</span>
        </button>
      ))}
    </div>
  )
}
