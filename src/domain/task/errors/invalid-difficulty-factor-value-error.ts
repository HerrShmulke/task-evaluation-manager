export class InvalidDifficultyFactorValueError extends Error {
  constructor() {
    super('Difficulty factor value cannot be less than 0');
  }
}
