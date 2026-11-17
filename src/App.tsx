import { useState } from 'react';
import {
  IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonCard,
  IonCardContent, IonInput, IonItem, IonLabel, IonButton, IonText
} from '@ionic/react';

const TIPO_CAMBIO = 8;
const CARNET = '25002537';

export default function App() {
  const [quetzales, setQuetzales] = useState(CARNET);
  const cantidad = Number(quetzales);
  const dolares = Number.isFinite(cantidad) && cantidad >= 0
    ? cantidad / TIPO_CAMBIO
    : 0;

  const limpiar = () => setQuetzales('');

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>DivisApp 25002537</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding fondo">
        <IonCard className="conversor">
          <IonCardContent>
            <IonText color="primary">
              <h1>Conversor de divisas</h1>
            </IonText>
            <p className="descripcion">
              Convierte quetzales guatemaltecos a dólares estadounidenses.
            </p>

            <IonItem lines="full">
              <IonLabel position="stacked">Cantidad en quetzales (Q)</IonLabel>
              <IonInput
                type="number"
                min="0"
                value={quetzales}
                placeholder="Ingrese una cantidad"
                onIonInput={(event) => setQuetzales(event.detail.value ?? '')}
              />
            </IonItem>

            <div className="resultado">
              <p>Equivalente en dólares</p>
              <h2>
                {dolares.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 3
                })}
              </h2>
            </div>

            <IonButton expand="block" onClick={limpiar} fill="outline">
              Limpiar cantidad
            </IonButton>
            <p className="tipo-cambio">Tipo de cambio fijo: Q8.00 = $1.00</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonApp>
  );
}