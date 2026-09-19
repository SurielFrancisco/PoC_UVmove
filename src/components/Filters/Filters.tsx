interface FiltersProps {
  locationFilter: string;
  setLocationFilter: (location: string) => void;
  typeFilter: string;
  setTypeFilter: (type: string) => void;
}

export const Filters = ({
  locationFilter,
  setLocationFilter,
  typeFilter,
  setTypeFilter,
}: FiltersProps) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-uv-border mx-4 mt-6 mb-6">
      <h2 className="text-xs font-bold text-uv-text-sub tracking-wider mb-4 uppercase">Filtrar</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-xs text-uv-text-sub mb-1.5">Ubicación</label>
          <div className="relative">
            <select 
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full bg-uv-bg text-uv-text-main text-sm rounded-lg px-3 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-uv-blue border-none cursor-pointer"
            >
              <option value="Todas las estaciones">Todas las estaciones</option>
              <option value="Estación Biblioteca">Estación Biblioteca</option>
              <option value="Estación Rectoría">Estación Rectoría</option>
              <option value="Facultad de Ingeniería">Facultad de Ingeniería</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-uv-text-sub">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs text-uv-text-sub mb-1.5">Tipo</label>
          <div className="relative">
            <select 
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full bg-uv-bg text-uv-text-main text-sm rounded-lg px-3 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-uv-blue border-none cursor-pointer"
            >
              <option value="Todos los tipos">Todos los tipos</option>
              <option value="Scooter">Scooter</option>
              <option value="Bicicleta">Bicicleta</option>
            </select>
             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-uv-text-sub">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
