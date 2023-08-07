export type TemperatureItem = {
    id: string,
    temperature: string
}

export interface TemperatureState {
    data: TemperatureItem[];
    isLoading: boolean,
    isCreating: boolean
}
