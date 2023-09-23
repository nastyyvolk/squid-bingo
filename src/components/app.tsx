'use client'

import { findLoser } from '../helpers'
import { drawNums, parsedBoards } from '../data'

export function App() {

  const { score, board } = findLoser(drawNums, parsedBoards)
  return (
    <div>
      <h1>Squid bingo</h1>
      <h2>DrawNums:</h2>
      <p className="draw-nums">{
        drawNums.map((n, i) => <span key={i}>{n}, </span>)
      }</p>

      <h2>Score of the last board -  { score }</h2>
      This board will win the last:
      <div className='board'>
        { board.map((n: string, i: number) => (<p key={i}> {n} | </p>)) }
      </div>
    </div>
  )
}
