
export enum EnvKey {
  REACT_APP_NAME = 'REACT_APP_NAME',
  REACT_APP_VERSION = 'REACT_APP_VERSION',
  REACT_APP_VERSION_KEY = 'REACT_APP_VERSION_KEY',
}

export function env(key: string, fallback?: string) {
  const val = process.env[key];
  if(val) {
    return val;
  } else {
    if(fallback)
      return fallback;
    else
      return undefined;
  }
}

export const currentAppVersion = env(EnvKey.REACT_APP_VERSION) as string;
export const currentAppVersionKey = parseInt(env(EnvKey.REACT_APP_VERSION_KEY) as string);

