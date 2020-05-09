import {
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
} from "../../constants/time";

const openTime = 1600;
const openTimeLong = 1200;
const closeTime = 2130;
const longHoursDays = [FRIDAY, SATURDAY, SUNDAY];
const openDays = [TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY];

export const isStoreOpen = date => {
  date.setHours(date.getHours() - 5);
  const isOpenToday = openDays.includes(date.getUTCDay());
  const isLongHoursDay = longHoursDays.includes(date.getUTCDay());
  const openTimeToday = isLongHoursDay ? openTimeLong : openTime;
  const currentTime = date.getUTCHours() * 100 + date.getUTCMinutes();
  const isOpenTime = currentTime >= openTimeToday && currentTime < closeTime;

  return isOpenToday && isOpenTime;
};
