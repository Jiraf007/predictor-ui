export interface IDoc {
    id: string
    date: string
    filename: string
    patents_count: number
    status_code: TStatusCode
    progress?: number
}

export interface IDataset {
    id: string
    date: string
    range: string
    classes: string
    patents_count: number
    patents_distribution: {
        name: string
        count: number
    }[]
    diagram_src: string
}

export interface IModel {
    id: string
    date: string
    range: string
    classes: string
    status_code: TStatusCode
    progress?: number
    patents_count: number
    // анализ
    clasters_count: number
    cluster_associations: {
        name: string
        percent: number
    }[]
    cluster_chart: string
}

export interface IPrediction {
    id: string
    date: string
    range1: string
    range2: string
    classes: string
    status_code: TStatusCode
    progress?: number
    // анализ
    modelId: string
    clasters_count: number
    cluster_associations: {
        name: string
        percent: number
    }[]
    cluster_chart: string
    matrix_src: string
    description: string
}



// /////////

export interface ISpeciality {
    id: string
    date: string
    filename: string
    speciality: string
    status_code: TStatusCode
    info: string
    progress: number
}

export interface IEmployee {
    id: string
    date: string
    name: string
    salary: string
    speciality: string
}

export interface IProjectGroupTable {
    id: string,
    rnd: string,
    variant: string | number,
    supervisor: string,
    employees_count: number,
    efficiency: number,
    status: string,
}

export enum StatusCodes {
    PENDING = "Ожидание",
    RUNNING = "Запущено",
    COMPLETED = "Завершено",
    ERROR = "Ошибка",
}

export interface IEfficiencyCriterion {
    name: string,
    value: number
}

export interface IProjectGroup {
    rnd: string,
    variant: string,
    speciality_related: string,
    efficiency: IEfficiencyCriterion[],
    group_members: IEmployee[]
}

export type TStatusCode = keyof typeof StatusCodes
