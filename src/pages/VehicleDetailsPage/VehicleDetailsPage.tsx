import { Header } from '../../components/Header/Header';
import { type Vehicle } from '../../components/VehicleCard/VehicleCard';
import { MdElectricScooter, MdPedalBike } from 'react-icons/md';
import { HiOutlineLocationMarker, HiInformationCircle } from 'react-icons/hi';

interface VehicleDetailsPageProps {
  vehicle: Vehicle;
  onBack: () => void;
}

export const VehicleDetailsPage = ({ vehicle, onBack }: VehicleDetailsPageProps) => {
  const isScooter = vehicle.type === 'Scooter';

  return (
    <div className="min-h-screen bg-uv-bg pb-8">
      <div className="max-w-3xl mx-auto w-full">
        <Header showBack onBack={onBack} />
        
        <div className="px-4 mt-6">
          <h2 className="text-3xl font-extrabold text-uv-text-main mb-2">Detalles</h2>
          <p className="text-uv-text-sub text-base">Revisa la información antes de confirmar</p>
        </div>

        <div className="px-4 mt-6 space-y-4">
          {/* Main Info Card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-uv-border">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-xl bg-uv-bg text-uv-blue flex items-center justify-center text-3xl">
                  {isScooter ? <MdElectricScooter /> : <MdPedalBike />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-uv-text-main font-mono tracking-tight">{vehicle.id}</h3>
                  <p className="text-sm text-uv-text-sub">{isScooter ? 'Scooter eléctrico' : 'Bicicleta'}</p>
                </div>
              </div>
              <div className="bg-uv-green-light px-3 py-1.5 rounded-md">
                <span className="text-xs font-bold text-uv-green tracking-wide">{vehicle.status}</span>
              </div>
            </div>

            <div className="space-y-5 text-sm">
              {isScooter && vehicle.batteryLevel !== undefined && (
                <div className="flex justify-between items-center border-b border-uv-border pb-5">
                  <span className="text-uv-text-sub">Nivel de batería</span>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-1.5 bg-uv-border rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-uv-green rounded-full" 
                        style={{ width: `${vehicle.batteryLevel}%` }}
                      />
                    </div>
                    <span className="text-uv-text-main font-medium">{vehicle.batteryLevel}%</span>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between items-center border-b border-uv-border pb-5">
                <span className="text-uv-text-sub">Ubicación</span>
                <div className="flex items-center gap-1.5 font-medium text-uv-text-main">
                  <HiOutlineLocationMarker className="text-lg text-uv-text-sub" />
                  <span>{vehicle.location}</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-uv-text-sub">Reservado por</span>
                <span className="font-bold text-uv-blue">Tú</span>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-uv-border flex gap-4">
            <HiInformationCircle className="text-uv-blue text-2xl flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-uv-text-main text-sm mb-1">Política de reservación</h4>
              <p className="text-sm text-uv-text-sub leading-relaxed">
                La reservación es válida por <span className="font-bold text-uv-text-main">10 minutos</span>. Si no se inicia el viaje en ese tiempo, se cancelará automáticamente.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-4 mt-8 flex flex-col gap-3">
          <button className="w-full bg-uv-blue text-white font-semibold py-3.5 rounded-xl hover:bg-blue-800 transition-colors">
            Confirmar Reservación
          </button>
          <button 
            onClick={onBack}
            className="w-full bg-red-50 text-red-600 font-bold py-3.5 rounded-xl hover:bg-red-100 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
