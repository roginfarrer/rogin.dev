let init = false;
let cache = new Map<string, any>();

function setup() {
  const localCache = JSON.parse(localStorage.getItem("app-cache") || "[]");
  cache = new Map(localCache);
  window.addEventListener("beforeunload", syncCacheToLocalStorage);
  init = true;
}

interface StoredData<T> {
  timestamp: number;
  data: T;
}

export const cachedFetch = async <T>(
  endpoint: RequestInfo | URL,
  opts: { fetchOptions?: ResponseInit; duration: number },
): Promise<T> => {
  if (!init) {
    setup();
  }

  const key = endpoint.toString();
  const cachedResponse = cache.get(key) as StoredData<T>;

  const now = new Date().getTime();
  if (cachedResponse && now - cachedResponse.timestamp < opts.duration) {
    return cachedResponse.data;
  }

  const response = await fetch(endpoint, opts.fetchOptions);
  const data = await response.json();

  const payload = {
    timestamp: new Date().getTime(),
    data,
  } satisfies StoredData<T>;

  if (response.status > 200) {
    return data;
  }

  cache.set(key, payload);

  syncCacheToLocalStorage();

  return data as T;
};

function syncCacheToLocalStorage() {
  const appCache = JSON.stringify(Array.from(cache.entries()));
  localStorage.setItem("app-cache", appCache);
}
