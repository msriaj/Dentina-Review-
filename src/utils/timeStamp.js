import moment from "moment-timezone";

export const timeStamp = (format) =>
  moment.tz(Date.now(), "Asia/Dhaka").format(format);
