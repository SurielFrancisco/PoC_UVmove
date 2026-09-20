import { useState } from 'react';
import { VehiclesPage } from './pages/VehiclesPage/VehiclesPage';
import { VehicleDetailsPage } from './pages/VehicleDetailsPage/VehicleDetailsPage';
import { ActiveReservationPage } from './pages/ActiveReservationPage/ActiveReservationPage';
import { FailedReservationPage } from './pages/FailedReservationPage/FailedReservationPage';
import { type Vehicle } from './components/VehicleCard/VehicleCard';

type ViewState = 'list' | 'details' | 'reservation' | 'failed';

function App() {
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

  return (
    <VehiclesPage onSelectVehicle={handleSelectVehicle} />
  );
}

export default App;
