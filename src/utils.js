import packageJson from "../package.json";

export const getServerAdress = () => {
  let oRes = "";
  if (process.env.NODE_ENV === "development") {
    oRes = "http://localhost:5000";
  } else {
    oRes = packageJson.server;
  }

  return oRes;
};
