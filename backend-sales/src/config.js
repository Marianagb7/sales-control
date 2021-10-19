import { config } from "dotenv";
config();

const configurations = {
    
  DB_URI: `mongodb+srv://${process.env.DB_USER ||"mari_79"}:${process.env.DB_PASS || "24657845P"}@${process.env.DB_HOST || "cluster0.c72ae.mongodb.net"}/${process.env.DB_NAME ||"sales-control"}?retryWrites=true&w=majority }`,
};

export default configurations;