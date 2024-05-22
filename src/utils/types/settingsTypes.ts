export interface ISetting {
    display_name: string
    name: string
    value: string
    data_type: "int" | "real" | "string" | "bool"
}

export interface ISettingsCategory {
    "category": string,
    "settings": ISetting[]
}