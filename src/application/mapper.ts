export interface IMapper<TDomain, TView> {
  toDomain(view: TView): TDomain;

  toView(domain: TDomain): TView;
}
