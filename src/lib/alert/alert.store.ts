import { createSignal } from 'solid-js';

type Alert = {
    text: string,
    type: AlertType
}

type AlertType = 'default' | 'success' | 'error'

export const [alerts, setAlert] = createSignal<Array<Alert>>([])

export const handleAlert = (alert: Alert) => {
    setAlert((prevAlerts) => [...prevAlerts, alert ])
    setTimeout(() => {
        setAlert((prevAlerts) => prevAlerts.slice(1))
    }, 5000);
}
