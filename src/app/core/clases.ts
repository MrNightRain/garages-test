interface RootObject {
    type: string;
    features: Feature[];
  }

interface Feature {
    '@id': string;
    '@type': string;
    type: string;
    properties: Properties;
    geometry: Geometry;
  }

interface Geometry {
    type: string;
    coordinates: number[];
  }

interface Properties {
    '@id': string;
    cdk_id: string;
    title: string;
    layer: string;
    layers: Layers2;
  }

interface Layers2 {
    'parking.garage': Parkinggarage;
  }

interface Parkinggarage {
    '@id': string;
    '@type': string;
    data: Data;
    layer: string;
  }

interface Data {
    '@id': string;
    '@type': string[];
    '@context': Context2 | string;
    Name?: string;
    PubDate?: string;
    Type?: string;
    State?: string;
    FreeSpaceShort?: number;
    FreeSpaceLong?: number;
    ShortCapacity?: number;
    LongCapacity?: number;
  }

interface Context2 {
    '@vocab': string;
  }

