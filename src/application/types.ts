export interface UseCase<TInput extends any[], TOutput> {
  execute(...form: TInput): Promise<TOutput>;
}