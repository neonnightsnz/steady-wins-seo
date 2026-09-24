export interface LocationPage {
  slug: string;
  heading: string;
  sections: Array<{ heading: string; body: string }>;
  bullets: string[];
}

export const locationPages: LocationPage[] = [];
