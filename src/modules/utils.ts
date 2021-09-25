import { days, months } from "app/schemas/form-data";
import { Entry } from "app/schemas/types";

const getBirthday = (birthday: Date): Date => new Date(birthday);

const getAge = (birthday: Date) =>
  Math.floor(
    (new Date().valueOf() - getBirthday(birthday).getTime()) / 3.15576e10
  );

const getFullName = (name: string, surname: string): string =>
  `${name} ${surname}`;

const getDay = (date: Date): string => days[date.getDay()];

const getMonth = (date: Date): string => months[date.getMonth()];

const getNextYearsAge = (birthday: Date): string =>
  (getAge(birthday) + 1).toString();

const getModifiedMessage = (message: string, data: { [x: string]: any }) => {
  message = message
    .replace("{name}", data.name)
    .replace("{country}", data.country)
    .replace("{day}", getDay(getBirthday(data.birthday)))
    .replace("{month}", getMonth(getBirthday(data.birthday)))
    .replace("{years}", getNextYearsAge(getBirthday(data.birthday)));

  return message;
};

export const getSuccessMessageFromData = (
  message: string,
  data: { [x: string]: any }
) => {
  data.name = getFullName(data.name, data.surname);
  return getModifiedMessage(message, data);
};

export const getSuccessMessageFromEntry = (
  message: string,
  entry: { [x: string]: any }
) => getModifiedMessage(message, entry);

export const getEntry = (data: { [x: string]: any }) => {
  const entry: Entry = {
    name: `${data.name} ${data.surname}`,
    country: data.country,
    birthday: getBirthday(data.birthday).toLocaleDateString("en-US"),
  };

  return entry;
};
