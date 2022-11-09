import moment from "moment-timezone";

export const timeStamp = (oldDate, format) =>
  moment.tz(oldDate, "Asia/Dhaka").format(format);
