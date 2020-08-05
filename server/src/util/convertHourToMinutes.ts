export default function hourToMinute(input: string): number {
  const [hours, minutes] = input.split(":").map(Number);

  return hours * 60 + minutes;
}
