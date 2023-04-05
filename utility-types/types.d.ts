declare module 'mixpanel-browser' {
  interface TrackProperties {
    [key: string]: any;
  }

  export function track(eventName: string, data?: TrackProperties): void;
}