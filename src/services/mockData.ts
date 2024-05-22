import type {
    IDoc,
    ISpeciality,
    IEmployee,
    IProjectGroupTable,
    IProjectGroup,
    IDataset,
    IModel,
    IPrediction,
} from "@/utils/types/uploadingTypes"
import type { ISetting } from "@/utils/types/settingsTypes"

export const getMockDocsData = (): IDoc[] => {
    return [
        {
            id: "1",
            date: "10.05.2024 15:40",
            filename: "PatentsUS_pt1.csv",
            // TODO: patent_count
            patents_count: 80000,
            status_code: "COMPLETED",
            progress: 100,
        },
        {
            id: "2",
            date: "10.05.2024 15:48",
            filename: "PatentsUS_pt2.csv",
            // TODO: patent_count
            patents_count: 80000,
            status_code: "COMPLETED",
            progress: 100,
        },
        {
            id: "3",
            date: "10.05.2024 16:01",
            filename: "PatentsUS_pt3.csv",
            patents_count: 73583,
            status_code: "COMPLETED",
            progress: 100,
        },
        {
            id: "4",
            date: "11.05.2024 10:24",
            filename: "patentsWIPO.pdf",
            patents_count: 0,
            status_code: "ERROR",
            progress: 0,
        },
        {
            id: "5",
            date: "11.05.2024 13:04",
            filename: "patentsWIPO.csv",
            patents_count: 43,
            status_code: "ERROR",
            progress: 2,
        },
        {
            id: "6",
            date: "11.05.2024 13:49",
            filename: "patentsWIPO_cleaned.csv",
            patents_count: 28543,
            status_code: "COMPLETED",
            progress: 100,
        },
        {
            id: "7",
            date: "20.05.2024 18:32",
            filename: "wipo_AI.csv",
            patents_count: 10231,
            status_code: "RUNNING",
            progress: 82,
        },
        {
            id: "8",
            date: "20.05.2024 19:14",
            filename: "wipo_medicine.csv",
            patents_count: 0,
            status_code: "PENDING",
            progress: 0,
        },
    ]
}

