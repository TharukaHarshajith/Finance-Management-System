const transactionTypeDef = `#graphql
    type Transaction{
        _id: ID!
        userID: ID!
        description:String!
        paymentType:String!
        category:String!
        amount:Float!
        location:String
        date:String!
        user:User!
    }

    type Query{
        transactions:[Transaction!]
        transaction(transactionId:ID!):Transaction
        categoryStatistics:[CategoryStatistics!]
    }

    

    type Mutation{
        createTransaction(input:createTransactionInput!):Transaction!
        updateTransaction(input:updateTransactionInput!):Transaction!
        deleteTransaction(transactionId:ID!):Transaction! 
    }

    type CategoryStatistics {
    category: String!
    totalAmount: Float!  }

    input createTransactionInput{
        description:String!
        paymentType:String!
        category:String!
        amount:Float!
        date:String!
        location:String
    }

    input updateTransactionInput{
        transactionId:ID!
        description:String
        paymentType:String
        category:String
        amount:Float
        location:String
        date:String
    }


`

export default transactionTypeDef;