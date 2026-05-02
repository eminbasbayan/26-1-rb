import { Plus, Search } from 'lucide-react';

const AdminSectionPage = ({ title, description, columns, rows }) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-fuchsia-700">Admin</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
            {title}
          </h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
            {description}
          </p>
        </div>

        <button
          type="button"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          <Plus size={17} />
          Yeni Ekle
        </button>
      </div>

      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex min-h-10 flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-500">
          <Search size={17} />
          <input
            type="search"
            placeholder={`${title} içinde ara`}
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </label>

        <select className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-600 outline-none">
          <option>Aktif kayıtlar</option>
          <option>Tüm kayıtlar</option>
          <option>Arşiv</option>
        </select>
      </div>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                {columns.map((column) => (
                  <th key={column} className="px-4 py-3 font-bold">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td
                      key={`${row[0]}-${cell}`}
                      className={`px-4 py-3 ${
                        index === 0
                          ? 'font-semibold text-slate-950'
                          : 'text-slate-600'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminSectionPage;
