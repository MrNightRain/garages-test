interface RootObject {
    '@context': Context;
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

interface Context {
    '@base': string;
    '@vocab': string;
    cdk: string;
    dc: string;
    rdf: string;
    rdfs: string;
    owl: string;
    xsd: string;
    org: string;
    foaf: string;
    dcat: string;
    geos: string;
    dbpedia: string;
    'dbpedia-owl': string;
    title: string;
    cdk_id: string;
    features: string;
    properties: string;
    date_created: string;
    layer: Layer;
    layers: Layers;
    data: string;
    geometry?: any;
    type?: any;
  }

interface Layers {
    '@id': string;
    '@container': string;
  }

interface Layer {
    '@id': string;
    '@type': string;
  }
