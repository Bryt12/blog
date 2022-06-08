import { db } from 'src/lib/db'

export const pieces = () => {
  return db.piece.findMany({ orderBy: { posted: 'desc' } })
}

export const piece = ({ id }) => {
  return db.piece.findUnique({
    where: { id },
  })
}

export const createPiece = ({ input }) => {
  return db.piece.create({
    data: input,
  })
}

export const updatePiece = ({ id, input }) => {
  return db.piece.update({
    data: input,
    where: { id },
  })
}

export const deletePiece = ({ id }) => {
  return db.piece.delete({
    where: { id },
  })
}
