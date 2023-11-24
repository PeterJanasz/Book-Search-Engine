const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input BookInput {   
        bookId: String!
        authors: [String]
        title: String!
        description: String
        image: String!
        link: String!
    }

    type Query {
        getAllUsers: [User]!
        getSingleUser(userId: ID!): User
        me: User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth

        saveBook(bookDetails: BookInput!): User
        deleteBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;