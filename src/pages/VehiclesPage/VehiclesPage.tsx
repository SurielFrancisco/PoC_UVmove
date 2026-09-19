import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Filters } from '../../components/Filters/Filters';
import { VehicleCard, type Vehicle } from '../../components/VehicleCard/VehicleCard';

const mockVehicles: Vehicle[] = [
  {
    id: 'UV-SCOOT-04',
    type: 'Scooter',
    status: 'DISPONIBLE',
    location: 'Estación Biblioteca',
    batteryLevel: 82,
  },
  {
    id: 'UV-BIKE-02',
    type: 'Bicicleta',
    status: 'DISPONIBLE',
    location: 'Estación Rectoría',
  },
  {
    id: 'UV-SCOOT-07',
    type: 'Scooter',
    status: 'DISPONIBLE',
    location: 'Facultad de Ingeniería',
    batteryLevel: 61,
  },
];

export const VehiclesPage = () => {
  const [locationFilter, setLocationFilter] = useState('Todas las estaciones');
  const [typeFilter, setTypeFilter] = useState('Todos los tipos');

  const filteredVehicles = mockVehicles.filter((vehicle) => {
    const matchesLocation = locationFilter === 'Todas las estaciones' || vehicle.location === locationFilter;
    const matchesType = typeFilter === 'Todos los tipos' || vehicle.type === typeFilter;
    return matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-uv-bg pb-8">
      <div className="max-w-3xl mx-auto w-full">
        <Header />
        
        <div className="px-4 mt-6">
          <h2 className="text-3xl font-extrabold text-uv-text-main mb-2">Vehículos</h2>
          <p className="text-uv-text-sub text-base">Elige un vehículo disponible cerca de ti</p>
        </div>

        <Filters 
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
        />

        <div className="flex flex-col">
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))
          ) : (
            <div className="text-center py-10 px-4">
              <p className="text-uv-text-sub font-medium">No se encontraron vehículos con estos filtros.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
