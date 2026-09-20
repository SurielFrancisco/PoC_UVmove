export interface Vehicle {
  id: string;
  type: 'Scooter' | 'Bicicleta';
  status: 'DISPONIBLE' | 'OCUPADO';
  location: string;
  batteryLevel?: number;
}
