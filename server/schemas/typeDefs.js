const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    bookCount: Int
    username: String
    email:String
    savedBooks: [Book]
}
 
type Auth {
    token:ID
    user: User
}
    type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

input InputBook {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Query {
    me: User
}
    type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username:String!, email: String!, password: String!):Auth
    saveBook(newBook: InputBook!):User
    removeBook(bookId: ID!): User
}

`;
module.exports = typeDefs;