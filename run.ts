import { retrieveEnvVariable } from "./src/pools";
import { logger } from "./src/logger";
import Connection from "@solana/web3.js";

const network = "mainnet-beta";
const RPC_ENDPOINT = retrieveEnvVariable("RPC_ENDPOINT", logger);
const RPC_WEBSOCKET = retrieveEnvVariable("RPC_WEBSOCKET", logger);
