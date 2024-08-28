import { Logger } from "pino";

export const retrieveEnvVariable = (variableName: string, logger: Logger) => {
  const variable = process.env[variableName] || "";
  if (!variable) {
    logger.error(`${variableName} not set`);
    process.exit(1);
  }
  return variable;
};
