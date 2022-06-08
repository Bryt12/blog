import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import PieceForm from 'src/components/Piece/PieceForm'

export const QUERY = gql`
  query EditPieceById($id: String!) {
    piece: piece(id: $id) {
      id
      title
      script
      url
      posted
      createdAt
    }
  }
`
const UPDATE_PIECE_MUTATION = gql`
  mutation UpdatePieceMutation($id: String!, $input: UpdatePieceInput!) {
    updatePiece(id: $id, input: $input) {
      id
      title
      script
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ piece }) => {
  const [updatePiece, { loading, error }] = useMutation(UPDATE_PIECE_MUTATION, {
    onCompleted: () => {
      toast.success('Piece updated')
      navigate(routes.pieces())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updatePiece({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Piece {piece.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PieceForm
          piece={piece}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
