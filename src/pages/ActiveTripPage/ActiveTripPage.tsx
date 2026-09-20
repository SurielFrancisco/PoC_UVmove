import { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { type Vehicle } from '../../types/vehicle';
import { MdElectricScooter, MdPedalBike } from 'react-icons/md';
import { HiLightningBolt } from 'react-icons/hi';
import { FaMapMarkerAlt } from 'react-icons/fa';

interface ActiveTripPageProps {
  vehicle: Vehicle;
  onEndTrip: () => void;
}

const UNLOCK_FEE = 3.00;
const COST_PER_MINUTE = 0.50;

export const ActiveTripPage = ({ vehicle, onEndTrip }: ActiveTripPageProps) => {
  const isScooter = vehicle.type === 'Scooter';
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  // Timer counting UP
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format MM:SS
  const minutes = Math.floor(secondsElapsed / 60);
  const displayMinutes = String(minutes).padStart(2, '0');
  const displaySeconds = String(secondsElapsed % 60).padStart(2, '0');

  // Calculate cost (Unlock fee + cost per started minute)
  const startedMinutes = Math.ceil(secondsElapsed / 60);
  const currentCost = UNLOCK_FEE + (startedMinutes * COST_PER_MINUTE);

  return (
    <div className="min-h-screen bg-uv-bg pb-8 flex flex-col">
      <div className="max-w-3xl mx-auto w-full flex-grow flex flex-col">
        <Header />

        {/* Map Background Placeholder */}
        <div className="relative w-full h-48 bg-blue-50 border-b border-uv-border overflow-hidden">
          {/* Simulated map texture */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#0044A5 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <FaMapMarkerAlt className="text-4xl text-uv-blue drop-shadow-md z-10 relative" />
              <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-uv-blue/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-uv-border">
            <span className="text-xs font-bold text-uv-blue uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-uv-green animate-pulse"></span>
              Viaje en curso
            </span>
          </div>
        </div>

        <div className="px-4 -mt-6 z-10 flex-grow flex flex-col">
          {/* Timer Card */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-uv-border flex flex-col items-center mb-4">
            <h3 className="text-xs font-bold text-uv-text-sub tracking-wider mb-2 uppercase">Tiempo Transcurrido</h3>
            
            <div className="text-6xl font-black text-uv-text-main font-mono tracking-tighter mb-4">
              {displayMinutes}:{displaySeconds}
            </div>

            <div className="w-full h-px bg-uv-border mb-4"></div>

            <div className="flex flex-col items-center">
              <span className="text-xs font-medium text-uv-text-sub uppercase tracking-wider mb-1">Tarifa Actual</span>
              <span className="text-3xl font-bold text-uv-green">${currentCost.toFixed(2)} <span className="text-sm font-normal text-uv-text-sub">MXN</span></span>
            </div>
          </div>

          {/* Vehicle Info Card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-uv-border mb-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-uv-bg text-uv-blue flex items-center justify-center text-xl">
                  {isScooter ? <MdElectricScooter /> : <MdPedalBike />}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-uv-text-main font-mono tracking-tight">{vehicle.id}</h3>
                  <p className="text-xs text-uv-text-sub">{vehicle.type}</p>
                </div>
              </div>

              {isScooter && vehicle.batteryLevel !== undefined && (
                <div className="flex items-center gap-1.5 bg-uv-bg px-2.5 py-1.5 rounded-lg border border-uv-border">
                  <HiLightningBolt className="text-uv-green text-sm" />
                  <span className="text-xs font-bold text-uv-text-main">{vehicle.batteryLevel}%</span>
                </div>
              )}
            </div>
          </div>

          {/* Action Button - Pushed to bottom */}
          <div className="mt-auto pb-4">
            <p className="text-xs text-center text-uv-text-sub mb-3 px-4">
              Asegúrate de estacionar el vehículo en una zona permitida antes de finalizar.
            </p>
            <button
              onClick={onEndTrip}
              className="btn-red shadow-lg shadow-red-500/20 active:scale-[0.98] transition-transform"
            >
              Finalizar Viaje
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
