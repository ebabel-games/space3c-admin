import { Mission } from './mission';

export interface Player {
  id: string;
  maxHitPoints: number;
  hitPoints: number;
  level: number;
  x: number;
  y: number;
  mission: Mission;
}
