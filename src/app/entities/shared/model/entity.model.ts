export interface IEntity {
    name: string;
    description: string;
    attributes: IAttribute[];
    relationships: IAttribute[];
}

export interface IAttribute {
    name: string;
    description: string;
    label: string;
    className: string;
}
