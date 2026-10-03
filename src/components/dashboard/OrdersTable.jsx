import { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown, Search, Package } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { ordersData } from '../../data/orders';
import { formatDate, formatCurrency } from '../../utils/formatters';

export function OrdersTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
    setCurrentPage(1);
  };

  const handleKeyDown = (e, column) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSort(column);
    }
  };

  const filteredOrders = useMemo(() => {
    return ordersData.filter(
      (order) =>
        order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const sortedOrders = useMemo(() => {
    if (!sortColumn) return filteredOrders;
    return [...filteredOrders].sort((a, b) => {
      let aVal = a[sortColumn];
      let bVal = b[sortColumn];
      
      // Convert date strings to Date objects for proper sorting
      if (sortColumn === 'date') {
        aVal = new Date(aVal);
        bVal = new Date(bVal);
      }
      
      // Ensure numeric sorting for amount
      if (sortColumn === 'amount') {
        aVal = Number(aVal);
        bVal = Number(bVal);
      }
      
      const modifier = sortDirection === 'asc' ? 1 : -1;
      
      if (aVal < bVal) return -1 * modifier;
      if (aVal > bVal) return 1 * modifier;
      return 0;
    });
  }, [filteredOrders, sortColumn, sortDirection]);

  const totalPages = Math.ceil(sortedOrders.length / ordersPerPage);
  const paginatedOrders = useMemo(() => {
    const startIdx = (currentPage - 1) * ordersPerPage;
    return sortedOrders.slice(startIdx, startIdx + ordersPerPage);
  }, [sortedOrders, currentPage]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const getStatusVariant = (status) => {
    const variants = {
      Completed: 'success',
      Pending: 'warning',
      Processing: 'info',
      Cancelled: 'danger',
    };
    return variants[status] || 'info';
  };

  const sortableColumns = ['orderId', 'customer', 'date', 'amount', 'status'];

  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-ink">
          Recent Orders
        </h2>
        <Input
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search orders..."
          icon={<Search className="w-4 h-4" />}
          className="w-64"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-line">
          <thead className="bg-table-head">
            <tr>
              {['orderId', 'customer', 'product', 'date', 'amount', 'status'].map((column) => (
                <th
                  key={column}
                  className={`px-6 py-3 text-left text-xs font-medium text-ink uppercase tracking-wider ${
                    sortableColumns.includes(column) ? 'cursor-pointer hover:bg-brand/5' : ''
                  }`}
                  onClick={sortableColumns.includes(column) ? () => handleSort(column) : undefined}
                  onKeyDown={sortableColumns.includes(column) ? (e) => handleKeyDown(e, column) : undefined}
                  tabIndex={sortableColumns.includes(column) ? 0 : undefined}
                  role={sortableColumns.includes(column) ? 'button' : undefined}
                  aria-sort={
                    sortColumn === column
                      ? sortDirection === 'asc'
                        ? 'ascending'
                        : 'descending'
                      : undefined
                  }
                >
                  <div className="flex items-center gap-2">
                    {column === 'orderId' ? 'Order ID' : column.charAt(0).toUpperCase() + column.slice(1)}
                    {sortableColumns.includes(column) && (
                      <>
                        {sortColumn === column ? (
                          sortDirection === 'asc' ? (
                            <ChevronUp className="w-4 h-4 text-brand" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-brand" />
                          )
                        ) : (
                          <ChevronUp className="w-4 h-4 text-muted opacity-40" />
                        )}
                      </>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-line">
            {paginatedOrders.length > 0 ? (
              paginatedOrders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-brand/5 transition-all duration-200 group"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-ink group-hover:translate-x-0.5 transition-transform">
                    {order.orderId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-ink">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 text-sm text-ink">
                    {order.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-ink">
                    {formatDate(order.date)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-ink">
                    {formatCurrency(order.amount)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant={getStatusVariant(order.status)} size="sm">
                      {order.status}
                    </Badge>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center">
                      <Package className="w-8 h-8 text-brand" />
                    </div>
                    <p className="text-ink font-medium">No orders found</p>
                    <p className="text-muted text-sm">Try adjusting your search query</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {sortedOrders.length > 0 && (
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-muted">
            Showing {(currentPage - 1) * ordersPerPage + 1} to{' '}
            {Math.min(currentPage * ordersPerPage, sortedOrders.length)} of{' '}
            {sortedOrders.length} orders
          </p>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={page === currentPage ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
