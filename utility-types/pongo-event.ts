import mixpanel from 'mixpanel-browser';
import useLocalStorage from './localStorage';

export default function useEvent(provider?: 'mixpanel' | 'intercom') {
  const { isSupportConnection } = useLocalStorage()

  // Ajoutez un type générique `T` pour les données de l'événement au niveau de la fonction `send`
  const send = <T = Record<string, unknown>>(eventName: string, data?: T) => {
    if (isSupportConnection.value) {
      return;
    }
    switch (provider) {
      case 'mixpanel':
        if (!mixpanel) {
          return;
        }
        return mixpanel.track(eventName, data)
      default:
        return Intercom('trackEvent', eventName)
    }
  };

  return {
    send,
  }
}