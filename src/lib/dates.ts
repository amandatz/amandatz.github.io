import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

export const formatDate = (date: string) => {
    const dateObj = dayjs(date);
    return dateObj.format("MMMM DD, YYYY");
}