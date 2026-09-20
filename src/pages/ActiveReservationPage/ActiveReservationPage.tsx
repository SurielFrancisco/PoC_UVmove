import { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { type Vehicle } from '../../types/vehicle';
import { MdElectricScooter, MdPedalBike } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa';

interface ActiveReservationPageProps {
  vehicle: Vehicle;
  onCancel: () => void;
  onStartTrip: () => void;
}

const TOTAL_SECONDS = 10 * 60; // 10 minutos
const RADIUS = 80;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const ActiveReservationPage = ({ vehicle, onCancel, onStartTrip }: ActiveReservationPageProps) => {
  const isScooter = vehicle.type === 'Scooter';
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  // Formato MM:SS
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');

  // El anillo se va "vaciando" conforme el tiempo pasa
  const progress = secondsLeft / TOTAL_SECONDS;
  const dashOffset = CIRCUMFERENCE * (1 - progress);

  return (
    <div className="min-h-screen bg-uv-bg pb-8">
      <div className="max-w-3xl mx-auto w-full">
        <Header />

        {/* Success Header */}
        <div className="flex flex-col items-center mt-10 mb-8 px-4 text-center">
          <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-4">
            <FaCheck className="text-2xl text-green-500" />
          </div>
          <h2 className="text-2xl font-extrabold text-uv-text-main mb-1">Reservación Activa</h2>
          <p className="text-uv-text-sub text-base">Tu vehículo está reservado</p>
        </div>

        <div className="px-4 space-y-4">
          {/* Timer Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-uv-border flex flex-col items-center">
            <h3 className="text-xs font-bold text-uv-text-sub tracking-wider mb-6 uppercase">Tiempo Restante</h3>

            {/* Circular Timer */}
            <div className="relative w-[200px] h-[200px] flex items-center justify-center mb-6">
              <svg
                width="200"
                height="200"
                className="absolute top-0 left-0 -rotate-90"
              >
                {/* Track background */}
                <circle
                  cx="100"
                  cy="100"
                  r={RADIUS}
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="14"
                />
                {/* Animated progress arc */}
                <circle
                  cx="100"
                  cy="100"
                  r={RADIUS}
                  fill="none"
                  stroke="#0044A5"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={dashOffset}
                  style={{ transition: 'stroke-dashoffset 1s linear' }}
                />
              </svg>
              <div className="z-10 flex flex-col items-center">
                <span className="text-5xl font-black text-uv-text-main font-mono tracking-tighter leading-none">
                  {minutes}:{seconds}
                </span>
                <span className="text-sm text-uv-text-sub font-medium mt-1">minutos</span>
              </div>
            </div>

            <p className="text-sm text-uv-text-sub text-center">
              {secondsLeft > 0
                ? 'La reservación expira cuando el tiempo termina.'
                : 'La reservación ha expirado.'}
            </p>
          </div>

          {/* Vehicle Summary Card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-uv-border">
            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-uv-border">
              <div className="w-12 h-12 rounded-xl bg-uv-blue text-white flex items-center justify-center text-2xl">
                {isScooter ? <MdElectricScooter /> : <MdPedalBike />}
              </div>
              <div>
                <h3 className="text-base font-bold text-uv-text-main font-mono tracking-tight">{vehicle.id}</h3>
                <p className="text-sm text-uv-text-sub">{vehicle.type}</p>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-uv-text-sub">Ubicación</span>
              <div className="flex items-center gap-1.5 font-medium text-uv-text-main">
                <HiOutlineLocationMarker className="text-lg text-uv-text-sub" />
                <span>{vehicle.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-4 mt-8 flex flex-col gap-3">
          <button 
            onClick={onStartTrip}
            className="btn-green"
          >
            Iniciar Viaje
          </button>
          <button
            onClick={onCancel}
            className="btn-red"
          >
            Cancelar Reservación
          </button>
        </div>
      </div>
    </div>
  );
};
