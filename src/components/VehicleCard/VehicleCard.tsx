import { MdElectricScooter, MdPedalBike } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiLightningBolt } from 'react-icons/hi';

export interface Vehicle {
  id: string;
  type: 'Scooter' | 'Bicicleta';
  status: 'DISPONIBLE' | 'OCUPADO';
  location: string;
  batteryLevel?: number; // Only for scooters
}

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const isScooter = vehicle.type === 'Scooter';

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-uv-border mx-4 mb-4">
      {/* Top section: Icon, ID, Type, Status */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 rounded-xl bg-uv-bg text-uv-blue flex items-center justify-center text-2xl">
            {isScooter ? <MdElectricScooter /> : <MdPedalBike />}
          </div>
          <div>
            <h3 className="text-base font-bold text-uv-text-main font-mono tracking-tight">{vehicle.id}</h3>
            <p className="text-sm text-uv-text-sub">{vehicle.type}</p>
          </div>
        </div>
        <div className="bg-uv-green-light px-2.5 py-1 rounded-md">
          <span className="text-[10px] font-bold text-uv-green tracking-wide">{vehicle.status}</span>
        </div>
      </div>

      <hr className="border-uv-border mb-3" />

      {/* Info section: Location and Battery */}
      <div className="flex justify-between items-center mb-4 text-sm text-uv-text-sub">
        <div className="flex items-center gap-1.5">
          <HiOutlineLocationMarker className="text-lg" />
          <span>{vehicle.location}</span>
        </div>
        
        {isScooter && vehicle.batteryLevel !== undefined && (
          <div className="flex items-center gap-2">
            <HiLightningBolt className="text-uv-text-sub" />
            <div className="w-12 h-1.5 bg-uv-border rounded-full overflow-hidden">
              <div 
                className="h-full bg-uv-green rounded-full" 
                style={{ width: `${vehicle.batteryLevel}%` }}
              />
            </div>
            <span className="text-uv-text-main font-medium w-8 text-right text-xs">
              {vehicle.batteryLevel}%
            </span>
          </div>
        )}
      </div>

      {/* Action button */}
      <button className="w-full bg-uv-blue text-white font-semibold py-3 rounded-xl hover:bg-blue-800 transition-colors">
        Ver Detalles
      </button>
    </div>
  );
};
