import { useState } from 'react';
import { VehiclesPage } from './pages/VehiclesPage/VehiclesPage';
import { VehicleDetailsPage } from './pages/VehicleDetailsPage/VehicleDetailsPage';
import { type Vehicle } from './components/VehicleCard/VehicleCard';

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  if (selectedVehicle) {
    return (
      <VehicleDetailsPage 
        vehicle={selectedVehicle} 
        onBack={() => setSelectedVehicle(null)} 
      />
    );
  }

  return (
    <VehiclesPage onSelectVehicle={setSelectedVehicle} />
  )
}

export default App
