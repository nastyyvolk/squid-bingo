

export function checkIfWon(board, i: number) {
  // check row
  const row = Math.floor(i / 5)
  const firstRowIndex = row * 5
  const lastRowIndex = firstRowIndex + 4
  for (let i = firstRowIndex; i <= lastRowIndex; i++) {
    if (board[i] !== '-') break
    if (i === lastRowIndex) return true
  }

  // check column
  const column = i % 5
  const lastColumnIndex = column + 5 * 4
  for(let i = column; i <= lastColumnIndex; i = i + 5) {
    if (board[i] !== '-') break
    if (i === lastColumnIndex) return true
  }
  
  return false
}

export function calculateScore(board: Array<string>, lastNumber: string) {
  const sumOfAll: number =  board.reduce((prev: number, item) => {
    if (item === '-') return prev
    return +item + prev
  }, 0)

  return sumOfAll * +lastNumber
}

export function findLoser(numbers, boards) {
  let biggestIndex = 0
  let loserBoardIndex = 0
  let loserBoard = null
  let lastNum = 0

  for (let j = 0; j < boards.length; j++) {
    const board = [ ...boards[j] ]

    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i]
      const indexInArray = board.indexOf(number)

      if (indexInArray >= 0) board.splice(indexInArray, 1, '-')

      if (i < 4 || !checkIfWon(board, indexInArray)) continue

      if (biggestIndex < i) {
        biggestIndex = i
        loserBoardIndex = j
        loserBoard = board
        lastNum = boards[j][indexInArray]
      }

      break
    }

    if (biggestIndex === numbers.length) break
  }

  return {
    board: boards[loserBoardIndex],
    score: calculateScore(loserBoard, lastNum)
  }
}
