import { formatDuration, format, intervalToDuration } from "date-fns";

export function getYearsOfExperience() {
  const duration = intervalToDuration({
    start: new Date("2019-01-01"),
    end: new Date(),
  });

  return duration.years;
}

export interface GetFormattedDurationOptions {
  startDate: Date | number | string;
  endDate?: Date | number | string | null;
}

export function getFormattedDuration({
  startDate,
  endDate = null,
}: GetFormattedDurationOptions) {
  const start = new Date(startDate);

  if (!endDate) {
    return `${format(start, "MM/yyyy")} - Present`;
  }

  const end = new Date(endDate);

  const duration = intervalToDuration({
    start,
    end,
  });
  return `${format(start, "MM/yyyy")} - ${format(
    end,
    "MM/yyyy"
  )} (${formatDuration(duration, { format: ["years", "months"] })})`;
}
