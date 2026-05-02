const ProductDetailSkeleton = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid animate-pulse gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-2">
        <div className="flex min-h-96 items-center justify-center rounded-xl bg-slate-50 p-6">
          <div className="h-72 w-full max-w-sm rounded-xl bg-slate-200" />
        </div>

        <div className="flex flex-col">
          <div className="h-6 w-28 rounded-full bg-slate-200" />

          <div className="mt-5 space-y-3">
            <div className="h-8 w-11/12 rounded-lg bg-slate-200" />
            <div className="h-8 w-8/12 rounded-lg bg-slate-200" />
          </div>

          <div className="mt-6 space-y-3">
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-4 w-10/12 rounded bg-slate-200" />
            <div className="h-4 w-7/12 rounded bg-slate-200" />
          </div>

          <div className="mt-8 h-10 w-36 rounded-lg bg-slate-200" />

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="h-10 w-28 rounded-lg bg-slate-200" />
            <div className="h-10 w-32 rounded-lg bg-slate-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSkeleton;
