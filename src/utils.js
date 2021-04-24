export const getServerAdress = () => {
  let oRes = "";
  if (process.env.NODE_ENV === "development") {
    oRes = "http://localhost:5000";
  } else {
    oRes = "https://www.heroku.com/";
  }

  return oRes;
};
