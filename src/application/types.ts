export interface UseCase<TInput extends unknown[], TOutput> {
  execute(...form: TInput): Promise<TOutput>;
}
