'use client'
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  Pagination as ShadCnPagination,
} from '@/components/ui/pagination'
import { usePagination } from '@/hooks/use-pagination'
import { cn } from '@/lib/utils'
import { Button } from '@/components/tsxforge/button'

type PaginationProps = {
  currentPage: number
  totalPages: number
  paginationItemsToDisplay?: number
  onChange?: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  paginationItemsToDisplay = 5,
  onChange,
}: PaginationProps) {
  const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
    currentPage,
    totalPages,
    paginationItemsToDisplay,
  })

  const handlePageChange = (page: number) => {
    if (onChange && page !== currentPage) {
      onChange(page)
    }
  }

  if (Number(totalPages) === 1 || !totalPages) return null

  return (
    <ShadCnPagination>
      <PaginationContent>
        {/* Previous page button */}
        <PaginationItem>
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            size="icon-lg"
            className={cn(
              'aria-disabled:pointer-events-none aria-disabled:opacity-50',
              'hover:bg-accent hover:text-accent-foreground',
            )}
            variant={currentPage === 1 ? 'flat' : 'default'}
            disabled={currentPage === 1}
            aria-disabled={currentPage === 1}
          >
            <PaginationPrevious className="p-0" />
          </Button>
        </PaginationItem>

        {/* Left ellipsis (...) */}
        {showLeftEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Page number buttons */}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <button
              onClick={() => handlePageChange(page)}
              className={cn(
                'rounded-full bg-muted text-accent-foreground size-11 transition-all duration-300',
                'hover:bg-accent hover:text-accent-foreground',
                page === currentPage &&
                  'bg-primary border-0 hover:bg-primary text-foreground hover:text-foreground',
              )}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          </PaginationItem>
        ))}

        {/* Right ellipsis (...) */}
        {showRightEllipsis && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next page button */}
        <PaginationItem>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            size="icon-lg"
            className={cn(
              'aria-disabled:pointer-events-none aria-disabled:opacity-50',
              'hover:bg-accent hover:text-accent-foreground',
            )}
            variant={currentPage === totalPages ? 'flat' : 'default'}
            disabled={currentPage === totalPages}
            aria-disabled={currentPage === totalPages}
          >
            <PaginationNext className="p-0" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </ShadCnPagination>
  )
}
