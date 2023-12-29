import type { HTMLTag, HTMLAttributes, } from "astro/types";

type AstroComponent<Props extends Record<string, any>> = (props: Props) => any;
export type ComponentType = HTMLTag | AstroComponent<any>
type AsProp = { as: ComponentType };
type Merge<T, P> = Omit<T & P, keyof T>;


// type PolymorphicAttributes<P extends ComponentType> = (BaseProps["as"] extends HTMLTag ? Omit<P & HTMLAttributes<P['as']>, 'as'> & {
// 	as?: P['as']}) : (HTMLTag extends AstroComponent<infer ComponentProps> ? 
// Omit<P & ComponentProps, 'as'> & {as?: P['as']})
// : never;


// export type Polymorphic<P extends { as: HTMLTag }> = PolymorphicAttributes<
// 	Omit<P, 'as'> & { as: NonNullable<P['as']> }
// >;
// export type PolymorphicAttributes<BaseProps extends AsProp> =
//   BaseProps["as"] extends HTMLTag
//     ? Merge<BaseProps, HTMLAttributes<BaseProps["as"]>>
//     : BaseProps["as"] extends AstroComponent<infer PolymorphicProps>
//       ? Merge<BaseProps, PolymorphicProps>
//       : never;

// export type Polymorphic<P extends AsProp> =
//   PolymorphicAttributes<Omit<P, "as"> & { as: NonNullable<P["as"]> }>;


