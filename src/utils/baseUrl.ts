const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEVSERVER
    : process.env.NEXT_PUBLIC_PRODSERVER;

export default baseUrl;