export const getMockDatasetsData = (): IDataset[] => {
    return [
        {
            id: "1",
            date: "16.05.2024 10:23",
            range: "01.01.2010 - 31.12.2010",
            patents_count: 87234,
            classes: 'H01L, A61B, G05B, H04L',
            // подставить реальные данные ниже
            diagram_src: '/img/clusters/distr.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "2",
            date: "18.05.2024 14:45",
            range: "01.01.2020 - 31.12.2020",
            patents_count: 91245,
            classes: 'H01L, A61B, G05B, H04L',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "3",
            date: "13.05.2024 08:37",
            range: "01.01.2011 - 31.12.2011",
            patents_count: 83412,
            classes: 'G06F, G06Q, G01N',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "4",
            date: "20.05.2024 16:02",
            range: "01.01.2021 - 31.12.2021",
            patents_count: 84532,
            classes: 'G06F, G06Q, G01N',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "5",
            date: "17.05.2024 11:15",
            range: "01.01.2012 - 31.12.2012",
            patents_count: 85412,
            classes: 'H02J, H04B, H04W',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "6",
            date: "21.05.2024 09:50",
            range: "01.01.2020 - 31.12.2020",
            patents_count: 86745,
            classes: 'H02J, H04B, H04W',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "7",
            date: "14.05.2024 13:22",
            range: "01.01.2013 - 31.12.2013",
            patents_count: 87892,
            classes: 'B60L, B62D, F01N',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "8",
            date: "19.05.2024 17:38",
            range: "01.01.2019 - 31.12.2019",
            patents_count: 85632,
            classes: 'B60L, B62D, F01N',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "9",
            date: "15.05.2024 12:05",
            range: "01.01.2014 - 31.12.2014",
            patents_count: 86345,
            classes: 'C07D, C08F, C12N',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "10",
            date: "20.05.2024 15:48",
            range: "01.01.2020 - 31.12.2020",
            patents_count: 87654,
            classes: 'C07D, C08F, C12N',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "11",
            date: "18.05.2024 09:27",
            range: "01.01.2015 - 31.12.2015",
            patents_count: 89234,
            classes: 'H03M, H04L, H05B',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "12",
            date: "21.05.2024 11:43",
            range: "01.01.2022 - 31.12.2022",
            patents_count: 90876,
            classes: 'H03M, H04L, H05B',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "13",
            date: "19.05.2024 14:16",
            range: "01.01.2016 - 31.12.2016",
            patents_count: 82134,
            classes: 'A01B, A61K, B01D',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "14",
            date: "15.05.2024 16:34",
            range: "01.01.2021 - 31.12.2021",
            patents_count: 83245,
            classes: 'A01B, A61K, B01D',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "15",
            date: "20.05.2024 13:57",
            range: "01.01.2017 - 31.12.2017",
            patents_count: 84567,
            classes: 'E21B, F16H, G01V',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "16",
            date: "14.05.2024 10:29",
            range: "01.01.2020 - 31.12.2020",
            patents_count: 85432,
            classes: 'E21B, F16H, G01V',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "17",
            date: "19.05.2024 11:53",
            range: "01.01.2018 - 31.12.2018",
            patents_count: 86234,
            classes: 'H04W, H05K, G09G',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "18",
            date: "16.05.2024 14:02",
            range: "01.01.2022 - 31.12.2022",
            patents_count: 87456,
            classes: 'H04W, H05K, G09G',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "19",
            date: "21.05.2024 09:15",
            range: "01.01.2011 - 31.12.2011",
            patents_count: 83245,
            classes: 'B65D, F16L, H01R',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "20",
            date: "14.05.2024 15:20",
            range: "01.01.2020 - 31.12.2020",
            patents_count: 84123,
            classes: 'B65D, F16L, H01R',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "21",
            date: "18.05.2024 10:10",
            range: "01.01.2010 - 31.12.2010",
            patents_count: 85234,
            classes: 'G06F, G06T, H04N',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "22",
            date: "17.05.2024 12:35",
            range: "01.01.2019 - 31.12.2019",
            patents_count: 86789,
            classes: 'G06F, G06T, H04N',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "23",
            date: "16.05.2024 13:44",
            range: "01.01.2008 - 31.12.2008",
            patents_count: 87345,
            classes: 'B82Y, G02B, H01S',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "24",

            date: "15.05.2024 11:07",
            range: "01.01.2018 - 31.12.2018",
            patents_count: 88912,
            classes: 'B82Y, G02B, H01S',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "25",
            date: "20.05.2024 14:48",
            range: "01.01.2005 - 31.12.2005",
            patents_count: 84123,
            classes: 'C07C, C08G, F17C',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "26",
            date: "17.05.2024 09:34",
            range: "01.01.2015 - 31.12.2015",
            patents_count: 85789,
            classes: 'C07C, C08G, F17C',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "27",
            date: "18.05.2024 08:57",
            range: "01.01.2003 - 31.12.2003",
            patents_count: 86412,
            classes: 'A23L, A61J, A62D',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "28",
            date: "21.05.2024 12:13",
            range: "01.01.2013 - 31.12.2013",
            patents_count: 87543,
            classes: 'A23L, A61J, A62D',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "29",
            date: "19.05.2024 10:38",
            range: "01.01.2004 - 31.12.2004",
            patents_count: 88912,
            classes: 'B29C, D06F, F42B',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        },
        {
            id: "30",
            date: "13.05.2024 16:27",
            range: "01.01.2014 - 31.12.2014",
            patents_count: 90123,
            classes: 'B29C, D06F, F42B',
            // подставить реальные данные ниже
            diagram_src: '/img/testDatasetDiagram.jpg',
            patents_distribution: [
                { name: 'H01F', count: 6000 },
                { name: 'H01G', count: 789 },
                { name: 'H01A', count: 8976 },
            ]
        }
    ]
}

