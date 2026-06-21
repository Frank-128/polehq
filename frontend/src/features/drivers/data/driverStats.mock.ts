export interface DriverStats {
  position: number;
  points: number;
  wins: number;
  podiums: number;
  avgFinish: number;
}

const statsByNumber: Record<number, DriverStats> = {
  1: { position: 1, points: 161, wins: 4, podiums: 6, avgFinish: 1.8 },
  16: { position: 2, points: 113, wins: 2, podiums: 5, avgFinish: 3.2 },
  11: { position: 3, points: 107, wins: 1, podiums: 4, avgFinish: 4.1 },
  4: { position: 4, points: 101, wins: 1, podiums: 4, avgFinish: 4.5 },
  44: { position: 5, points: 98, wins: 0, podiums: 3, avgFinish: 5.2 },
  63: { position: 6, points: 74, wins: 0, podiums: 2, avgFinish: 6.1 },
  55: { position: 7, points: 62, wins: 0, podiums: 2, avgFinish: 7.4 },
  14: { position: 8, points: 47, wins: 0, podiums: 1, avgFinish: 8.2 },
  18: { position: 9, points: 28, wins: 0, podiums: 1, avgFinish: 9.6 },
  22: { position: 10, points: 19, wins: 0, podiums: 0, avgFinish: 11.2 },
  23: { position: 11, points: 14, wins: 0, podiums: 0, avgFinish: 12.4 },
  27: { position: 12, points: 8, wins: 0, podiums: 0, avgFinish: 13.8 },
  31: { position: 13, points: 4, wins: 0, podiums: 0, avgFinish: 14.6 },
  10: { position: 14, points: 2, wins: 0, podiums: 0, avgFinish: 15.2 },
  77: { position: 15, points: 1, wins: 0, podiums: 0, avgFinish: 16.4 },
  24: { position: 16, points: 0, wins: 0, podiums: 0, avgFinish: 17.8 },
  20: { position: 17, points: 0, wins: 0, podiums: 0, avgFinish: 18.2 },
  3: { position: 18, points: 0, wins: 0, podiums: 0, avgFinish: 19.1 },
  2: { position: 19, points: 0, wins: 0, podiums: 0, avgFinish: 19.8 },
  81: { position: 20, points: 0, wins: 0, podiums: 0, avgFinish: 20.4 },
};

export function getDriverStats(driverNumber: number): DriverStats {
  return (
    statsByNumber[driverNumber] ?? {
      position: 99,
      points: 0,
      wins: 0,
      podiums: 0,
      avgFinish: 0,
    }
  );
}
