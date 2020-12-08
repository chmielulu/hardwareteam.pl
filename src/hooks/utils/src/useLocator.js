import { useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default () => {
  const [locations, setLocations] = useState([]);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const locationArray = [{ name: "Hardware Team", link: "/" }];

    const pathNames = pathname.split("/");

    let parents = null;

    const mappedPathNames = pathNames.map((path) => {
      if (path === "") {
        return "";
      }

      if (!parents) {
        parents = [path];
        return "";
      }

      const replacedPath = path.replaceAll("-", " ");
      const name =
        replacedPath.toLowerCase().charAt(0).toUpperCase() +
        replacedPath.slice(1);

      let link = "/";
      parents.forEach((parent) => {
        link += `${parent}/`;
      });
      link += path;

      return { name, link };
    });

    const filteredPathNames = mappedPathNames.filter((item) => item !== "");

    locationArray.push(...filteredPathNames);
    setLocations(locationArray);
  }, [pathname]);

  return locations;
};
