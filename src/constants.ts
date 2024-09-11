import { Commitment } from "@solana/web3.js";
import { logger } from "./logger";
import { retrieveEnvVariable } from "./tokens";

export const NETWORK = "mainnet-beta";
export const COMMITMENT_LEVEL: Commitment = retrieveEnvVariable(
  "COMMITMENT_LEVEL",
  logger
) as Commitment;
export const RPC_ENDPOINT = retrieveEnvVariable("RPC_ENDPOINT", logger);
export const RPC_WEBSOCKET = retrieveEnvVariable("RPC_WEBSOCKET", logger);
export const LOG_LEVEL = retrieveEnvVariable("LOG_LEVEL", logger);
export const MINT_IS_RENOUNCED =
  retrieveEnvVariable("MINT_IS_RENOUNCED", logger) === "true";
export const USE_SNIPEDLIST =
  retrieveEnvVariable("USE_SNIPEDLIST", logger) === "true";
export const SNIPE_LIST_REFRESH_INTERVAL = Number(
  retrieveEnvVariable("SNIPE_LIST_REFRESH_INTERVAL", logger)
);
export const AUTO_SELL = retrieveEnvVariable("AUTO_SELL", logger) === "true";
export const MAX_SELL_RETRIES = Number(
  retrieveEnvVariable("MAX_SELL_RETRIES", logger)
);
export const AUTO_SELL_DELAY = Number(
  retrieveEnvVariable("AUTO_SELL_DELAY", logger)
);
export const MY_PRIVATE_KEY = retrieveEnvVariable("MY_PRIVATE_KEY", logger);
export const TOKEN_SYMB = retrieveEnvVariable("TOKEN_SYMB", logger);
export const BUY_AMOUNT = retrieveEnvVariable("BUY_AMOUNT", logger);
export const ENABLE_BUY = retrieveEnvVariable("ENABLE_BUY", logger) === "true";
export const MIN_POOL_SIZE = retrieveEnvVariable("MIN_POOL_SIZE", logger);
export const MAX_POOL_SIZE = retrieveEnvVariable("MAX_POOL_SIZE", logger);
