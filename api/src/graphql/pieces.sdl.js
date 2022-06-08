export const schema = gql`
  type Piece {
    id: String!
    title: String!
    script: String!
    url: String!
    posted: DateTime!
    createdAt: DateTime!
  }

  type Query {
    pieces: [Piece!]! @skipAuth
    piece(id: String!): Piece @skipAuth
  }

  input CreatePieceInput {
    title: String!
    script: String!
    url: String!
    posted: DateTime!
  }

  input UpdatePieceInput {
    title: String
    script: String
    url: String
    posted: DateTime
  }

  type Mutation {
    createPiece(input: CreatePieceInput!): Piece! @requireAuth
    updatePiece(id: String!, input: UpdatePieceInput!): Piece! @requireAuth
    deletePiece(id: String!): Piece! @requireAuth
  }
`
