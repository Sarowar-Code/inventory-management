import { Table } from '../../components/ui/Table'
import products from '../../data/products.json'

export default function InventoryPage() {
  return (
    <div className="h-full p-3 sm:p-4 md:p-6 flex flex-col">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-deepblue-400">Inventory Management</h1>
      <div className="flex-1 overflow-hidden flex flex-col">
        <Table data={products} />
      </div>
    </div>
  )
}
