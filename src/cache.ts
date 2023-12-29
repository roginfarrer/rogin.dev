const hasStorage = typeof localStorage !== 'undefined'

export const writeToCache = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data))
};

export const readFromCache = <T extends object>(key: string): T | null => {
  const item = localStorage.getItem(key)
  if (item) {
    return JSON.parse(item)
  }
  return null
}

interface StoredData<T> {
  timestamp: number;
  data: T;
}

export const cachedFetch = async <T>(endpoint: RequestInfo | URL, opts: {fetchOptions?: ResponseInit; duration: number;}): Promise<T> => {
  const key = endpoint.toString()
  const cachedResponse = readFromCache<StoredData<T>>(key)

  const now = new Date().getTime()
  if (cachedResponse && now - cachedResponse.timestamp < opts.duration) {
    return cachedResponse.data
  }

  const response = await fetch(endpoint, opts.fetchOptions)
  const data = await response.json()

  const payload = {timestamp: new Date().getTime(), data} satisfies StoredData<T>
  
  writeToCache(key, payload)

  return data as T
}
