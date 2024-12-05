export {}

declare global {
  interface DataItem {
    imageSrc: string;
    title: string;
    subtitle: string;
    buttonText: string;
  }
  
}

// types/konva.d.ts
declare module 'konva' {
  const content: any;

  export default content;
}

// src/declarations.d.ts
declare module 'use-image' {
  const useImage: (url: string, crossOrigin?: string) => [HTMLImageElement | undefined, boolean];

  export default useImage;
}


