export interface Film {
  description: string;
  properties: {
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    producer: string;
    title: string;
    episode_id: number;
    director: string;
    release_date: string;
    opening_crawl: string;
    url: string;
  };
  uid: string;
  _id: string;
}
