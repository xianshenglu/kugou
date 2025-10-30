export {};

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'micro-app': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        name?: string;
        url?: string;
        iframe?: unknown
      };
    }
  }
}