import createuuid from "uuid";

const uuidFunc =
  process.env.NODE_ENV === "development"
  ? () => "$uuid$"
  : createuuid;

export default uuidFunc;
