const { GraphQLServer } = require("graphql-yoga");
const Config = require("./revoltConfig/serverconfig")
const resolvers = require("./resolvers")
const CUSTOMER_DETAILS = require("./revoltModels/bookingModels").CUSTOMER_DETAILS;
const { logger } = require("./utils");
//---------------------------------------------------------------------------------
const server = new GraphQLServer({ typeDefs: "./schema.graphql", resolvers })
server.start(Config.GraphQlserverOptions, ({ port }) => logger('Server is running on localhost :', port, "separator"))
