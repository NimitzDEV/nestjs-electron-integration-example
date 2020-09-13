interface AppBridge {
  app: {
    getUser: () => Promise<void>,
    prompt: (message: string) => void,
    max: () => void
  }
}

export const AppBridge: AppBridge = (window as any).AppBridge;
