declare module "@11ty/eleventy-fetch" {
  interface Options {
    duration: string;
    /** @default 'buffer' */
    type?: "json" | "buffer" | "text";
    /** @default false */
    verbose?: boolean;
    /** @default '.cache' */
    directory?: string;
    /** @default false */
    removeUrlQueryParams?: boolean;
    /** @default false */
    dryRun?: boolean;
    fetchOptions?: ResponseInit;
  }
  /** @link https://www.11ty.dev/docs/plugins/fetch/ */
  async function fetch <T extends unknown>(endpoint: string, options: Options): Promise<T>;
  export default fetch;
}
