import React from 'react'
import { useBasket } from '../../../hooks/useBasket'

const columnsHelper = (data, basketItems) => {
  const { toggleBet, isBetSelected } = useBasket()
  const columns = React.useMemo(
    () => [
      {
        id: 'title',
        header: () => <span>Event count: {data.length}</span>,
        accessorFn: (row) => ({ C: row.C, T: row.T, N: row.N }),
        cell: (info) => (
          <span>
            <b>{`${info.getValue().C}`}</b>
            <span>{`${info.getValue().T} ${info.getValue().N}`}</span>
          </span>
        ),
        size: 300,
      },
      {
        id: 'comment',
        header: 'Yorumlar',
        accessorFn: () => 'Yorumlar',
        cell: (info) => info.getValue(),
        size: 80,
      },
      {
        id: 'e1',
        header: ' ',
        accessorFn: (row) => row,
        cell: (info) => (
          <div>
            <span>{info.getValue().OCG['1'].MBS}</span>
          </div>
        ),
        size: 30,
      },
      {
        id: 'd2',
        header: '1',
        accessorFn: (row) => row,
        cell: (info) => (
          <div
            className={
              isBetSelected(info.getValue().NID, info.getValue().OCG['1'].OC['0'].ID)
                ? 'selectable-item-active'
                : 'selectable-item'
            }
            onClick={() => toggleBet(info.getValue(), info.getValue().OCG['1'].OC['0'])}
          >
            <span>{info.getValue().OCG['1'].OC['0'].O}</span>
          </div>
        ),
      },
      {
        id: 'd3',
        header: 'x',
        accessorFn: (row) => row,
        cell: (info) => (
          <div
            className={
              isBetSelected(info.getValue().NID, info.getValue().OCG['1'].OC['1'].ID)
                ? 'selectable-item-active'
                : 'selectable-item'
            }
            onClick={() => toggleBet(info.getValue(), info.getValue().OCG['1'].OC['1'])}
          >
            <span>{info.getValue().OCG['1'].OC['1'].O}</span>
          </div>
        ),
      },
      {
        id: 'e4',
        header: '2',
        size: 30,
      },
      {
        id: 'd5',
        header: 'Alt',
        accessorFn: (row) => row,
        cell: (info) => (
          <div
            className={
              isBetSelected(info.getValue().NID, info.getValue().OCG['5'].OC['25'].ID)
                ? 'selectable-item-active'
                : 'selectable-item'
            }
            onClick={() => toggleBet(info.getValue(), info.getValue().OCG['5'].OC['25'])}
          >
            <span>{info.getValue().OCG['5'].OC['25'].O}</span>
          </div>
        ),
      },
      {
        id: 'd6',
        header: 'Üst',
        accessorFn: (row) => row,
        cell: (info) => (
          <div
            className={
              isBetSelected(info.getValue().NID, info.getValue().OCG['5'].OC['26'].ID)
                ? 'selectable-item-active'
                : 'selectable-item'
            }
            onClick={() => toggleBet(info.getValue(), info.getValue().OCG['5'].OC['26'])}
          >
            <span>{info.getValue().OCG['5'].OC['26'].O}</span>
          </div>
        ),
      },
      {
        id: 'e7',
        header: 'H1',
        size: 30,
      },
      {
        id: 'e8',
        header: '1',
        size: 30,
      },
      {
        id: 'e9',
        header: 'x',
        size: 30,
      },
      {
        id: 'e10',
        header: '2',
        size: 30,
      },
      {
        id: 'e11',
        header: 'H2',
        size: 30,
      },
      {
        id: 'd12',
        header: '1-x',
        accessorFn: (row) => row,
        cell: (info) => (
          <div
            className={
              isBetSelected(info.getValue().NID, info.getValue().OCG['2'].OC['3'].ID)
                ? 'selectable-item-active'
                : 'selectable-item'
            }
            onClick={() => toggleBet(info.getValue(), info.getValue().OCG['2'].OC['3'])}
          >
            <span>{info.getValue().OCG['2'].OC['3'].O}</span>
          </div>
        ),
      },
      {
        id: 'd13',
        header: '1-2',
        accessorFn: (row) => row,
        cell: (info) => (
          <div
            className={
              isBetSelected(info.getValue().NID, info.getValue().OCG['2'].OC['4'].ID)
                ? 'selectable-item-active'
                : 'selectable-item'
            }
            onClick={() => toggleBet(info.getValue(), info.getValue().OCG['2'].OC['4'])}
          >
            <span>{info.getValue().OCG['2'].OC['4'].O}</span>
          </div>
        ),
      },
      {
        id: 'd14',
        header: 'x-2',
        accessorFn: (row) => row,
        cell: (info) => (
          <div
            className={
              isBetSelected(info.getValue().NID, info.getValue().OCG['2'].OC['5'].ID)
                ? 'selectable-item-active'
                : 'selectable-item'
            }
            onClick={() => toggleBet(info.getValue(), info.getValue().OCG['2'].OC['5'])}
          >
            <span>{info.getValue().OCG['2'].OC['5'].O}</span>
          </div>
        ),
      },
      {
        id: 'e15',
        header: 'Var',
        size: 30,
      },
      {
        id: 'e16',
        header: 'Yok',
        size: 30,
      },
      {
        id: 'e17',
        header: '+99',
        cell: () => '3',
        size: 30,
      },
    ],
    [data, basketItems],
  )
  return { columns }
}

export default columnsHelper
