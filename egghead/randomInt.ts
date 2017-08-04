export function randomInt(start: number, before: number): number {
  return start + Math.floor(Math.random() * (before - start));
}

for (let i = 0; i < 20; i++) {
  console.log(randomInt(2, 6))
}

