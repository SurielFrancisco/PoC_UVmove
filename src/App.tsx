import { useState } from 'react';
import { useAuth } from './context/AuthContext';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { VehiclesPage } from './pages/VehiclesPage/VehiclesPage';
import { VehicleDetailsPage } from './pages/VehicleDetailsPage/VehicleDetailsPage';
import { ActiveReservationPage } from './pages/ActiveReservationPage/ActiveReservationPage';
import { ActiveTripPage } from './pages/ActiveTripPage/ActiveTripPage';
import { FailedReservationPage } from './pages/FailedReservationPage/FailedReservationPage';
import { type Vehicle } from './types/vehicle';

type ViewState = 'list' | 'details' | 'reservation' | 'failed' | 'trip';

function App() {
  const { session, loading } = useAuth();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [view, setView] = useState<ViewState>('list');

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setView('details');
  };

  const goToList = () => {
    setSelectedVehicle(null);
    setView('list');
  };

  if (view === 'reservation' && selectedVehicle) {
    return (
      <ActiveReservationPage
        vehicle={selectedVehicle}
        onCancel={goToList}
        onStartTrip={() => setView('trip')}
      />
    );
  }

  if (view === 'trip' && selectedVehicle) {
    return (
      <ActiveTripPage
        vehicle={selectedVehicle}
        onEndTrip={goToList}
      />
    );
  }

  if (view === 'failed' && selectedVehicle) {
    return (
      <FailedReservationPage
        vehicle={selectedVehicle}
        onRetry={goToList}
      />
    );
  }

  if (view === 'details' && selectedVehicle) {
    return (
      <VehicleDetailsPage
        vehicle={selectedVehicle}
        onBack={() => setView('list')}
        onConfirm={() => setView('reservation')}
        onFailed={() => setView('failed')}
      />
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-uv-bg flex items-center justify-center text-uv-text-sub font-medium">
        Cargando sesión...
      </div>
    );
  }

  if (!session) {
    return <LoginPage />;
  }

  return (
    <VehiclesPage onSelectVehicle={handleSelectVehicle} />
  );
}

export default App;
