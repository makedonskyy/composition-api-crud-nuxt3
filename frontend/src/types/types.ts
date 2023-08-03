export type TemperatureItem = {
    id: string,
    temperature: string
}

export interface TemperatureState {
    readings: TemperatureItem[];
}
