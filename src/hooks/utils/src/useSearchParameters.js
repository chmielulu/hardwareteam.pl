import { useLocation } from "react-router-dom";
import qs from "qs";

export default () => {
  const { search } = useLocation();
  const params = qs.parse(search, { ignoreQueryPrefix: true });

  return params;
};
