import { retrieveEnvVariable } from "./src/pools";
import { logger } from "./src/logger";
import { Connection, PublicKey } from "@solana/web3.js";
import { Liquidity, LiquidityPoolKeys } from "@raydium-io/raydium-sdk";
import { MinimalMarketLayoutV3 } from "./src/tokens";

const network = "mainnet-beta";
const RPC_ENDPOINT = retrieveEnvVariable("RPC_ENDPOINT", logger);
const RPC_WEBSOCKET = retrieveEnvVariable("RPC_WEBSOCKET", logger);

const solanaConnection = new Connection(RPC_ENDPOINT, {
  wsEndpoint: RPC_WEBSOCKET,
});

export type MinimalTokenAccountData = {
  mint: PublicKey;
  address: PublicKey;
  buyValue?: number;
  poolKeys?: LiquidityPoolKeys;
  market?: MinimalMarketLayoutV3;
};
