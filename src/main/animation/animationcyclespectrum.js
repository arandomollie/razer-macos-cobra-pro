import { RazerAnimationCycle } from './animationcycle';

export class RazerAnimationCycleSpectrum extends RazerAnimationCycle {
  constructor(razerApp) {
    super(razerApp);
    this.cycleColors = [
      { r: 0xff, g: 0x00, b: 0x00 },
      { r: 0xff, g: 0x77, b: 0x00 },
      { r: 0xff, g: 0xff, b: 0x00 },
      { r: 0x77, g: 0xff, b: 0x00 },
      { r: 0x00, g: 0xff, b: 0x00 },
      { r: 0x00, g: 0xff, b: 0x77 },
      { r: 0x00, g: 0xff, b: 0xff },
      { r: 0x00, g: 0x77, b: 0xff },
      { r: 0x00, g: 0x00, b: 0xff },
      { r: 0x77, g: 0x00, b: 0xff },
      { r: 0xff, g: 0x00, b: 0xff },
      { r: 0xff, g: 0x00, b: 0x77 },
    ];
  }
}