export const getMockModelsData = (): IModel[] => {
    return [
        {
            id: "1",
            date: "18.05.2024 02:11",
            range: "01.01.2000 - 31.12.2000",
            patents_count: 87234,
            classes: 'H01L, A61B, G05B, H04L',
            status_code: 'COMPLETED',
            progress: 100,
            // данные для анализа
            clasters_count: 4,
            cluster_associations: [
                { name: 'H01L', percent: 87 },
                { name: 'A61B', percent: 89 },
                { name: 'G05B', percent: 91 },
                { name: 'H04L', percent: 78 }
            ],
            cluster_chart: '/img/clusters/2000.png'
        },
        {
            id: "2",
            date: "18.05.2024 02:21",
            range: "01.01.2013 - 31.12.2013",
            patents_count: 91245,
            classes: 'A23L, A61J, A62D',
            status_code: 'RUNNING',
            progress: 43,
            // данные для анализа
            clasters_count: 4,
            cluster_associations: [
                { name: 'H01L', percent: 2 },
                { name: 'H01H', percent: 85 },
                { name: 'H01A', percent: 69 },
                { name: 'H01B', percent: 87 }
            ],
            cluster_chart: '/img/testImg.jpg'
        },
        {
            id: "3",
            date: "18.05.2024 02:22",
            range: "01.01.2014 - 31.12.2014",
            patents_count: 91245,
            classes: 'C07C, C08G, F17C',
            status_code: 'PENDING',
            progress: 0,
            // данные для анализа
            clasters_count: 4,
            cluster_associations: [
                { name: 'H01L', percent: 3 },
                { name: 'H01H', percent: 85 },
                { name: 'H01A', percent: 69 },
                { name: 'H01B', percent: 87 }
            ],
            cluster_chart: '/img/testImg.jpg'
        },
    ]
}

export const getMockPredictionsData = (): IPrediction[] => {
    return [
        {
            id: "1",
            date: "10.10.2023 15:40",
            range1: "01.01.2000 - 31.12.2000",
            range2: "01.01.2010 - 31.12.2010",
            classes: 'H01L, A61B, G05B, H04L',
            status_code: 'COMPLETED',
            progress: 100,
            // данные для анализа
            modelId: '1',
            clasters_count: 4,
            cluster_associations: [
                { name: 'H01L', percent: 84 },
                { name: 'A61B', percent: 90 },
                { name: 'G05B', percent: 82 },
                { name: 'H04L', percent: 74 }
            ],
            cluster_chart: '/img/clusters/2010.png',
            matrix_src: '/img/clusters/matrix.png',
            description: `Рост числа патентов в подклассе A61B: ~16.5%
            Рост числа патентов в подклассе H01L: ~16.1%
            Рост числа патентов в подклассе H04L: ~16.3%
            Появление нового подкласса на стыке H01L и H04L: ~10.2%
            Общее падение точности в подклассе G05B: ~14.0%
            Увеличение числа смежных патентов для H01L и A61B: ~6.0%
            `
        },
        {
            id: "2",
            date: "10.10.2023 15:40",
            range1: "01.01.2011 - 31.12.2011",
            range2: "01.01.2013 - 31.12.2013",
            classes: 'A23L, A61J, A62D',
            status_code: 'ERROR',
            progress: 0,
            // данные для анализа
            modelId: '3',
            clasters_count: 3,
            cluster_associations: [
                { name: 'H01L', percent: 22 },
                { name: 'H01H', percent: 34 },
                { name: 'H01A', percent: 69 }
            ],
            cluster_chart: '/img/testImg.jpg',
            matrix_src: '/img/testMatrix.jpg',
            description: 'Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32'

        },
    ]
}


