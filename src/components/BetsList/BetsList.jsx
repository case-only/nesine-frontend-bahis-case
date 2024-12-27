import React from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import './style.css'
import columnsHelper from './tableHelpers/columns'
import useBets from '../../hooks/useBets'
import { useBasket } from '../../hooks/useBasket'
import Loading from '../Loading/Loading'

const BetsList = () => {
  const { bets, loading } = useBets()

  const { basketItems } = useBasket()
  const { columns } = columnsHelper(bets, basketItems)
  const table = useReactTable({
    data: bets,
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable: process.env.NODE_ENV === 'development',
  })

  const { rows } = table.getRowModel()

  const parentRef = React.useRef(null)

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40,
    overscan: 5,
  })

  return (
    <div ref={parentRef} className="container">
      {loading ? <Loading /> : <> </>}
      <div style={{ height: `${virtualizer.getTotalSize()}px` }}>
        <table className="bets-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className="bets-info-row" key={headerGroup.id} >

                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(header.column.columnDef.header, header.getContext())}
                        </div>
                      )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {virtualizer.getVirtualItems().map((virtualRow, index) => {
              const row = rows[virtualRow.index]
              return (
                <React.Fragment key={row.id}>
                  <tr
                    className="bets-info-row"
                    style={{
                      height: `${virtualRow.size}px`,
                      transform: `translateY(${virtualRow.start - index * virtualRow.size}px)`,
                    }}
                  >
                    {columns.map((column, index) => {
                      if (column.id === 'title') {
                        return (
                          <td key={`${column.id}-${index}`}>
                            <span>{`${row?.original.D} ${row?.original.DAY} ${row?.original.LN}`}</span>
                          </td>
                        )
                      }
                      return <td key={`${column.id}-${index}`}>{column.header}</td>
                    })}
                  </tr>
                  <tr
                    key={row.id}
                    style={{
                      height: `${virtualRow.size}px`,
                      transform: `translateY(${virtualRow.start - index * virtualRow.size}px)`,
                    }}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      )
                    })}
                  </tr>
                </React.Fragment>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BetsList
