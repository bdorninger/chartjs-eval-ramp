export interface Point {
  x: number;
  y: number;
}

export function toRamp(points: Point[]) {
  return toEstherRampAlt(points);
}

export function toEstherRamp(origPoints: Point[]) {
  const points = structuredClone(origPoints);
  for (let i = 1; i < points.length - 2; i = i + 2) {
    points[i + 1].x = points[i].x;
    points[i].y = points[i - 1].y;
  }
  points[points.length - 2].y = points[points.length - 3].y;

  return points;
}

export function toEstherRampAlt(origPoints: Point[]) {
  const points = structuredClone(origPoints);
  for (let i = 1; i < points.length - 2; i = i + 2) {
    points[i + 1].x = points[i].x;
    points[i].y = points[i - 1].y;
  }
  points[points.length - 1].y = points[points.length - 2].y;

  return points;
}
