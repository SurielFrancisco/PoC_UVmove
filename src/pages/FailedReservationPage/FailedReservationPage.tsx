import { Header } from '../../components/Header/Header';
import { type Vehicle } from '../../types/vehicle';
import { MdElectricScooter, MdPedalBike } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';

interface FailedReservationPageProps {
  vehicle: Vehicle;
  onRetry: () => void;
}

export const FailedReservationPage = ({ vehicle, onRetry }: FailedReservationPageProps) => {
  const isScooter = vehicle.type === 'Scooter';

  return (
    <div className="min-h-screen bg-uv-bg pb-8">
      <div className="max-w-3xl mx-auto w-full">
        <Header />

        {/* Error Header */}
        <div className="flex flex-col items-center mt-10 mb-8 px-4 text-center">
          <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-4">
            <FaTimes className="text-2xl text-red-500" />
          </div>
          <h2 className="text-2xl font-extrabold text-uv-text-main mb-1">Reservación fallida</h2>
          <p className="text-uv-text-sub text-base">No fue posible reservar este vehículo</p>
        </div>

        <div className="px-4 space-y-4">
          {/* Vehicle Info Card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-uv-border">
            {/* Top: icon, ID, status */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center text-2xl">
                  {isScooter ? <MdElectricScooter /> : <MdPedalBike />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-uv-text-main font-mono tracking-tight">{vehicle.id}</h3>
                  <p className="text-sm text-uv-text-sub">{vehicle.type}</p>
                </div>
              </div>
              <div className="bg-red-50 px-2.5 py-1 rounded-md">
                <span className="text-[10px] font-bold text-red-500 tracking-wide uppercase">No Disponible</span>
              </div>
            </div>

            <hr className="border-uv-border mb-4" />

            {/* Estado actual */}
            <div className="flex justify-between items-center text-sm mb-3">
              <span className="text-uv-text-sub">Estado actual</span>
              <span className="text-[11px] font-bold text-red-600 tracking-widest uppercase">Reservado por otro</span>
            </div>

            {/* Ubicación */}
            <div className="flex justify-between items-center text-sm">
              <span className="text-uv-text-sub">Ubicación</span>
              <div className="flex items-center gap-1.5 font-medium text-uv-text-main">
                <HiOutlineLocationMarker className="text-lg text-uv-text-sub" />
                <span>{vehicle.location}</span>
              </div>
            </div>
          </div>

          {/* Explanation Card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-uv-border">
            <h4 className="font-bold text-uv-text-main text-sm mb-4">¿Qué ocurrió?</h4>

            <ol className="space-y-3">
              {[
                'El vehículo aparecía disponible cuando lo consultaste.',
                'Otro usuario envió una solicitud de reservación al mismo tiempo.',
                'Su solicitud fue procesada primero. El vehículo ya no está disponible.',
              ].map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-uv-text-sub leading-relaxed">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-uv-bg text-uv-text-sub text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>

            {/* Note */}
            <div className="mt-5 bg-red-50 rounded-lg px-4 py-3 text-xs font-mono text-uv-text-sub leading-relaxed">
              <span className="font-bold text-red-600">Nota:</span>{' '}
              No se creó ninguna reservación para tu cuenta. No se generaron cargos.
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="px-4 mt-8">
          <button
            onClick={onRetry}
            className="w-full bg-uv-blue text-white font-semibold py-3.5 rounded-xl hover:bg-blue-800 transition-colors"
          >
            Buscar Otro Vehículo
          </button>
        </div>
      </div>
    </div>
  );
};
