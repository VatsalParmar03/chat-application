const requiredEnv = (name: string): string => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
};

export const env = {
  databaseUrl: requiredEnv("DATABASE_URL"),
  port: Number(process.env.PORT ?? 5000),
};