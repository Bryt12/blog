import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PieceForm from 'src/components/Piece/PieceForm'

const CREATE_PIECE_MUTATION = gql`
  mutation CreatePieceMutation($input: CreatePieceInput!) {
    createPiece(input: $input) {
      id
    }
  }
`

const NewPiece = () => {
  const [createPiece, { loading, error }] = useMutation(CREATE_PIECE_MUTATION, {
    onCompleted: () => {
      toast.success('Piece created')
      navigate(routes.pieces())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    input.posted = new Date(input.posted)
    createPiece({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Piece</h2>
      </header>
      <div className="rw-segment-main">
        <PieceForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPiece
