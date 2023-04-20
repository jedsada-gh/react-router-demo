import BaseAxios from "./base.axios";

class RemoteA extends BaseAxios {
  constructor() {
    super({ baseURL: "http://localhost:8001/api" });
  }
}

export default RemoteA;
