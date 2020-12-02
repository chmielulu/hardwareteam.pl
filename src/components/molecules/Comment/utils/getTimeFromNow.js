import TimeAgo from "javascript-time-ago";
import pl from "javascript-time-ago/locale/pl";

TimeAgo.addDefaultLocale(pl);

export default (timestamp) => {
  const timeAgo = new TimeAgo("pl-PL");

  return timeAgo.format(new Date(timestamp));
};
