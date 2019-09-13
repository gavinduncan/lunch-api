export interface Restaurant {
    name: string;
    cost: number;
    distance: DistanceChoices;
    type: string;
}

export enum DistanceChoices {far, close}
