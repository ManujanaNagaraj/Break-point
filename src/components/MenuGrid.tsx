import { MENU_DATA } from '../data'
import FoodCard from './FoodCard'

interface MenuGridProps {
  searchQuery: string
  category: string
}

export default function MenuGrid({ searchQuery, category }: MenuGridProps) {
  let filteredItems = MENU_DATA

  // Filter by category
  if (category !== 'all') {
    filteredItems = filteredItems.filter((item) => item.category === category)
  }

  // Filter by search query
  if (searchQuery) {
    const query = searchQuery.toLowerCase()
    filteredItems = filteredItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    )
  }

  if (filteredItems.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground">No items found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {filteredItems.map((item) => (
        <FoodCard key={item.id} item={item} />
      ))}
    </div>
  )
}
