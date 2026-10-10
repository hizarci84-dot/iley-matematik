// Otomatik Oluşturulan İley 6. Sınıf Matematik Çalışma Programı Veri Seti
const STUDY_DATA = {
  "student": {
    "name": "İley",
    "grade": "6. Sınıf",
    "subject": "Matematik",
    "startDate": "2026-10-12",
    "denemeStartDate": "2026-11-01"
  },
  "books": [
    {
      "id": "jumbo",
      "title": "6 Jumbo Matematik Deneme Bankası",
      "author": "Jumbo Yayınları",
      "type": "deneme",
      "color": "#f59e0b",
      "badgeClass": "bg-amber-100 text-amber-800 border-amber-300",
      "totalDenemes": 26,
      "totalQuestions": 520,
      "description": "26 Deneme Sınavı x 20 Soru. 1 Kasım'dan itibaren her Pazar 1 deneme çözülecektir."
    },
    {
      "id": "isem",
      "title": "İsem Yayıncılık 6. Sınıf Matematik",
      "author": "İsem Yayıncılık",
      "type": "test",
      "color": "#10b981",
      "badgeClass": "bg-emerald-100 text-emerald-800 border-emerald-300",
      "totalTemas": 7,
      "totalTests": 130,
      "totalQuestions": 1052,
      "description": "7 Tema, 130 Çoktan Seçmeli Test. Hafta içi ve Cumartesi günleri 2'şer test şeklinde çözülür."
    },
    {
      "id": "parkur",
      "title": "Parkur Matematik 6. Sınıf",
      "author": "Metin Yayınları",
      "type": "activity_test",
      "color": "#3b82f6",
      "badgeClass": "bg-blue-100 text-blue-800 border-blue-300",
      "totalPages": 370,
      "totalTemas": 7,
      "description": "Sayfa 6 - 370. Konu kavrama etkinlikleri (2 sayfa) ve ünite tarama testleri."
    }
  ],
  "jumboData": {
    "1": [
      "B",
      "C",
      "C",
      "C",
      "A",
      "A",
      "C",
      "D",
      "A",
      "D",
      "C",
      "A",
      "B",
      "A",
      "C",
      "D",
      "B",
      "D",
      "C",
      "B"
    ],
    "2": [
      "A",
      "B",
      "B",
      "B",
      "C",
      "B",
      "D",
      "D",
      "A",
      "A",
      "D",
      "D",
      "C",
      "C",
      "A",
      "C",
      "C",
      "C",
      "B",
      "D"
    ],
    "3": [
      "D",
      "C",
      "D",
      "A",
      "D",
      "D",
      "B",
      "B",
      "C",
      "D",
      "A",
      "B",
      "A",
      "C",
      "D",
      "B",
      "A",
      "C",
      "C",
      "B"
    ],
    "4": [
      "D",
      "C",
      "C",
      "D",
      "D",
      "B",
      "D",
      "C",
      "D",
      "D",
      "A",
      "C",
      "A",
      "B",
      "B",
      "C",
      "C",
      "A",
      "D",
      "D"
    ],
    "5": [
      "A",
      "A",
      "C",
      "B",
      "B",
      "C",
      "C",
      "A",
      "C",
      "C",
      "D",
      "D",
      "C",
      "D",
      "C",
      "B",
      "A",
      "B",
      "D",
      "A"
    ],
    "6": [
      "C",
      "A",
      "B",
      "D",
      "B",
      "C",
      "A",
      "A",
      "C",
      "A",
      "B",
      "C",
      "B",
      "D",
      "B",
      "D",
      "B",
      "C",
      "B",
      "C"
    ],
    "7": [
      "B",
      "B",
      "C",
      "C",
      "D",
      "A",
      "A",
      "C",
      "B",
      "B",
      "B",
      "C",
      "B",
      "D",
      "A",
      "B",
      "A",
      "C",
      "A",
      "A"
    ],
    "8": [
      "C",
      "B",
      "A",
      "C",
      "A",
      "B",
      "B",
      "C",
      "B",
      "A",
      "B",
      "B",
      "B",
      "A",
      "C",
      "C",
      "C",
      "C",
      "B",
      "C"
    ],
    "9": [
      "B",
      "C",
      "A",
      "C",
      "A",
      "B",
      "A",
      "B",
      "C",
      "C",
      "D",
      "D",
      "B",
      "A",
      "B",
      "C",
      "D",
      "C",
      "C",
      "B"
    ],
    "10": [
      "B",
      "A",
      "B",
      "C",
      "A",
      "D",
      "D",
      "B",
      "B",
      "C",
      "C",
      "C",
      "B",
      "B",
      "A",
      "B",
      "B",
      "A",
      "D",
      "A"
    ],
    "11": [
      "B",
      "D",
      "B",
      "C",
      "C",
      "B",
      "D",
      "C",
      "D",
      "C",
      "D",
      "B",
      "C",
      "B",
      "D",
      "B",
      "B",
      "A",
      "C",
      "D"
    ],
    "12": [
      "D",
      "B",
      "A",
      "B",
      "A",
      "C",
      "B",
      "C",
      "D",
      "A",
      "B",
      "A",
      "C",
      "B",
      "D",
      "A",
      "C",
      "C",
      "C",
      "D"
    ],
    "13": [
      "D",
      "B",
      "C",
      "D",
      "A",
      "B",
      "D",
      "C",
      "B",
      "D",
      "A",
      "D",
      "A",
      "B",
      "C",
      "A",
      "A",
      "D",
      "C",
      "D"
    ],
    "14": [
      "B",
      "C",
      "D",
      "C",
      "A",
      "D",
      "B",
      "C",
      "D",
      "D",
      "B",
      "D",
      "A",
      "B",
      "C",
      "D",
      "C",
      "D",
      "D",
      "B"
    ],
    "15": [
      "B",
      "A",
      "C",
      "D",
      "D",
      "D",
      "C",
      "A",
      "B",
      "D",
      "C",
      "A",
      "C",
      "C",
      "D",
      "D",
      "C",
      "C",
      "B",
      "C"
    ],
    "16": [
      "A",
      "D",
      "B",
      "B",
      "B",
      "A",
      "B",
      "C",
      "A",
      "A",
      "D",
      "B",
      "D",
      "C",
      "D",
      "A",
      "D",
      "C",
      "A",
      "D"
    ],
    "17": [
      "A",
      "A",
      "D",
      "B",
      "C",
      "C",
      "A",
      "D",
      "B",
      "C",
      "B",
      "C",
      "B",
      "A",
      "B",
      "C",
      "B",
      "D",
      "C",
      "B"
    ],
    "18": [
      "C",
      "A",
      "B",
      "D",
      "C",
      "D",
      "C",
      "A",
      "D",
      "A",
      "C",
      "A",
      "D",
      "A",
      "B",
      "A",
      "A",
      "D",
      "B",
      "A"
    ],
    "19": [
      "B",
      "C",
      "A",
      "D",
      "C",
      "B",
      "A",
      "D",
      "C",
      "C",
      "B",
      "A",
      "C",
      "A",
      "D",
      "C",
      "B",
      "B",
      "D",
      "D"
    ],
    "20": [
      "C",
      "A",
      "B",
      "C",
      "D",
      "B",
      "A",
      "C",
      "D",
      "B",
      "D",
      "C",
      "D",
      "A",
      "B",
      "B",
      "D",
      "A",
      "C",
      "D"
    ],
    "21": [
      "C",
      "A",
      "D",
      "B",
      "B",
      "A",
      "B",
      "C",
      "D",
      "A",
      "B",
      "B",
      "C",
      "B",
      "C",
      "A",
      "C",
      "D",
      "A",
      "B"
    ],
    "22": [
      "B",
      "B",
      "A",
      "C",
      "C",
      "D",
      "C",
      "C",
      "A",
      "D",
      "B",
      "D",
      "B",
      "C",
      "C",
      "B",
      "D",
      "C",
      "C",
      "C"
    ],
    "23": [
      "B",
      "B",
      "D",
      "C",
      "C",
      "B",
      "D",
      "C",
      "A",
      "D",
      "A",
      "B",
      "B",
      "C",
      "B",
      "D",
      "C",
      "A",
      "B",
      "C"
    ],
    "24": [
      "C",
      "B",
      "C",
      "B",
      "C",
      "B",
      "A",
      "B",
      "A",
      "C",
      "D",
      "D",
      "D",
      "D",
      "D",
      "C",
      "D",
      "A",
      "A",
      "C"
    ],
    "25": [
      "D",
      "A",
      "D",
      "C",
      "B",
      "B",
      "A",
      "D",
      "B",
      "C",
      "D",
      "B",
      "B",
      "C",
      "A",
      "C",
      "D",
      "B",
      "C",
      "B"
    ],
    "26": [
      "A",
      "D",
      "A",
      "B",
      "D",
      "B",
      "C",
      "C",
      "D",
      "A",
      "C",
      "B",
      "B",
      "B",
      "D",
      "D",
      "B",
      "C",
      "B",
      "D"
    ]
  },
  "isemData": {
    "1. Tema: Sayılar ve Nicelikler (1)": {
      "1": [
        "C",
        "B",
        "C",
        "B",
        "C",
        "C",
        "A",
        "C",
        "C",
        "B",
        "D",
        "A",
        "D",
        "A"
      ],
      "2": [
        "C",
        "D",
        "B",
        "A",
        "A",
        "B",
        "A",
        "D",
        "A",
        "A",
        "D",
        "C",
        "B",
        "B"
      ],
      "3": [
        "D",
        "A",
        "A",
        "A",
        "D",
        "B",
        "A"
      ],
      "4": [
        "D",
        "A",
        "C",
        "C"
      ],
      "5": [
        "B",
        "A",
        "D",
        "C",
        "D",
        "B",
        "A",
        "C",
        "D",
        "C",
        "A",
        "A",
        "D",
        "C"
      ],
      "6": [
        "D",
        "B",
        "C",
        "D",
        "C",
        "A",
        "C",
        "A",
        "C",
        "A",
        "C",
        "D",
        "C",
        "D"
      ],
      "7": [
        "B",
        "A",
        "C",
        "D",
        "D",
        "C",
        "A",
        "C"
      ],
      "8": [
        "B",
        "C",
        "D",
        "C"
      ],
      "9": [
        "C",
        "A",
        "B",
        "C",
        "D",
        "C",
        "A",
        "A",
        "D",
        "C",
        "C",
        "C",
        "A",
        "A"
      ],
      "10": [
        "D",
        "C",
        "C",
        "A",
        "B",
        "A",
        "C",
        "B",
        "A",
        "B",
        "D",
        "A",
        "B",
        "A"
      ],
      "11": [
        "B",
        "C",
        "B",
        "A",
        "D",
        "A",
        "B",
        "D",
        "B"
      ],
      "12": [
        "B",
        "C",
        "B",
        "B",
        "C",
        "A"
      ],
      "13": [
        "D",
        "B",
        "A",
        "C",
        "B",
        "D",
        "A",
        "B",
        "C",
        "C",
        "A",
        "B",
        "D",
        "A"
      ],
      "14": [
        "C",
        "A",
        "D",
        "A",
        "D",
        "D",
        "A",
        "C",
        "B",
        "A",
        "B",
        "D",
        "A",
        "A"
      ],
      "15": [
        "B",
        "D",
        "C",
        "D",
        "B",
        "B",
        "B",
        "A",
        "B",
        "A",
        "D",
        "A",
        "C"
      ],
      "16": [
        "B",
        "C",
        "D",
        "A",
        "B",
        "A",
        "B",
        "C"
      ],
      "17": [
        "A",
        "A",
        "B",
        "B",
        "B",
        "A"
      ],
      "18": [
        "D",
        "C",
        "C",
        "D",
        "A",
        "D",
        "D",
        "A",
        "C",
        "A",
        "D",
        "B",
        "D",
        "A"
      ],
      "19": [
        "C",
        "C",
        "C",
        "D"
      ]
    },
    "2. Tema: Veriden Olasılığa": {
      "1": [
        "C",
        "A",
        "A",
        "D",
        "B",
        "C",
        "C",
        "D",
        "B",
        "C",
        "D",
        "A",
        "C"
      ],
      "2": [
        "B",
        "C",
        "C",
        "D",
        "B",
        "D",
        "A",
        "A",
        "D",
        "C",
        "B",
        "B",
        "D"
      ],
      "3": [
        "A",
        "C",
        "B",
        "D",
        "D",
        "B",
        "C",
        "C"
      ],
      "4": [
        "C",
        "C",
        "A",
        "D",
        "C"
      ],
      "5": [
        "C",
        "C",
        "A"
      ],
      "6": [
        "A",
        "B",
        "D"
      ],
      "7": [
        "D",
        "B",
        "B",
        "B",
        "A",
        "C",
        "B",
        "A",
        "B",
        "D",
        "B"
      ],
      "8": [
        "B",
        "A",
        "D",
        "B",
        "B"
      ]
    },
    "3. Tema: Sayılar ve Nicelikler (2)": {
      "1": [
        "C",
        "B",
        "C",
        "D",
        "A",
        "D",
        "D",
        "A",
        "D",
        "D",
        "B",
        "D",
        "A",
        "B"
      ],
      "2": [
        "B",
        "A",
        "A",
        "B",
        "B"
      ],
      "3": [
        "B",
        "C",
        "A",
        "A"
      ],
      "4": [
        "C",
        "B",
        "B",
        "A",
        "D",
        "C",
        "C",
        "A",
        "B",
        "B",
        "A",
        "C",
        "B",
        "C"
      ],
      "5": [
        "C",
        "D",
        "D",
        "D",
        "C",
        "B",
        "A",
        "B",
        "A"
      ],
      "6": [
        "C",
        "A",
        "D",
        "A"
      ],
      "7": [
        "A",
        "D",
        "A",
        "A",
        "C",
        "D",
        "D",
        "B",
        "C",
        "A",
        "C",
        "B",
        "D"
      ],
      "8": [
        "C",
        "A",
        "B",
        "D",
        "A",
        "B"
      ],
      "9": [
        "B",
        "A",
        "D",
        "B",
        "C"
      ],
      "10": [
        "B",
        "A",
        "D",
        "B",
        "C",
        "B",
        "D",
        "C",
        "C",
        "C",
        "D",
        "D",
        "A",
        "B"
      ],
      "11": [
        "C",
        "D",
        "A",
        "D",
        "C",
        "B",
        "A",
        "B",
        "B",
        "C",
        "A",
        "B"
      ],
      "12": [
        "C",
        "A",
        "B",
        "A",
        "D",
        "B",
        "D",
        "C",
        "A"
      ],
      "13": [
        "D",
        "C",
        "D",
        "A"
      ],
      "14": [
        "C",
        "B",
        "B",
        "B"
      ],
      "15": [
        "A",
        "B",
        "C",
        "D",
        "D",
        "C",
        "B",
        "A",
        "B",
        "B",
        "D",
        "A"
      ],
      "16": [
        "C",
        "D",
        "A",
        "D",
        "D",
        "C"
      ],
      "17": [
        "B",
        "C",
        "D",
        "B"
      ],
      "18": [
        "B",
        "C",
        "A",
        "C",
        "A",
        "D",
        "B",
        "D",
        "B",
        "B",
        "C",
        "A",
        "D",
        "C",
        "C",
        "B"
      ],
      "19": [
        "A",
        "D",
        "C",
        "A",
        "B",
        "D",
        "D",
        "C",
        "C",
        "D",
        "A",
        "C",
        "A",
        "B"
      ],
      "20": [
        "D",
        "B",
        "B",
        "D",
        "B",
        "B",
        "C",
        "C"
      ],
      "21": [
        "A",
        "B",
        "D",
        "C",
        "B",
        "C"
      ],
      "22": [
        "C",
        "B",
        "D",
        "A",
        "B",
        "C",
        "B",
        "D",
        "D",
        "B",
        "C",
        "C",
        "B",
        "D"
      ],
      "23": [
        "C",
        "D",
        "B",
        "A",
        "B",
        "D",
        "B",
        "C",
        "A"
      ],
      "24": [
        "A",
        "B",
        "D",
        "B"
      ],
      "25": [
        "C",
        "B",
        "B",
        "C",
        "D",
        "D",
        "B",
        "D",
        "A",
        "D",
        "D",
        "A"
      ],
      "26": [
        "C",
        "B",
        "A",
        "C",
        "D",
        "D",
        "B",
        "A"
      ],
      "27": [
        "C",
        "D",
        "A",
        "B"
      ],
      "28": [
        "D",
        "A",
        "D",
        "B",
        "D",
        "C",
        "C",
        "B",
        "D",
        "D",
        "C",
        "A",
        "A",
        "B",
        "C",
        "B"
      ],
      "29": [
        "D",
        "A",
        "C",
        "C"
      ]
    },
    "4. Tema: İstatistiksel Araştırma Süreci": {
      "1": [
        "C",
        "D",
        "B",
        "D",
        "B",
        "A",
        "A",
        "C",
        "D",
        "D",
        "C",
        "B"
      ],
      "2": [
        "C",
        "A",
        "B",
        "D",
        "A",
        "B",
        "D",
        "C",
        "B",
        "A",
        "B"
      ],
      "3": [
        "C",
        "B",
        "C",
        "C",
        "B",
        "D"
      ],
      "4": [
        "C",
        "B",
        "D"
      ],
      "5": [
        "B",
        "A",
        "B",
        "C",
        "A",
        "D",
        "B",
        "D",
        "A",
        "B"
      ],
      "6": [
        "B",
        "A",
        "C",
        "D"
      ],
      "7": [
        "D",
        "B",
        "C",
        "C",
        "A"
      ],
      "8": [
        "C",
        "D",
        "A",
        "D",
        "B",
        "A",
        "B",
        "D",
        "C",
        "A",
        "C",
        "D",
        "B",
        "C"
      ],
      "9": [
        "B",
        "D",
        "A",
        "B",
        "A",
        "B",
        "C",
        "C",
        "D",
        "A",
        "B",
        "A",
        "A"
      ],
      "10": [
        "A",
        "B",
        "D",
        "A",
        "B",
        "C"
      ],
      "11": [
        "D",
        "D",
        "C",
        "B",
        "A",
        "D"
      ],
      "12": [
        "B",
        "C",
        "C",
        "C",
        "A"
      ],
      "13": [
        "C",
        "A",
        "C",
        "B"
      ],
      "14": [
        "B",
        "C",
        "A",
        "C",
        "A",
        "D",
        "B",
        "B"
      ],
      "15": [
        "C",
        "D",
        "B",
        "A",
        "B",
        "D"
      ],
      "16": [
        "D",
        "C",
        "D",
        "B",
        "C",
        "B",
        "D"
      ],
      "17": [
        "C",
        "A",
        "D",
        "C",
        "C",
        "A",
        "A",
        "B",
        "B",
        "C",
        "C",
        "A",
        "B",
        "D",
        "B",
        "B"
      ],
      "18": [
        "D",
        "B",
        "B",
        "C"
      ]
    },
    "5. Tema: Geometrik Şekiller": {
      "1": [
        "A",
        "C",
        "D",
        "C",
        "D",
        "B",
        "D",
        "A"
      ],
      "2": [
        "B",
        "C",
        "A",
        "D",
        "C",
        "D",
        "B",
        "A"
      ],
      "3": [
        "A",
        "C",
        "A",
        "B"
      ],
      "4": [
        "B",
        "A",
        "C",
        "C",
        "A",
        "D",
        "B",
        "C"
      ],
      "5": [
        "C",
        "A",
        "D",
        "B",
        "B",
        "D"
      ],
      "6": [
        "A",
        "A",
        "B",
        "D"
      ],
      "7": [
        "D",
        "C",
        "A",
        "C",
        "B",
        "D",
        "D",
        "B",
        "B",
        "B",
        "A",
        "C"
      ],
      "8": [
        "A",
        "A",
        "C",
        "A",
        "D",
        "C"
      ],
      "9": [
        "C",
        "C",
        "B",
        "B"
      ],
      "10": [
        "D",
        "B",
        "A",
        "C",
        "D",
        "A",
        "B",
        "C",
        "D",
        "A",
        "C",
        "B"
      ],
      "11": [
        "A",
        "B",
        "C",
        "B",
        "D",
        "C",
        "A"
      ],
      "12": [
        "B",
        "C",
        "A",
        "C"
      ],
      "13": [
        "A",
        "D",
        "C",
        "B",
        "B",
        "C",
        "D",
        "A"
      ],
      "14": [
        "C",
        "B",
        "D",
        "A",
        "B",
        "A"
      ],
      "15": [
        "D",
        "A",
        "C",
        "B"
      ],
      "16": [
        "D",
        "A",
        "C",
        "C",
        "D",
        "D",
        "A",
        "A",
        "C",
        "B",
        "A",
        "C",
        "A",
        "C",
        "C",
        "A"
      ],
      "17": [
        "C",
        "D",
        "D",
        "C"
      ]
    },
    "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler": {
      "1": [
        "C",
        "A",
        "D",
        "A",
        "B",
        "B",
        "D",
        "C",
        "B",
        "D",
        "B",
        "D"
      ],
      "2": [
        "D",
        "D",
        "A",
        "C",
        "D",
        "C",
        "B",
        "B",
        "C",
        "C",
        "D",
        "A"
      ],
      "3": [
        "C",
        "A",
        "A",
        "D",
        "A",
        "C"
      ],
      "4": [
        "D",
        "A",
        "D",
        "B",
        "D",
        "A"
      ],
      "5": [
        "D",
        "C",
        "B",
        "A"
      ],
      "6": [
        "B",
        "B",
        "D",
        "C",
        "C",
        "A",
        "D",
        "B",
        "C",
        "C",
        "A",
        "D",
        "D",
        "B",
        "A"
      ],
      "7": [
        "C",
        "A",
        "D",
        "B",
        "C",
        "A",
        "B",
        "C",
        "B",
        "A",
        "D",
        "C"
      ],
      "8": [
        "B",
        "C",
        "A",
        "D",
        "A"
      ],
      "9": [
        "A",
        "C",
        "C",
        "B",
        "C",
        "C"
      ],
      "10": [
        "C",
        "B",
        "B",
        "C",
        "B"
      ],
      "11": [
        "A",
        "D",
        "B",
        "B",
        "C",
        "A",
        "B"
      ],
      "12": [
        "C",
        "C",
        "C",
        "D",
        "B",
        "B",
        "D"
      ],
      "13": [
        "B",
        "C",
        "A",
        "D",
        "C"
      ],
      "14": [
        "C",
        "D",
        "C",
        "B"
      ],
      "15": [
        "A",
        "D",
        "B",
        "A",
        "D"
      ],
      "16": [
        "C",
        "B"
      ],
      "17": [
        "B",
        "A",
        "D",
        "C",
        "A",
        "C",
        "B",
        "D",
        "C",
        "B",
        "C",
        "B"
      ],
      "18": [
        "B",
        "C",
        "D",
        "B"
      ]
    },
    "7. Tema: Geometrik Nicelikler": {
      "1": [
        "A",
        "A",
        "B",
        "D",
        "A",
        "C",
        "A",
        "C",
        "D",
        "D",
        "B",
        "C"
      ],
      "2": [
        "C",
        "C",
        "B",
        "B",
        "C",
        "D"
      ],
      "3": [
        "A",
        "C",
        "A",
        "C"
      ],
      "4": [
        "C",
        "B",
        "B",
        "A",
        "C",
        "D",
        "C",
        "D",
        "B",
        "A",
        "B",
        "C"
      ],
      "5": [
        "C",
        "C",
        "D",
        "B",
        "B",
        "A"
      ],
      "6": [
        "C",
        "B",
        "D",
        "A"
      ],
      "7": [
        "A",
        "D",
        "C",
        "D",
        "B",
        "A",
        "B",
        "A",
        "C",
        "D"
      ],
      "8": [
        "B",
        "C",
        "D",
        "C",
        "B",
        "C",
        "D",
        "C",
        "B",
        "D"
      ],
      "9": [
        "B",
        "A",
        "D",
        "C",
        "B",
        "D"
      ],
      "10": [
        "A",
        "A",
        "A",
        "C",
        "D"
      ],
      "11": [
        "D",
        "D",
        "A",
        "A",
        "A",
        "D",
        "A",
        "A"
      ],
      "12": [
        "A",
        "B",
        "C",
        "B"
      ],
      "13": [
        "B",
        "D",
        "A",
        "C"
      ],
      "14": [
        "D",
        "D",
        "B",
        "A",
        "C",
        "C",
        "B",
        "A",
        "C",
        "A",
        "D",
        "B"
      ],
      "15": [
        "C",
        "C",
        "B",
        "B",
        "D",
        "C",
        "A"
      ],
      "16": [
        "B",
        "A",
        "A",
        "A"
      ],
      "17": [
        "B",
        "D",
        "D",
        "A",
        "B",
        "C",
        "D",
        "D",
        "D",
        "C",
        "D",
        "C"
      ],
      "18": [
        "B",
        "D",
        "A",
        "D",
        "B",
        "A"
      ],
      "19": [
        "C",
        "B",
        "C",
        "D"
      ],
      "20": [
        "D",
        "B",
        "C",
        "C",
        "D",
        "C",
        "B",
        "A",
        "B",
        "D",
        "A",
        "B"
      ],
      "21": [
        "C",
        "B",
        "C",
        "D"
      ]
    }
  },
  "parkurStructure": [
    {
      "tema_id": 1,
      "tema_title": "1. Tema: Sayılar ve Nicelikler (1)",
      "units": [
        {
          "type": "activity",
          "pages": "6 - 7",
          "title": "Doğal Sayılarla İşlemler & Üslü İfadeler (2 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "8 - 9",
          "title": "İşlem Önceliği (2 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "10 - 11",
          "title": "Dağılma Özelliği & Ortak Çarpan (2 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "12 - 13",
          "title": "Tema 1: Test 1 (13 Soru)",
          "test_no": 1,
          "q_count": 13,
          "answers": [
            "D",
            "B",
            "C",
            "C",
            "A",
            "D",
            "B",
            "C",
            "A",
            "C",
            "D",
            "B",
            "A"
          ]
        },
        {
          "type": "activity",
          "pages": "14 - 15",
          "title": "Doğal Sayı Problemleri - 1 (2 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "16 - 17",
          "title": "Doğal Sayı Problemleri - 2 (2 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "18 - 19",
          "title": "Tema 1: Test 2 (15 Soru)",
          "test_no": 2,
          "q_count": 15,
          "answers": [
            "C",
            "A",
            "D",
            "B",
            "B",
            "C",
            "A",
            "D",
            "C",
            "A",
            "B",
            "D",
            "C",
            "B",
            "A"
          ]
        },
        {
          "type": "activity",
          "pages": "20 - 21",
          "title": "Çarpanlar ve Katlar (2 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "22 - 23",
          "title": "Bölünebilme Kuralları - 1 (2 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "24 - 25",
          "title": "Bölünebilme Kuralları - 2 (2 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "26 - 27",
          "title": "Tema 1: Test 3 (14 Soru)",
          "test_no": 3,
          "q_count": 14,
          "answers": [
            "B",
            "D",
            "C",
            "A",
            "A",
            "B",
            "D",
            "C",
            "B",
            "A",
            "C",
            "D",
            "B",
            "D"
          ]
        },
        {
          "type": "activity",
          "pages": "28 - 29",
          "title": "Asal Sayılar ve Asal Çarpanlar (2 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "30 - 32",
          "title": "Ortak Bölenler, Katlar ve Kümeler (3 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "33 - 34",
          "title": "Tema 1: Test 4 - Tarama (12 Soru)",
          "test_no": 4,
          "q_count": 12,
          "answers": [
            "A",
            "C",
            "D",
            "B",
            "B",
            "A",
            "D",
            "C",
            "A",
            "B",
            "C",
            "D"
          ]
        },
        {
          "type": "test",
          "pages": "35 - 36",
          "title": "Tema 1: Test 5 - Tarama (12 Soru)",
          "test_no": 5,
          "q_count": 12,
          "answers": [
            "C",
            "B",
            "A",
            "D",
            "C",
            "A",
            "B",
            "D",
            "A",
            "D",
            "C",
            "B"
          ]
        },
        {
          "type": "test",
          "pages": "37 - 38",
          "title": "Tema 1: Test 6 - Beceri Temelli (12 Soru)",
          "test_no": 6,
          "q_count": 12,
          "answers": [
            "B",
            "D",
            "A",
            "C",
            "D",
            "B",
            "A",
            "C",
            "C",
            "B",
            "D",
            "A"
          ]
        },
        {
          "type": "test",
          "pages": "39 - 40",
          "title": "Tema 1: Test 7 - Beceri Temelli (12 Soru)",
          "test_no": 7,
          "q_count": 12,
          "answers": [
            "D",
            "A",
            "C",
            "B",
            "A",
            "C",
            "D",
            "B",
            "B",
            "C",
            "A",
            "D"
          ]
        },
        {
          "type": "test",
          "pages": "41 - 42",
          "title": "Tema 1: Test 8 - Beceri Temelli (12 Soru)",
          "test_no": 8,
          "q_count": 12,
          "answers": [
            "A",
            "D",
            "B",
            "C",
            "C",
            "A",
            "D",
            "B",
            "A",
            "C",
            "B",
            "D"
          ]
        },
        {
          "type": "test",
          "pages": "43 - 44",
          "title": "Tema 1: Test 9 - Beceri Temelli (12 Soru)",
          "test_no": 9,
          "q_count": 12,
          "answers": [
            "C",
            "B",
            "D",
            "A",
            "B",
            "D",
            "C",
            "A",
            "D",
            "B",
            "A",
            "C"
          ]
        },
        {
          "type": "test",
          "pages": "45 - 46",
          "title": "Tema 1: Test 10 - Beceri Temelli (12 Soru)",
          "test_no": 10,
          "q_count": 12,
          "answers": [
            "B",
            "A",
            "C",
            "D",
            "A",
            "C",
            "B",
            "D",
            "C",
            "A",
            "D",
            "B"
          ]
        }
      ]
    },
    {
      "tema_id": 2,
      "tema_title": "2. Tema: Veriden Olasılığa",
      "units": [
        {
          "type": "activity",
          "pages": "48 - 49",
          "title": "Araştırma Soruları ve Veri Toplama (2 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "50 - 51",
          "title": "Sıklık Tablosu Oluşturma (2 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "52 - 53",
          "title": "Tema 2: Test 1 (12 Soru)",
          "test_no": 1,
          "q_count": 12,
          "answers": [
            "C",
            "A",
            "B",
            "D",
            "A",
            "C",
            "D",
            "B",
            "C",
            "B",
            "A",
            "D"
          ]
        },
        {
          "type": "activity",
          "pages": "54 - 57",
          "title": "İkili Sütun Grafiği (4 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "58 - 61",
          "title": "Aritmetik Ortalama (4 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "62 - 65",
          "title": "Açıklık ve Veri Analizi (4 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "66 - 70",
          "title": "Verileri Karşılaştırma ve Yorumlama (5 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "71 - 72",
          "title": "Tema 2: Test 2 (12 Soru)",
          "test_no": 2,
          "q_count": 12,
          "answers": [
            "A",
            "D",
            "C",
            "B",
            "B",
            "D",
            "A",
            "C",
            "D",
            "A",
            "B",
            "C"
          ]
        },
        {
          "type": "test",
          "pages": "73 - 74",
          "title": "Tema 2: Test 3 (12 Soru)",
          "test_no": 3,
          "q_count": 12,
          "answers": [
            "B",
            "C",
            "A",
            "D",
            "C",
            "A",
            "D",
            "B",
            "A",
            "C",
            "B",
            "D"
          ]
        },
        {
          "type": "test",
          "pages": "75 - 76",
          "title": "Tema 2: Test 4 (12 Soru)",
          "test_no": 4,
          "q_count": 12,
          "answers": [
            "D",
            "A",
            "B",
            "C",
            "A",
            "D",
            "C",
            "B",
            "B",
            "C",
            "D",
            "A"
          ]
        },
        {
          "type": "test",
          "pages": "77 - 78",
          "title": "Tema 2: Test 5 (12 Soru)",
          "test_no": 5,
          "q_count": 12,
          "answers": [
            "C",
            "B",
            "D",
            "A",
            "D",
            "C",
            "B",
            "A",
            "C",
            "A",
            "D",
            "B"
          ]
        },
        {
          "type": "test",
          "pages": "79 - 82",
          "title": "Tema 2: Test 6 - Beceri Temelli (16 Soru)",
          "test_no": 6,
          "q_count": 16,
          "answers": [
            "A",
            "C",
            "D",
            "B",
            "B",
            "A",
            "D",
            "C",
            "A",
            "B",
            "C",
            "D",
            "B",
            "D",
            "A",
            "C"
          ]
        }
      ]
    },
    {
      "tema_id": 3,
      "tema_title": "3. Tema: Sayılar ve Nicelikler (2)",
      "units": [
        {
          "type": "activity",
          "pages": "84 - 87",
          "title": "Tam Sayıların Anlamı ve Gösterimi (4 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "88 - 91",
          "title": "Sayı Doğrusunda Gösterme & Karşılaştırma (4 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "92 - 95",
          "title": "Mutlak Değer (4 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "96 - 101",
          "title": "Tam Sayılarda Sıralama ve Uygulamalar (6 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "102 - 104",
          "title": "Tam Sayılar Test 1 (12 Soru)",
          "test_no": 1,
          "q_count": 12,
          "answers": [
            "B",
            "C",
            "A",
            "D",
            "D",
            "B",
            "A",
            "C",
            "C",
            "B",
            "D",
            "A"
          ]
        },
        {
          "type": "test",
          "pages": "105 - 106",
          "title": "Tam Sayılar Test 2 (12 Soru)",
          "test_no": 2,
          "q_count": 12,
          "answers": [
            "A",
            "D",
            "B",
            "C",
            "C",
            "A",
            "D",
            "B",
            "B",
            "D",
            "C",
            "A"
          ]
        },
        {
          "type": "test",
          "pages": "107 - 108",
          "title": "Tam Sayılar Test 3 (12 Soru)",
          "test_no": 3,
          "q_count": 12,
          "answers": [
            "C",
            "A",
            "D",
            "B",
            "B",
            "D",
            "C",
            "A",
            "D",
            "A",
            "B",
            "C"
          ]
        },
        {
          "type": "activity",
          "pages": "110 - 115",
          "title": "Kesirleri Sadeleştirme ve Sıralama (6 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "116 - 121",
          "title": "Kesirlerle Toplama ve Çıkarma (6 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "122 - 127",
          "title": "Kesirlerle Çarpma İşlemi (6 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "128 - 135",
          "title": "Kesirlerle Bölme İşlemi (8 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "136 - 145",
          "title": "Kesir Problemleri ve Uygulamalar (10 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "146 - 147",
          "title": "Kesirler Test 1 (12 Soru)",
          "test_no": 4,
          "q_count": 12,
          "answers": [
            "D",
            "B",
            "C",
            "A",
            "A",
            "D",
            "B",
            "C",
            "B",
            "C",
            "A",
            "D"
          ]
        },
        {
          "type": "test",
          "pages": "148 - 149",
          "title": "Kesirler Test 2 (12 Soru)",
          "test_no": 5,
          "q_count": 12,
          "answers": [
            "A",
            "C",
            "D",
            "B",
            "D",
            "A",
            "C",
            "B",
            "C",
            "A",
            "B",
            "D"
          ]
        },
        {
          "type": "test",
          "pages": "150 - 152",
          "title": "Kesirler Test 3 (14 Soru)",
          "test_no": 6,
          "q_count": 14,
          "answers": [
            "B",
            "D",
            "A",
            "C",
            "C",
            "B",
            "D",
            "A",
            "A",
            "C",
            "B",
            "D",
            "B",
            "A"
          ]
        },
        {
          "type": "test",
          "pages": "153 - 155",
          "title": "Kesirler Test 4 (14 Soru)",
          "test_no": 7,
          "q_count": 14,
          "answers": [
            "C",
            "A",
            "B",
            "D",
            "B",
            "D",
            "A",
            "C",
            "D",
            "B",
            "C",
            "A",
            "D",
            "C"
          ]
        },
        {
          "type": "test",
          "pages": "156 - 158",
          "title": "Kesirler Test 5 - Beceri Temelli (14 Soru)",
          "test_no": 8,
          "q_count": 14,
          "answers": [
            "D",
            "B",
            "C",
            "A",
            "C",
            "A",
            "D",
            "B",
            "A",
            "D",
            "B",
            "C",
            "C",
            "B"
          ]
        },
        {
          "type": "activity",
          "pages": "160 - 165",
          "title": "Bölme ve Ondalık Gösterim (6 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "166 - 171",
          "title": "Ondalık Gösterimde Yuvarlama (6 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "172 - 178",
          "title": "Ondalık Sayılarda Çarpma ve Bölme (7 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "179 - 180",
          "title": "Ondalık Gösterim Test 1 (12 Soru)",
          "test_no": 9,
          "q_count": 12,
          "answers": [
            "A",
            "C",
            "B",
            "D",
            "D",
            "A",
            "B",
            "C",
            "C",
            "D",
            "A",
            "B"
          ]
        },
        {
          "type": "test",
          "pages": "181 - 182",
          "title": "Ondalık Gösterim Test 2 (12 Soru)",
          "test_no": 10,
          "q_count": 12,
          "answers": [
            "B",
            "D",
            "C",
            "A",
            "A",
            "C",
            "D",
            "B",
            "B",
            "A",
            "C",
            "D"
          ]
        },
        {
          "type": "test",
          "pages": "183 - 185",
          "title": "Ondalık Gösterim Test 3 (14 Soru)",
          "test_no": 11,
          "q_count": 14,
          "answers": [
            "C",
            "A",
            "D",
            "B",
            "B",
            "C",
            "A",
            "D",
            "D",
            "B",
            "A",
            "C",
            "A",
            "D"
          ]
        },
        {
          "type": "test",
          "pages": "186 - 188",
          "title": "Ondalık Gösterim Test 4 - Beceri Temelli (14 Soru)",
          "test_no": 12,
          "q_count": 14,
          "answers": [
            "D",
            "B",
            "A",
            "C",
            "C",
            "D",
            "B",
            "A",
            "A",
            "C",
            "D",
            "B",
            "C",
            "B"
          ]
        },
        {
          "type": "activity",
          "pages": "190 - 195",
          "title": "Çoklukları Karşılaştırma ve Oran (6 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "196 - 200",
          "title": "Birimli ve Birimsiz Oran, Yüzdeler (5 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "201 - 202",
          "title": "Oran & Yüzde Test 1 (12 Soru)",
          "test_no": 13,
          "q_count": 12,
          "answers": [
            "A",
            "D",
            "B",
            "C",
            "B",
            "A",
            "D",
            "C",
            "C",
            "B",
            "A",
            "D"
          ]
        },
        {
          "type": "test",
          "pages": "203 - 204",
          "title": "Oran & Yüzde Test 2 (12 Soru)",
          "test_no": 14,
          "q_count": 12,
          "answers": [
            "B",
            "C",
            "A",
            "D",
            "D",
            "B",
            "C",
            "A",
            "A",
            "D",
            "B",
            "C"
          ]
        },
        {
          "type": "test",
          "pages": "205 - 206",
          "title": "Oran & Yüzde Test 3 - Beceri Temelli (12 Soru)",
          "test_no": 15,
          "q_count": 12,
          "answers": [
            "C",
            "A",
            "D",
            "B",
            "A",
            "C",
            "B",
            "D",
            "D",
            "B",
            "A",
            "C"
          ]
        }
      ]
    },
    {
      "tema_id": 4,
      "tema_title": "4. Tema: İstatistiksel Araştırma Süreci",
      "units": [
        {
          "type": "activity",
          "pages": "208 - 209",
          "title": "İstatistiksel Araştırma Aşamaları (2 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "210 - 212",
          "title": "Veri Toplama ve Çizelgeleme (3 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "213 - 214",
          "title": "Tema 4: Test 1 (12 Soru)",
          "test_no": 1,
          "q_count": 12,
          "answers": [
            "D",
            "B",
            "C",
            "A",
            "A",
            "C",
            "D",
            "B",
            "B",
            "D",
            "A",
            "C"
          ]
        },
        {
          "type": "test",
          "pages": "215 - 216",
          "title": "Tema 4: Test 2 (12 Soru)",
          "test_no": 2,
          "q_count": 12,
          "answers": [
            "A",
            "C",
            "D",
            "B",
            "B",
            "A",
            "C",
            "D",
            "C",
            "A",
            "B",
            "D"
          ]
        },
        {
          "type": "test",
          "pages": "217 - 218",
          "title": "Tema 4: Test 3 (12 Soru)",
          "test_no": 3,
          "q_count": 12,
          "answers": [
            "B",
            "D",
            "A",
            "C",
            "C",
            "B",
            "D",
            "A",
            "D",
            "B",
            "C",
            "A"
          ]
        },
        {
          "type": "test",
          "pages": "219 - 220",
          "title": "Tema 4: Test 4 (12 Soru)",
          "test_no": 4,
          "q_count": 12,
          "answers": [
            "C",
            "A",
            "B",
            "D",
            "D",
            "C",
            "A",
            "B",
            "A",
            "D",
            "B",
            "C"
          ]
        },
        {
          "type": "test",
          "pages": "221 - 222",
          "title": "Tema 4: Test 5 - Beceri Temelli (12 Soru)",
          "test_no": 5,
          "q_count": 12,
          "answers": [
            "D",
            "B",
            "C",
            "A",
            "A",
            "D",
            "B",
            "C",
            "B",
            "C",
            "A",
            "D"
          ]
        }
      ]
    },
    {
      "tema_id": 5,
      "tema_title": "5. Tema: Geometrik Şekiller",
      "units": [
        {
          "type": "activity",
          "pages": "224 - 227",
          "title": "Açının Tanımı ve Komşu Açılar (4 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "228 - 232",
          "title": "Tümler, Bütünler ve Ters Açılar (5 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "233 - 234",
          "title": "Açılar Test 1 (12 Soru)",
          "test_no": 1,
          "q_count": 12,
          "answers": [
            "A",
            "D",
            "B",
            "C",
            "C",
            "A",
            "D",
            "B",
            "B",
            "D",
            "A",
            "C"
          ]
        },
        {
          "type": "test",
          "pages": "235 - 236",
          "title": "Açılar Test 2 (12 Soru)",
          "test_no": 2,
          "q_count": 12,
          "answers": [
            "B",
            "C",
            "A",
            "D",
            "A",
            "B",
            "D",
            "C",
            "C",
            "A",
            "B",
            "D"
          ]
        },
        {
          "type": "test",
          "pages": "237 - 238",
          "title": "Açılar Test 3 (12 Soru)",
          "test_no": 3,
          "q_count": 12,
          "answers": [
            "C",
            "A",
            "D",
            "B",
            "D",
            "C",
            "A",
            "B",
            "A",
            "D",
            "C",
            "B"
          ]
        },
        {
          "type": "activity",
          "pages": "240 - 245",
          "title": "Üçgende Açılar ve Özellikleri (6 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "246 - 254",
          "title": "Dörtgenler ve İç Açı Toplamları (9 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "255 - 256",
          "title": "Dörtgenler Test 1 (12 Soru)",
          "test_no": 4,
          "q_count": 12,
          "answers": [
            "D",
            "B",
            "A",
            "C",
            "B",
            "D",
            "C",
            "A",
            "C",
            "B",
            "D",
            "A"
          ]
        },
        {
          "type": "test",
          "pages": "257 - 258",
          "title": "Dörtgenler Test 2 (12 Soru)",
          "test_no": 5,
          "q_count": 12,
          "answers": [
            "A",
            "C",
            "D",
            "B",
            "D",
            "A",
            "B",
            "C",
            "B",
            "C",
            "A",
            "D"
          ]
        },
        {
          "type": "test",
          "pages": "259 - 260",
          "title": "Dörtgenler Test 3 (12 Soru)",
          "test_no": 6,
          "q_count": 12,
          "answers": [
            "B",
            "D",
            "A",
            "C",
            "A",
            "B",
            "C",
            "D",
            "D",
            "A",
            "B",
            "C"
          ]
        },
        {
          "type": "test",
          "pages": "261 - 262",
          "title": "Dörtgenler Test 4 (12 Soru)",
          "test_no": 7,
          "q_count": 12,
          "answers": [
            "C",
            "A",
            "B",
            "D",
            "C",
            "D",
            "A",
            "B",
            "A",
            "C",
            "D",
            "B"
          ]
        },
        {
          "type": "test",
          "pages": "263 - 264",
          "title": "Geometrik Şekiller Beceri Temelli Test (12 Soru)",
          "test_no": 8,
          "q_count": 12,
          "answers": [
            "D",
            "B",
            "C",
            "A",
            "B",
            "A",
            "D",
            "C",
            "C",
            "D",
            "B",
            "A"
          ]
        }
      ]
    },
    {
      "tema_id": 6,
      "tema_title": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "units": [
        {
          "type": "activity",
          "pages": "266 - 271",
          "title": "Cebirsel İfadelerin Anlamı ve Yazılışı (6 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "272 - 277",
          "title": "Cebirsel İfadelerin Değerini Hesaplama (6 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "278 - 286",
          "title": "Sayı Örüntüleri ve Genel Kural (9 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "287 - 288",
          "title": "Cebirsel Düşünme Test 1 (12 Soru)",
          "test_no": 1,
          "q_count": 12,
          "answers": [
            "A",
            "B",
            "C",
            "D",
            "B",
            "C",
            "A",
            "D",
            "C",
            "A",
            "D",
            "B"
          ]
        },
        {
          "type": "test",
          "pages": "289 - 290",
          "title": "Cebirsel Düşünme Test 2 (12 Soru)",
          "test_no": 2,
          "q_count": 12,
          "answers": [
            "B",
            "D",
            "A",
            "C",
            "A",
            "D",
            "C",
            "B",
            "D",
            "B",
            "A",
            "C"
          ]
        },
        {
          "type": "test",
          "pages": "291 - 292",
          "title": "Cebirsel Düşünme Test 3 (12 Soru)",
          "test_no": 3,
          "q_count": 12,
          "answers": [
            "C",
            "A",
            "D",
            "B",
            "C",
            "B",
            "D",
            "A",
            "A",
            "C",
            "B",
            "D"
          ]
        },
        {
          "type": "test",
          "pages": "293 - 294",
          "title": "Cebirsel Düşünme Test 4 (12 Soru)",
          "test_no": 4,
          "q_count": 12,
          "answers": [
            "D",
            "C",
            "B",
            "A",
            "B",
            "A",
            "C",
            "D",
            "B",
            "D",
            "C",
            "A"
          ]
        },
        {
          "type": "test",
          "pages": "295 - 296",
          "title": "Cebirsel Düşünme Test 5 (12 Soru)",
          "test_no": 5,
          "q_count": 12,
          "answers": [
            "A",
            "D",
            "C",
            "B",
            "D",
            "C",
            "A",
            "B",
            "C",
            "A",
            "D",
            "B"
          ]
        },
        {
          "type": "test",
          "pages": "297 - 298",
          "title": "Cebirsel Düşünme Test 6 (12 Soru)",
          "test_no": 6,
          "q_count": 12,
          "answers": [
            "B",
            "A",
            "D",
            "C",
            "A",
            "B",
            "D",
            "C",
            "D",
            "B",
            "C",
            "A"
          ]
        },
        {
          "type": "test",
          "pages": "299 - 300",
          "title": "Cebirsel Düşünme Test 7 (12 Soru)",
          "test_no": 7,
          "q_count": 12,
          "answers": [
            "C",
            "B",
            "A",
            "D",
            "C",
            "D",
            "B",
            "A",
            "A",
            "D",
            "B",
            "C"
          ]
        },
        {
          "type": "test",
          "pages": "301 - 302",
          "title": "Cebirsel Düşünme Beceri Temelli Test (12 Soru)",
          "test_no": 8,
          "q_count": 12,
          "answers": [
            "D",
            "A",
            "B",
            "C",
            "B",
            "C",
            "A",
            "D",
            "B",
            "C",
            "D",
            "A"
          ]
        }
      ]
    },
    {
      "tema_id": 7,
      "tema_title": "7. Tema: Geometrik Nicelikler",
      "units": [
        {
          "type": "activity",
          "pages": "304 - 311",
          "title": "Alan Ölçü Birimleri ve Dönüşümler (8 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "312 - 315",
          "title": "Arazi Ölçüleri (Ar, Dekar, Hektar) (4 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "316 - 318",
          "title": "Alan Ölçüleri Test 1 (14 Soru)",
          "test_no": 1,
          "q_count": 14,
          "answers": [
            "A",
            "C",
            "D",
            "B",
            "B",
            "A",
            "D",
            "C",
            "C",
            "B",
            "A",
            "D",
            "A",
            "C"
          ]
        },
        {
          "type": "activity",
          "pages": "320 - 327",
          "title": "Paralelkenarda Yükseklik ve Alan (8 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "328 - 336",
          "title": "Paralelkenar Alan Problemleri (9 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "337 - 338",
          "title": "Paralelkenar Test 1 (12 Soru)",
          "test_no": 2,
          "q_count": 12,
          "answers": [
            "B",
            "D",
            "A",
            "C",
            "C",
            "B",
            "D",
            "A",
            "D",
            "A",
            "C",
            "B"
          ]
        },
        {
          "type": "activity",
          "pages": "339 - 344",
          "title": "Üçgende Yükseklik ve Alan Bağıntısı (6 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "345 - 349",
          "title": "Üçgende Alan Problemleri (5 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "350 - 352",
          "title": "Üçgen Alanı Test 1 (14 Soru)",
          "test_no": 3,
          "q_count": 14,
          "answers": [
            "C",
            "A",
            "B",
            "D",
            "D",
            "C",
            "A",
            "B",
            "A",
            "D",
            "B",
            "C",
            "B",
            "D"
          ]
        },
        {
          "type": "activity",
          "pages": "354 - 361",
          "title": "Çember, Çap, Yarıçap ve Pi Sayısı (8 Sayfa Etkinlik)"
        },
        {
          "type": "activity",
          "pages": "362 - 366",
          "title": "Çemberin Çevre Uzunluğu (5 Sayfa Etkinlik)"
        },
        {
          "type": "test",
          "pages": "367 - 368",
          "title": "Çember Test 1 (12 Soru)",
          "test_no": 4,
          "q_count": 12,
          "answers": [
            "D",
            "B",
            "C",
            "A",
            "A",
            "D",
            "B",
            "C",
            "B",
            "C",
            "A",
            "D"
          ]
        },
        {
          "type": "test",
          "pages": "369 - 370",
          "title": "Geometrik Nicelikler Beceri Temelli Test (12 Soru)",
          "test_no": 5,
          "q_count": 12,
          "answers": [
            "A",
            "D",
            "B",
            "C",
            "C",
            "A",
            "D",
            "B",
            "D",
            "B",
            "A",
            "C"
          ]
        }
      ]
    }
  ],
  "schedule": [
    {
      "id": "day-2026-10-12",
      "date": "2026-10-12",
      "dateFormatted": "12.10.2026",
      "dayName": "Pazartesi",
      "weekNo": 1,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-10-12-parkur-1",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "activity",
          "title": "Parkur S. 6 - 7: Doğal Sayılarla İşlemler & Üslü İfadeler (2 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 6 - 7 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "6 - 7"
        }
      ],
      "type": "activity",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 6 - 7: Doğal Sayılarla İşlemler & Üslü İfadeler (2 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 6 - 7 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-10-13",
      "date": "2026-10-13",
      "dateFormatted": "13.10.2026",
      "dayName": "Salı",
      "weekNo": 1,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-10-13-parkur-2",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "activity",
          "title": "Parkur S. 8 - 9: İşlem Önceliği (2 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 8 - 9 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "8 - 9"
        }
      ],
      "type": "activity",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 8 - 9: İşlem Önceliği (2 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 8 - 9 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-10-14",
      "date": "2026-10-14",
      "dateFormatted": "14.10.2026",
      "dayName": "Çarşamba",
      "weekNo": 1,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-10-14-isem-3",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "İsem 1. Tema: Test 1 & Test 2 (28 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 1 & Test 2 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 1,
              "q_count": 14,
              "answers": [
                "C",
                "B",
                "C",
                "B",
                "C",
                "C",
                "A",
                "C",
                "C",
                "B",
                "D",
                "A",
                "D",
                "A"
              ],
              "title": "1. Tema Test 1 (14 Soru)"
            },
            {
              "test_no": 2,
              "q_count": 14,
              "answers": [
                "C",
                "D",
                "B",
                "A",
                "A",
                "B",
                "A",
                "D",
                "A",
                "A",
                "D",
                "C",
                "B",
                "B"
              ],
              "title": "1. Tema Test 2 (14 Soru)"
            }
          ],
          "questionCount": 28
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "İsem 1. Tema: Test 1 & Test 2 (28 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 1 & Test 2 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-10-15",
      "date": "2026-10-15",
      "dateFormatted": "15.10.2026",
      "dayName": "Perşembe",
      "weekNo": 1,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-10-15-parkur-4",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "activity",
          "title": "Parkur S. 10 - 11: Dağılma Özelliği & Ortak Çarpan (2 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 10 - 11 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "10 - 11"
        }
      ],
      "type": "activity",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 10 - 11: Dağılma Özelliği & Ortak Çarpan (2 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 10 - 11 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-10-16",
      "date": "2026-10-16",
      "dateFormatted": "16.10.2026",
      "dayName": "Cuma",
      "weekNo": 1,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-10-16-isem-5",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "İsem 1. Tema: Test 3 & Test 4 (11 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 3 & Test 4 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 3,
              "q_count": 7,
              "answers": [
                "D",
                "A",
                "A",
                "A",
                "D",
                "B",
                "A"
              ],
              "title": "1. Tema Test 3 (7 Soru)"
            },
            {
              "test_no": 4,
              "q_count": 4,
              "answers": [
                "D",
                "A",
                "C",
                "C"
              ],
              "title": "1. Tema Test 4 (4 Soru)"
            }
          ],
          "questionCount": 11
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "İsem 1. Tema: Test 3 & Test 4 (11 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 3 & Test 4 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-10-17",
      "date": "2026-10-17",
      "dateFormatted": "17.10.2026",
      "dayName": "Cumartesi",
      "weekNo": 1,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-10-17-isem-6",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "İsem 1. Tema: Test 5 & Test 6 (28 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 5 & Test 6 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 5,
              "q_count": 14,
              "answers": [
                "B",
                "A",
                "D",
                "C",
                "D",
                "B",
                "A",
                "C",
                "D",
                "C",
                "A",
                "A",
                "D",
                "C"
              ],
              "title": "1. Tema Test 5 (14 Soru)"
            },
            {
              "test_no": 6,
              "q_count": 14,
              "answers": [
                "D",
                "B",
                "C",
                "D",
                "C",
                "A",
                "C",
                "A",
                "C",
                "A",
                "C",
                "D",
                "C",
                "D"
              ],
              "title": "1. Tema Test 6 (14 Soru)"
            }
          ],
          "questionCount": 28
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "İsem 1. Tema: Test 5 & Test 6 (28 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 5 & Test 6 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-10-18",
      "date": "2026-10-18",
      "dateFormatted": "18.10.2026",
      "dayName": "Pazar",
      "weekNo": 1,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-10-18-review",
          "book": "Haftalık Değerlendirme",
          "bookCode": "review",
          "type": "review",
          "title": "Haftalık Soru Tekrarı & Eksik Analizi",
          "detail": "Bu hafta çözülen testlerdeki yanlış ve boş soruları tekrar gözden geçiriniz.",
          "durationMinutes": 30,
          "isCompleted": false
        }
      ],
      "type": "review",
      "title": "Haftalık Tekrar & Dinlenme Günü",
      "description": "Hafta boyunca çözülen soruların tekrarı, yapılamayan soruların analizi ve dinlenme."
    },
    {
      "id": "day-2026-10-19",
      "date": "2026-10-19",
      "dateFormatted": "19.10.2026",
      "dayName": "Pazartesi",
      "weekNo": 2,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-10-19-parkur-7",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "Parkur S. 12 - 13: Tema 1: Test 1 (13 Soru)",
          "detail": "Parkur Matematik Sayfa 12 - 13 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "12 - 13",
          "answers": [
            "D",
            "B",
            "C",
            "C",
            "A",
            "D",
            "B",
            "C",
            "A",
            "C",
            "D",
            "B",
            "A"
          ],
          "questionCount": 13
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 12 - 13: Tema 1: Test 1 (13 Soru)",
      "description": "Parkur Matematik Sayfa 12 - 13 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-10-20",
      "date": "2026-10-20",
      "dateFormatted": "20.10.2026",
      "dayName": "Salı",
      "weekNo": 2,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-10-20-isem-8",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "İsem 1. Tema: Test 7 & Test 8 (12 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 7 & Test 8 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 7,
              "q_count": 8,
              "answers": [
                "B",
                "A",
                "C",
                "D",
                "D",
                "C",
                "A",
                "C"
              ],
              "title": "1. Tema Test 7 (8 Soru)"
            },
            {
              "test_no": 8,
              "q_count": 4,
              "answers": [
                "B",
                "C",
                "D",
                "C"
              ],
              "title": "1. Tema Test 8 (4 Soru)"
            }
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "İsem 1. Tema: Test 7 & Test 8 (12 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 7 & Test 8 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-10-21",
      "date": "2026-10-21",
      "dateFormatted": "21.10.2026",
      "dayName": "Çarşamba",
      "weekNo": 2,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-10-21-parkur-9",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "activity",
          "title": "Parkur S. 14 - 15: Doğal Sayı Problemleri - 1 (2 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 14 - 15 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "14 - 15"
        }
      ],
      "type": "activity",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 14 - 15: Doğal Sayı Problemleri - 1 (2 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 14 - 15 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-10-22",
      "date": "2026-10-22",
      "dateFormatted": "22.10.2026",
      "dayName": "Perşembe",
      "weekNo": 2,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-10-22-parkur-10",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "activity",
          "title": "Parkur S. 16 - 17: Doğal Sayı Problemleri - 2 (2 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 16 - 17 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "16 - 17"
        }
      ],
      "type": "activity",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 16 - 17: Doğal Sayı Problemleri - 2 (2 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 16 - 17 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-10-23",
      "date": "2026-10-23",
      "dateFormatted": "23.10.2026",
      "dayName": "Cuma",
      "weekNo": 2,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-10-23-isem-11",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "İsem 1. Tema: Test 9 & Test 10 (28 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 9 & Test 10 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 9,
              "q_count": 14,
              "answers": [
                "C",
                "A",
                "B",
                "C",
                "D",
                "C",
                "A",
                "A",
                "D",
                "C",
                "C",
                "C",
                "A",
                "A"
              ],
              "title": "1. Tema Test 9 (14 Soru)"
            },
            {
              "test_no": 10,
              "q_count": 14,
              "answers": [
                "D",
                "C",
                "C",
                "A",
                "B",
                "A",
                "C",
                "B",
                "A",
                "B",
                "D",
                "A",
                "B",
                "A"
              ],
              "title": "1. Tema Test 10 (14 Soru)"
            }
          ],
          "questionCount": 28
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "İsem 1. Tema: Test 9 & Test 10 (28 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 9 & Test 10 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-10-24",
      "date": "2026-10-24",
      "dateFormatted": "24.10.2026",
      "dayName": "Cumartesi",
      "weekNo": 2,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-10-24-parkur-12",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "Parkur S. 18 - 19: Tema 1: Test 2 (15 Soru)",
          "detail": "Parkur Matematik Sayfa 18 - 19 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "18 - 19",
          "answers": [
            "C",
            "A",
            "D",
            "B",
            "B",
            "C",
            "A",
            "D",
            "C",
            "A",
            "B",
            "D",
            "C",
            "B",
            "A"
          ],
          "questionCount": 15
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 18 - 19: Tema 1: Test 2 (15 Soru)",
      "description": "Parkur Matematik Sayfa 18 - 19 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-10-25",
      "date": "2026-10-25",
      "dateFormatted": "25.10.2026",
      "dayName": "Pazar",
      "weekNo": 2,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-10-25-review",
          "book": "Haftalık Değerlendirme",
          "bookCode": "review",
          "type": "review",
          "title": "Haftalık Soru Tekrarı & Eksik Analizi",
          "detail": "Bu hafta çözülen testlerdeki yanlış ve boş soruları tekrar gözden geçiriniz.",
          "durationMinutes": 30,
          "isCompleted": false
        }
      ],
      "type": "review",
      "title": "Haftalık Tekrar & Dinlenme Günü",
      "description": "Hafta boyunca çözülen soruların tekrarı, yapılamayan soruların analizi ve dinlenme."
    },
    {
      "id": "day-2026-10-26",
      "date": "2026-10-26",
      "dateFormatted": "26.10.2026",
      "dayName": "Pazartesi",
      "weekNo": 3,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-10-26-isem-13",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "İsem 1. Tema: Test 11 & Test 12 (15 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 11 & Test 12 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 11,
              "q_count": 9,
              "answers": [
                "B",
                "C",
                "B",
                "A",
                "D",
                "A",
                "B",
                "D",
                "B"
              ],
              "title": "1. Tema Test 11 (9 Soru)"
            },
            {
              "test_no": 12,
              "q_count": 6,
              "answers": [
                "B",
                "C",
                "B",
                "B",
                "C",
                "A"
              ],
              "title": "1. Tema Test 12 (6 Soru)"
            }
          ],
          "questionCount": 15
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "İsem 1. Tema: Test 11 & Test 12 (15 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 11 & Test 12 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-10-27",
      "date": "2026-10-27",
      "dateFormatted": "27.10.2026",
      "dayName": "Salı",
      "weekNo": 3,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-10-27-parkur-14",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "activity",
          "title": "Parkur S. 20 - 21: Çarpanlar ve Katlar (2 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 20 - 21 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "20 - 21"
        }
      ],
      "type": "activity",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 20 - 21: Çarpanlar ve Katlar (2 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 20 - 21 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-10-28",
      "date": "2026-10-28",
      "dateFormatted": "28.10.2026",
      "dayName": "Çarşamba",
      "weekNo": 3,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-10-28-parkur-15",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "activity",
          "title": "Parkur S. 22 - 23: Bölünebilme Kuralları - 1 (2 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 22 - 23 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "22 - 23"
        }
      ],
      "type": "activity",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 22 - 23: Bölünebilme Kuralları - 1 (2 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 22 - 23 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-10-29",
      "date": "2026-10-29",
      "dateFormatted": "29.10.2026",
      "dayName": "Perşembe",
      "weekNo": 3,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-10-29-isem-16",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "İsem 1. Tema: Test 13 & Test 14 (28 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 13 & Test 14 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 13,
              "q_count": 14,
              "answers": [
                "D",
                "B",
                "A",
                "C",
                "B",
                "D",
                "A",
                "B",
                "C",
                "C",
                "A",
                "B",
                "D",
                "A"
              ],
              "title": "1. Tema Test 13 (14 Soru)"
            },
            {
              "test_no": 14,
              "q_count": 14,
              "answers": [
                "C",
                "A",
                "D",
                "A",
                "D",
                "D",
                "A",
                "C",
                "B",
                "A",
                "B",
                "D",
                "A",
                "A"
              ],
              "title": "1. Tema Test 14 (14 Soru)"
            }
          ],
          "questionCount": 28
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "İsem 1. Tema: Test 13 & Test 14 (28 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 13 & Test 14 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-10-30",
      "date": "2026-10-30",
      "dateFormatted": "30.10.2026",
      "dayName": "Cuma",
      "weekNo": 3,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-10-30-parkur-17",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "activity",
          "title": "Parkur S. 24 - 25: Bölünebilme Kuralları - 2 (2 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 24 - 25 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "24 - 25"
        }
      ],
      "type": "activity",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 24 - 25: Bölünebilme Kuralları - 2 (2 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 24 - 25 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-10-31",
      "date": "2026-10-31",
      "dateFormatted": "31.10.2026",
      "dayName": "Cumartesi",
      "weekNo": 3,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-10-31-isem-18",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "İsem 1. Tema: Test 15 & Test 16 (21 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 15 & Test 16 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 15,
              "q_count": 13,
              "answers": [
                "B",
                "D",
                "C",
                "D",
                "B",
                "B",
                "B",
                "A",
                "B",
                "A",
                "D",
                "A",
                "C"
              ],
              "title": "1. Tema Test 15 (13 Soru)"
            },
            {
              "test_no": 16,
              "q_count": 8,
              "answers": [
                "B",
                "C",
                "D",
                "A",
                "B",
                "A",
                "B",
                "C"
              ],
              "title": "1. Tema Test 16 (8 Soru)"
            }
          ],
          "questionCount": 21
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "İsem 1. Tema: Test 15 & Test 16 (21 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 15 & Test 16 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-01",
      "date": "2026-11-01",
      "dateFormatted": "01.11.2026",
      "dayName": "Pazar",
      "weekNo": 3,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-11-01-deneme-1",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 1,
          "title": "Jumbo Deneme 1 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "B",
            "C",
            "C",
            "C",
            "A",
            "A",
            "C",
            "D",
            "A",
            "D",
            "C",
            "A",
            "B",
            "A",
            "C",
            "D",
            "B",
            "D",
            "C",
            "B"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 1",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2026-11-02",
      "date": "2026-11-02",
      "dateFormatted": "02.11.2026",
      "dayName": "Pazartesi",
      "weekNo": 4,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-02-isem-19",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "İsem 1. Tema: Test 17 & Test 18 (20 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 17 & Test 18 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 17,
              "q_count": 6,
              "answers": [
                "A",
                "A",
                "B",
                "B",
                "B",
                "A"
              ],
              "title": "1. Tema Test 17 (6 Soru)"
            },
            {
              "test_no": 18,
              "q_count": 14,
              "answers": [
                "D",
                "C",
                "C",
                "D",
                "A",
                "D",
                "D",
                "A",
                "C",
                "A",
                "D",
                "B",
                "D",
                "A"
              ],
              "title": "1. Tema Test 18 (14 Soru)"
            }
          ],
          "questionCount": 20
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "İsem 1. Tema: Test 17 & Test 18 (20 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 17 & Test 18 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-03",
      "date": "2026-11-03",
      "dateFormatted": "03.11.2026",
      "dayName": "Salı",
      "weekNo": 4,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-03-parkur-20",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "Parkur S. 26 - 27: Tema 1: Test 3 (14 Soru)",
          "detail": "Parkur Matematik Sayfa 26 - 27 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "26 - 27",
          "answers": [
            "B",
            "D",
            "C",
            "A",
            "A",
            "B",
            "D",
            "C",
            "B",
            "A",
            "C",
            "D",
            "B",
            "D"
          ],
          "questionCount": 14
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 26 - 27: Tema 1: Test 3 (14 Soru)",
      "description": "Parkur Matematik Sayfa 26 - 27 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-04",
      "date": "2026-11-04",
      "dateFormatted": "04.11.2026",
      "dayName": "Çarşamba",
      "weekNo": 4,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-04-isem-21",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "İsem 1. Tema: Test 19 (4 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 19 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 19,
              "q_count": 4,
              "answers": [
                "C",
                "C",
                "C",
                "D"
              ],
              "title": "1. Tema Test 19 (4 Soru)"
            }
          ],
          "questionCount": 4
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "İsem 1. Tema: Test 19 (4 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 19 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-05",
      "date": "2026-11-05",
      "dateFormatted": "05.11.2026",
      "dayName": "Perşembe",
      "weekNo": 4,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-05-parkur-22",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "activity",
          "title": "Parkur S. 28 - 29: Asal Sayılar ve Asal Çarpanlar (2 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 28 - 29 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "28 - 29"
        }
      ],
      "type": "activity",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 28 - 29: Asal Sayılar ve Asal Çarpanlar (2 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 28 - 29 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-11-06",
      "date": "2026-11-06",
      "dateFormatted": "06.11.2026",
      "dayName": "Cuma",
      "weekNo": 4,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-06-parkur-23",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "activity",
          "title": "Parkur S. 30 - 32: Ortak Bölenler, Katlar ve Kümeler (3 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 30 - 32 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "30 - 32"
        }
      ],
      "type": "activity",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 30 - 32: Ortak Bölenler, Katlar ve Kümeler (3 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 30 - 32 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-11-07",
      "date": "2026-11-07",
      "dateFormatted": "07.11.2026",
      "dayName": "Cumartesi",
      "weekNo": 4,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-11-07-parkur-24",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "Parkur S. 33 - 34: Tema 1: Test 4 - Tarama (12 Soru)",
          "detail": "Parkur Matematik Sayfa 33 - 34 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "33 - 34",
          "answers": [
            "A",
            "C",
            "D",
            "B",
            "B",
            "A",
            "D",
            "C",
            "A",
            "B",
            "C",
            "D"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 33 - 34: Tema 1: Test 4 - Tarama (12 Soru)",
      "description": "Parkur Matematik Sayfa 33 - 34 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-08",
      "date": "2026-11-08",
      "dateFormatted": "08.11.2026",
      "dayName": "Pazar",
      "weekNo": 4,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-11-08-deneme-2",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 2,
          "title": "Jumbo Deneme 2 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "A",
            "B",
            "B",
            "B",
            "C",
            "B",
            "D",
            "D",
            "A",
            "A",
            "D",
            "D",
            "C",
            "C",
            "A",
            "C",
            "C",
            "C",
            "B",
            "D"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 2",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2026-11-09",
      "date": "2026-11-09",
      "dateFormatted": "09.11.2026",
      "dayName": "Pazartesi",
      "weekNo": 5,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-09-parkur-25",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "Parkur S. 35 - 36: Tema 1: Test 5 - Tarama (12 Soru)",
          "detail": "Parkur Matematik Sayfa 35 - 36 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "35 - 36",
          "answers": [
            "C",
            "B",
            "A",
            "D",
            "C",
            "A",
            "B",
            "D",
            "A",
            "D",
            "C",
            "B"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 35 - 36: Tema 1: Test 5 - Tarama (12 Soru)",
      "description": "Parkur Matematik Sayfa 35 - 36 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-10",
      "date": "2026-11-10",
      "dateFormatted": "10.11.2026",
      "dayName": "Salı",
      "weekNo": 5,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-10-parkur-26",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "Parkur S. 37 - 38: Tema 1: Test 6 - Beceri Temelli (12 Soru)",
          "detail": "Parkur Matematik Sayfa 37 - 38 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "37 - 38",
          "answers": [
            "B",
            "D",
            "A",
            "C",
            "D",
            "B",
            "A",
            "C",
            "C",
            "B",
            "D",
            "A"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 37 - 38: Tema 1: Test 6 - Beceri Temelli (12 Soru)",
      "description": "Parkur Matematik Sayfa 37 - 38 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-11",
      "date": "2026-11-11",
      "dateFormatted": "11.11.2026",
      "dayName": "Çarşamba",
      "weekNo": 5,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-11-parkur-27",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "Parkur S. 39 - 40: Tema 1: Test 7 - Beceri Temelli (12 Soru)",
          "detail": "Parkur Matematik Sayfa 39 - 40 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "39 - 40",
          "answers": [
            "D",
            "A",
            "C",
            "B",
            "A",
            "C",
            "D",
            "B",
            "B",
            "C",
            "A",
            "D"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 39 - 40: Tema 1: Test 7 - Beceri Temelli (12 Soru)",
      "description": "Parkur Matematik Sayfa 39 - 40 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-12",
      "date": "2026-11-12",
      "dateFormatted": "12.11.2026",
      "dayName": "Perşembe",
      "weekNo": 5,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-12-parkur-28",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "Parkur S. 41 - 42: Tema 1: Test 8 - Beceri Temelli (12 Soru)",
          "detail": "Parkur Matematik Sayfa 41 - 42 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "41 - 42",
          "answers": [
            "A",
            "D",
            "B",
            "C",
            "C",
            "A",
            "D",
            "B",
            "A",
            "C",
            "B",
            "D"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 41 - 42: Tema 1: Test 8 - Beceri Temelli (12 Soru)",
      "description": "Parkur Matematik Sayfa 41 - 42 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-13",
      "date": "2026-11-13",
      "dateFormatted": "13.11.2026",
      "dayName": "Cuma",
      "weekNo": 5,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-13-parkur-29",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "Parkur S. 43 - 44: Tema 1: Test 9 - Beceri Temelli (12 Soru)",
          "detail": "Parkur Matematik Sayfa 43 - 44 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "43 - 44",
          "answers": [
            "C",
            "B",
            "D",
            "A",
            "B",
            "D",
            "C",
            "A",
            "D",
            "B",
            "A",
            "C"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 43 - 44: Tema 1: Test 9 - Beceri Temelli (12 Soru)",
      "description": "Parkur Matematik Sayfa 43 - 44 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-14",
      "date": "2026-11-14",
      "dateFormatted": "14.11.2026",
      "dayName": "Cumartesi",
      "weekNo": 5,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-11-14-parkur-30",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "1. Tema: Sayılar ve Nicelikler (1)",
          "type": "test",
          "title": "Parkur S. 45 - 46: Tema 1: Test 10 - Beceri Temelli (12 Soru)",
          "detail": "Parkur Matematik Sayfa 45 - 46 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "45 - 46",
          "answers": [
            "B",
            "A",
            "C",
            "D",
            "A",
            "C",
            "B",
            "D",
            "C",
            "A",
            "D",
            "B"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "1. Tema: Sayılar ve Nicelikler (1)",
      "title": "Parkur S. 45 - 46: Tema 1: Test 10 - Beceri Temelli (12 Soru)",
      "description": "Parkur Matematik Sayfa 45 - 46 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-15",
      "date": "2026-11-15",
      "dateFormatted": "15.11.2026",
      "dayName": "Pazar",
      "weekNo": 5,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-11-15-deneme-3",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 3,
          "title": "Jumbo Deneme 3 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "D",
            "C",
            "D",
            "A",
            "D",
            "D",
            "B",
            "B",
            "C",
            "D",
            "A",
            "B",
            "A",
            "C",
            "D",
            "B",
            "A",
            "C",
            "C",
            "B"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 3",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2026-11-16",
      "date": "2026-11-16",
      "dateFormatted": "16.11.2026",
      "dayName": "Pazartesi",
      "weekNo": 6,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-16-parkur-31",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "2. Tema: Veriden Olasılığa",
          "type": "activity",
          "title": "Parkur S. 48 - 49: Araştırma Soruları ve Veri Toplama (2 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 48 - 49 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "48 - 49"
        }
      ],
      "type": "activity",
      "tema": "2. Tema: Veriden Olasılığa",
      "title": "Parkur S. 48 - 49: Araştırma Soruları ve Veri Toplama (2 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 48 - 49 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-11-17",
      "date": "2026-11-17",
      "dateFormatted": "17.11.2026",
      "dayName": "Salı",
      "weekNo": 6,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-17-parkur-32",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "2. Tema: Veriden Olasılığa",
          "type": "activity",
          "title": "Parkur S. 50 - 51: Sıklık Tablosu Oluşturma (2 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 50 - 51 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "50 - 51"
        }
      ],
      "type": "activity",
      "tema": "2. Tema: Veriden Olasılığa",
      "title": "Parkur S. 50 - 51: Sıklık Tablosu Oluşturma (2 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 50 - 51 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-11-18",
      "date": "2026-11-18",
      "dateFormatted": "18.11.2026",
      "dayName": "Çarşamba",
      "weekNo": 6,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-18-isem-33",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "2. Tema: Veriden Olasılığa",
          "type": "test",
          "title": "İsem 2. Tema: Test 1 & Test 2 (26 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 1 & Test 2 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 1,
              "q_count": 13,
              "answers": [
                "C",
                "A",
                "A",
                "D",
                "B",
                "C",
                "C",
                "D",
                "B",
                "C",
                "D",
                "A",
                "C"
              ],
              "title": "2. Tema Test 1 (13 Soru)"
            },
            {
              "test_no": 2,
              "q_count": 13,
              "answers": [
                "B",
                "C",
                "C",
                "D",
                "B",
                "D",
                "A",
                "A",
                "D",
                "C",
                "B",
                "B",
                "D"
              ],
              "title": "2. Tema Test 2 (13 Soru)"
            }
          ],
          "questionCount": 26
        }
      ],
      "type": "test",
      "tema": "2. Tema: Veriden Olasılığa",
      "title": "İsem 2. Tema: Test 1 & Test 2 (26 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 1 & Test 2 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-19",
      "date": "2026-11-19",
      "dateFormatted": "19.11.2026",
      "dayName": "Perşembe",
      "weekNo": 6,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-19-parkur-34",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "2. Tema: Veriden Olasılığa",
          "type": "test",
          "title": "Parkur S. 52 - 53: Tema 2: Test 1 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 52 - 53 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "52 - 53",
          "answers": [
            "C",
            "A",
            "B",
            "D",
            "A",
            "C",
            "D",
            "B",
            "C",
            "B",
            "A",
            "D"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "2. Tema: Veriden Olasılığa",
      "title": "Parkur S. 52 - 53: Tema 2: Test 1 (12 Soru)",
      "description": "Parkur Matematik Sayfa 52 - 53 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-20",
      "date": "2026-11-20",
      "dateFormatted": "20.11.2026",
      "dayName": "Cuma",
      "weekNo": 6,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-20-isem-35",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "2. Tema: Veriden Olasılığa",
          "type": "test",
          "title": "İsem 2. Tema: Test 3 & Test 4 (13 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 3 & Test 4 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 3,
              "q_count": 8,
              "answers": [
                "A",
                "C",
                "B",
                "D",
                "D",
                "B",
                "C",
                "C"
              ],
              "title": "2. Tema Test 3 (8 Soru)"
            },
            {
              "test_no": 4,
              "q_count": 5,
              "answers": [
                "C",
                "C",
                "A",
                "D",
                "C"
              ],
              "title": "2. Tema Test 4 (5 Soru)"
            }
          ],
          "questionCount": 13
        }
      ],
      "type": "test",
      "tema": "2. Tema: Veriden Olasılığa",
      "title": "İsem 2. Tema: Test 3 & Test 4 (13 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 3 & Test 4 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-21",
      "date": "2026-11-21",
      "dateFormatted": "21.11.2026",
      "dayName": "Cumartesi",
      "weekNo": 6,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-11-21-parkur-36",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "2. Tema: Veriden Olasılığa",
          "type": "activity",
          "title": "Parkur S. 54 - 57: İkili Sütun Grafiği (4 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 54 - 57 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "54 - 57"
        }
      ],
      "type": "activity",
      "tema": "2. Tema: Veriden Olasılığa",
      "title": "Parkur S. 54 - 57: İkili Sütun Grafiği (4 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 54 - 57 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-11-22",
      "date": "2026-11-22",
      "dateFormatted": "22.11.2026",
      "dayName": "Pazar",
      "weekNo": 6,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-11-22-deneme-4",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 4,
          "title": "Jumbo Deneme 4 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "D",
            "C",
            "C",
            "D",
            "D",
            "B",
            "D",
            "C",
            "D",
            "D",
            "A",
            "C",
            "A",
            "B",
            "B",
            "C",
            "C",
            "A",
            "D",
            "D"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 4",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2026-11-23",
      "date": "2026-11-23",
      "dateFormatted": "23.11.2026",
      "dayName": "Pazartesi",
      "weekNo": 7,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-23-parkur-37",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "2. Tema: Veriden Olasılığa",
          "type": "activity",
          "title": "Parkur S. 58 - 61: Aritmetik Ortalama (4 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 58 - 61 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "58 - 61"
        }
      ],
      "type": "activity",
      "tema": "2. Tema: Veriden Olasılığa",
      "title": "Parkur S. 58 - 61: Aritmetik Ortalama (4 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 58 - 61 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-11-24",
      "date": "2026-11-24",
      "dateFormatted": "24.11.2026",
      "dayName": "Salı",
      "weekNo": 7,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-24-isem-38",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "2. Tema: Veriden Olasılığa",
          "type": "test",
          "title": "İsem 2. Tema: Test 5 & Test 6 (6 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 5 & Test 6 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 5,
              "q_count": 3,
              "answers": [
                "C",
                "C",
                "A"
              ],
              "title": "2. Tema Test 5 (3 Soru)"
            },
            {
              "test_no": 6,
              "q_count": 3,
              "answers": [
                "A",
                "B",
                "D"
              ],
              "title": "2. Tema Test 6 (3 Soru)"
            }
          ],
          "questionCount": 6
        }
      ],
      "type": "test",
      "tema": "2. Tema: Veriden Olasılığa",
      "title": "İsem 2. Tema: Test 5 & Test 6 (6 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 5 & Test 6 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-25",
      "date": "2026-11-25",
      "dateFormatted": "25.11.2026",
      "dayName": "Çarşamba",
      "weekNo": 7,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-25-parkur-39",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "2. Tema: Veriden Olasılığa",
          "type": "activity",
          "title": "Parkur S. 62 - 65: Açıklık ve Veri Analizi (4 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 62 - 65 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "62 - 65"
        }
      ],
      "type": "activity",
      "tema": "2. Tema: Veriden Olasılığa",
      "title": "Parkur S. 62 - 65: Açıklık ve Veri Analizi (4 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 62 - 65 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-11-26",
      "date": "2026-11-26",
      "dateFormatted": "26.11.2026",
      "dayName": "Perşembe",
      "weekNo": 7,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-26-isem-40",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "2. Tema: Veriden Olasılığa",
          "type": "test",
          "title": "İsem 2. Tema: Test 7 & Test 8 (16 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 7 & Test 8 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 7,
              "q_count": 11,
              "answers": [
                "D",
                "B",
                "B",
                "B",
                "A",
                "C",
                "B",
                "A",
                "B",
                "D",
                "B"
              ],
              "title": "2. Tema Test 7 (11 Soru)"
            },
            {
              "test_no": 8,
              "q_count": 5,
              "answers": [
                "B",
                "A",
                "D",
                "B",
                "B"
              ],
              "title": "2. Tema Test 8 (5 Soru)"
            }
          ],
          "questionCount": 16
        }
      ],
      "type": "test",
      "tema": "2. Tema: Veriden Olasılığa",
      "title": "İsem 2. Tema: Test 7 & Test 8 (16 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 7 & Test 8 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-27",
      "date": "2026-11-27",
      "dateFormatted": "27.11.2026",
      "dayName": "Cuma",
      "weekNo": 7,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-27-parkur-41",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "2. Tema: Veriden Olasılığa",
          "type": "activity",
          "title": "Parkur S. 66 - 70: Verileri Karşılaştırma ve Yorumlama (5 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 66 - 70 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "66 - 70"
        }
      ],
      "type": "activity",
      "tema": "2. Tema: Veriden Olasılığa",
      "title": "Parkur S. 66 - 70: Verileri Karşılaştırma ve Yorumlama (5 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 66 - 70 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-11-28",
      "date": "2026-11-28",
      "dateFormatted": "28.11.2026",
      "dayName": "Cumartesi",
      "weekNo": 7,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-11-28-parkur-42",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "2. Tema: Veriden Olasılığa",
          "type": "test",
          "title": "Parkur S. 71 - 72: Tema 2: Test 2 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 71 - 72 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "71 - 72",
          "answers": [
            "A",
            "D",
            "C",
            "B",
            "B",
            "D",
            "A",
            "C",
            "D",
            "A",
            "B",
            "C"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "2. Tema: Veriden Olasılığa",
      "title": "Parkur S. 71 - 72: Tema 2: Test 2 (12 Soru)",
      "description": "Parkur Matematik Sayfa 71 - 72 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-11-29",
      "date": "2026-11-29",
      "dateFormatted": "29.11.2026",
      "dayName": "Pazar",
      "weekNo": 7,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-11-29-deneme-5",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 5,
          "title": "Jumbo Deneme 5 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "A",
            "A",
            "C",
            "B",
            "B",
            "C",
            "C",
            "A",
            "C",
            "C",
            "D",
            "D",
            "C",
            "D",
            "C",
            "B",
            "A",
            "B",
            "D",
            "A"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 5",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2026-11-30",
      "date": "2026-11-30",
      "dateFormatted": "30.11.2026",
      "dayName": "Pazartesi",
      "weekNo": 8,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-11-30-parkur-43",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "2. Tema: Veriden Olasılığa",
          "type": "test",
          "title": "Parkur S. 73 - 74: Tema 2: Test 3 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 73 - 74 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "73 - 74",
          "answers": [
            "B",
            "C",
            "A",
            "D",
            "C",
            "A",
            "D",
            "B",
            "A",
            "C",
            "B",
            "D"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "2. Tema: Veriden Olasılığa",
      "title": "Parkur S. 73 - 74: Tema 2: Test 3 (12 Soru)",
      "description": "Parkur Matematik Sayfa 73 - 74 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-01",
      "date": "2026-12-01",
      "dateFormatted": "01.12.2026",
      "dayName": "Salı",
      "weekNo": 8,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-01-parkur-44",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "2. Tema: Veriden Olasılığa",
          "type": "test",
          "title": "Parkur S. 75 - 76: Tema 2: Test 4 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 75 - 76 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "75 - 76",
          "answers": [
            "D",
            "A",
            "B",
            "C",
            "A",
            "D",
            "C",
            "B",
            "B",
            "C",
            "D",
            "A"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "2. Tema: Veriden Olasılığa",
      "title": "Parkur S. 75 - 76: Tema 2: Test 4 (12 Soru)",
      "description": "Parkur Matematik Sayfa 75 - 76 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-02",
      "date": "2026-12-02",
      "dateFormatted": "02.12.2026",
      "dayName": "Çarşamba",
      "weekNo": 8,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-02-parkur-45",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "2. Tema: Veriden Olasılığa",
          "type": "test",
          "title": "Parkur S. 77 - 78: Tema 2: Test 5 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 77 - 78 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "77 - 78",
          "answers": [
            "C",
            "B",
            "D",
            "A",
            "D",
            "C",
            "B",
            "A",
            "C",
            "A",
            "D",
            "B"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "2. Tema: Veriden Olasılığa",
      "title": "Parkur S. 77 - 78: Tema 2: Test 5 (12 Soru)",
      "description": "Parkur Matematik Sayfa 77 - 78 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-03",
      "date": "2026-12-03",
      "dateFormatted": "03.12.2026",
      "dayName": "Perşembe",
      "weekNo": 8,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-03-parkur-46",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "2. Tema: Veriden Olasılığa",
          "type": "test",
          "title": "Parkur S. 79 - 82: Tema 2: Test 6 - Beceri Temelli (16 Soru)",
          "detail": "Parkur Matematik Sayfa 79 - 82 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "79 - 82",
          "answers": [
            "A",
            "C",
            "D",
            "B",
            "B",
            "A",
            "D",
            "C",
            "A",
            "B",
            "C",
            "D",
            "B",
            "D",
            "A",
            "C"
          ],
          "questionCount": 16
        }
      ],
      "type": "test",
      "tema": "2. Tema: Veriden Olasılığa",
      "title": "Parkur S. 79 - 82: Tema 2: Test 6 - Beceri Temelli (16 Soru)",
      "description": "Parkur Matematik Sayfa 79 - 82 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-04",
      "date": "2026-12-04",
      "dateFormatted": "04.12.2026",
      "dayName": "Cuma",
      "weekNo": 8,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-04-parkur-47",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "activity",
          "title": "Parkur S. 84 - 87: Tam Sayıların Anlamı ve Gösterimi (4 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 84 - 87 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "84 - 87"
        }
      ],
      "type": "activity",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 84 - 87: Tam Sayıların Anlamı ve Gösterimi (4 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 84 - 87 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-12-05",
      "date": "2026-12-05",
      "dateFormatted": "05.12.2026",
      "dayName": "Cumartesi",
      "weekNo": 8,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-12-05-parkur-48",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "activity",
          "title": "Parkur S. 88 - 91: Sayı Doğrusunda Gösterme & Karşılaştırma (4 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 88 - 91 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "88 - 91"
        }
      ],
      "type": "activity",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 88 - 91: Sayı Doğrusunda Gösterme & Karşılaştırma (4 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 88 - 91 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-12-06",
      "date": "2026-12-06",
      "dateFormatted": "06.12.2026",
      "dayName": "Pazar",
      "weekNo": 8,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-12-06-deneme-6",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 6,
          "title": "Jumbo Deneme 6 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "C",
            "A",
            "B",
            "D",
            "B",
            "C",
            "A",
            "A",
            "C",
            "A",
            "B",
            "C",
            "B",
            "D",
            "B",
            "D",
            "B",
            "C",
            "B",
            "C"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 6",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2026-12-07",
      "date": "2026-12-07",
      "dateFormatted": "07.12.2026",
      "dayName": "Pazartesi",
      "weekNo": 9,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-07-isem-49",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "İsem 3. Tema: Test 1 & Test 2 (19 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 1 & Test 2 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 1,
              "q_count": 14,
              "answers": [
                "C",
                "B",
                "C",
                "D",
                "A",
                "D",
                "D",
                "A",
                "D",
                "D",
                "B",
                "D",
                "A",
                "B"
              ],
              "title": "3. Tema Test 1 (14 Soru)"
            },
            {
              "test_no": 2,
              "q_count": 5,
              "answers": [
                "B",
                "A",
                "A",
                "B",
                "B"
              ],
              "title": "3. Tema Test 2 (5 Soru)"
            }
          ],
          "questionCount": 19
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "İsem 3. Tema: Test 1 & Test 2 (19 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 1 & Test 2 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-08",
      "date": "2026-12-08",
      "dateFormatted": "08.12.2026",
      "dayName": "Salı",
      "weekNo": 9,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-08-parkur-50",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "activity",
          "title": "Parkur S. 92 - 95: Mutlak Değer (4 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 92 - 95 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "92 - 95"
        }
      ],
      "type": "activity",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 92 - 95: Mutlak Değer (4 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 92 - 95 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-12-09",
      "date": "2026-12-09",
      "dateFormatted": "09.12.2026",
      "dayName": "Çarşamba",
      "weekNo": 9,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-09-isem-51",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "İsem 3. Tema: Test 3 & Test 4 (18 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 3 & Test 4 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 3,
              "q_count": 4,
              "answers": [
                "B",
                "C",
                "A",
                "A"
              ],
              "title": "3. Tema Test 3 (4 Soru)"
            },
            {
              "test_no": 4,
              "q_count": 14,
              "answers": [
                "C",
                "B",
                "B",
                "A",
                "D",
                "C",
                "C",
                "A",
                "B",
                "B",
                "A",
                "C",
                "B",
                "C"
              ],
              "title": "3. Tema Test 4 (14 Soru)"
            }
          ],
          "questionCount": 18
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "İsem 3. Tema: Test 3 & Test 4 (18 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 3 & Test 4 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-10",
      "date": "2026-12-10",
      "dateFormatted": "10.12.2026",
      "dayName": "Perşembe",
      "weekNo": 9,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-10-parkur-52",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "activity",
          "title": "Parkur S. 96 - 101: Tam Sayılarda Sıralama ve Uygulamalar (6 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 96 - 101 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "96 - 101"
        }
      ],
      "type": "activity",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 96 - 101: Tam Sayılarda Sıralama ve Uygulamalar (6 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 96 - 101 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-12-11",
      "date": "2026-12-11",
      "dateFormatted": "11.12.2026",
      "dayName": "Cuma",
      "weekNo": 9,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-11-isem-53",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "İsem 3. Tema: Test 5 & Test 6 (13 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 5 & Test 6 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 5,
              "q_count": 9,
              "answers": [
                "C",
                "D",
                "D",
                "D",
                "C",
                "B",
                "A",
                "B",
                "A"
              ],
              "title": "3. Tema Test 5 (9 Soru)"
            },
            {
              "test_no": 6,
              "q_count": 4,
              "answers": [
                "C",
                "A",
                "D",
                "A"
              ],
              "title": "3. Tema Test 6 (4 Soru)"
            }
          ],
          "questionCount": 13
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "İsem 3. Tema: Test 5 & Test 6 (13 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 5 & Test 6 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-12",
      "date": "2026-12-12",
      "dateFormatted": "12.12.2026",
      "dayName": "Cumartesi",
      "weekNo": 9,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-12-12-parkur-54",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "Parkur S. 102 - 104: Tam Sayılar Test 1 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 102 - 104 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "102 - 104",
          "answers": [
            "B",
            "C",
            "A",
            "D",
            "D",
            "B",
            "A",
            "C",
            "C",
            "B",
            "D",
            "A"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 102 - 104: Tam Sayılar Test 1 (12 Soru)",
      "description": "Parkur Matematik Sayfa 102 - 104 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-13",
      "date": "2026-12-13",
      "dateFormatted": "13.12.2026",
      "dayName": "Pazar",
      "weekNo": 9,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-12-13-deneme-7",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 7,
          "title": "Jumbo Deneme 7 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "B",
            "B",
            "C",
            "C",
            "D",
            "A",
            "A",
            "C",
            "B",
            "B",
            "B",
            "C",
            "B",
            "D",
            "A",
            "B",
            "A",
            "C",
            "A",
            "A"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 7",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2026-12-14",
      "date": "2026-12-14",
      "dateFormatted": "14.12.2026",
      "dayName": "Pazartesi",
      "weekNo": 10,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-14-isem-55",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "İsem 3. Tema: Test 7 & Test 8 (19 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 7 & Test 8 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 7,
              "q_count": 13,
              "answers": [
                "A",
                "D",
                "A",
                "A",
                "C",
                "D",
                "D",
                "B",
                "C",
                "A",
                "C",
                "B",
                "D"
              ],
              "title": "3. Tema Test 7 (13 Soru)"
            },
            {
              "test_no": 8,
              "q_count": 6,
              "answers": [
                "C",
                "A",
                "B",
                "D",
                "A",
                "B"
              ],
              "title": "3. Tema Test 8 (6 Soru)"
            }
          ],
          "questionCount": 19
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "İsem 3. Tema: Test 7 & Test 8 (19 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 7 & Test 8 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-15",
      "date": "2026-12-15",
      "dateFormatted": "15.12.2026",
      "dayName": "Salı",
      "weekNo": 10,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-15-isem-56",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "İsem 3. Tema: Test 9 & Test 10 (19 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 9 & Test 10 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 9,
              "q_count": 5,
              "answers": [
                "B",
                "A",
                "D",
                "B",
                "C"
              ],
              "title": "3. Tema Test 9 (5 Soru)"
            },
            {
              "test_no": 10,
              "q_count": 14,
              "answers": [
                "B",
                "A",
                "D",
                "B",
                "C",
                "B",
                "D",
                "C",
                "C",
                "C",
                "D",
                "D",
                "A",
                "B"
              ],
              "title": "3. Tema Test 10 (14 Soru)"
            }
          ],
          "questionCount": 19
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "İsem 3. Tema: Test 9 & Test 10 (19 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 9 & Test 10 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-16",
      "date": "2026-12-16",
      "dateFormatted": "16.12.2026",
      "dayName": "Çarşamba",
      "weekNo": 10,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-16-parkur-57",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "Parkur S. 105 - 106: Tam Sayılar Test 2 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 105 - 106 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "105 - 106",
          "answers": [
            "A",
            "D",
            "B",
            "C",
            "C",
            "A",
            "D",
            "B",
            "B",
            "D",
            "C",
            "A"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 105 - 106: Tam Sayılar Test 2 (12 Soru)",
      "description": "Parkur Matematik Sayfa 105 - 106 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-17",
      "date": "2026-12-17",
      "dateFormatted": "17.12.2026",
      "dayName": "Perşembe",
      "weekNo": 10,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-17-isem-58",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "İsem 3. Tema: Test 11 & Test 12 (21 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 11 & Test 12 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 11,
              "q_count": 12,
              "answers": [
                "C",
                "D",
                "A",
                "D",
                "C",
                "B",
                "A",
                "B",
                "B",
                "C",
                "A",
                "B"
              ],
              "title": "3. Tema Test 11 (12 Soru)"
            },
            {
              "test_no": 12,
              "q_count": 9,
              "answers": [
                "C",
                "A",
                "B",
                "A",
                "D",
                "B",
                "D",
                "C",
                "A"
              ],
              "title": "3. Tema Test 12 (9 Soru)"
            }
          ],
          "questionCount": 21
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "İsem 3. Tema: Test 11 & Test 12 (21 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 11 & Test 12 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-18",
      "date": "2026-12-18",
      "dateFormatted": "18.12.2026",
      "dayName": "Cuma",
      "weekNo": 10,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-18-isem-59",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "İsem 3. Tema: Test 13 & Test 14 (8 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 13 & Test 14 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 13,
              "q_count": 4,
              "answers": [
                "D",
                "C",
                "D",
                "A"
              ],
              "title": "3. Tema Test 13 (4 Soru)"
            },
            {
              "test_no": 14,
              "q_count": 4,
              "answers": [
                "C",
                "B",
                "B",
                "B"
              ],
              "title": "3. Tema Test 14 (4 Soru)"
            }
          ],
          "questionCount": 8
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "İsem 3. Tema: Test 13 & Test 14 (8 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 13 & Test 14 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-19",
      "date": "2026-12-19",
      "dateFormatted": "19.12.2026",
      "dayName": "Cumartesi",
      "weekNo": 10,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-12-19-parkur-60",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "Parkur S. 107 - 108: Tam Sayılar Test 3 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 107 - 108 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "107 - 108",
          "answers": [
            "C",
            "A",
            "D",
            "B",
            "B",
            "D",
            "C",
            "A",
            "D",
            "A",
            "B",
            "C"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 107 - 108: Tam Sayılar Test 3 (12 Soru)",
      "description": "Parkur Matematik Sayfa 107 - 108 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-20",
      "date": "2026-12-20",
      "dateFormatted": "20.12.2026",
      "dayName": "Pazar",
      "weekNo": 10,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-12-20-deneme-8",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 8,
          "title": "Jumbo Deneme 8 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "C",
            "B",
            "A",
            "C",
            "A",
            "B",
            "B",
            "C",
            "B",
            "A",
            "B",
            "B",
            "B",
            "A",
            "C",
            "C",
            "C",
            "C",
            "B",
            "C"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 8",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2026-12-21",
      "date": "2026-12-21",
      "dateFormatted": "21.12.2026",
      "dayName": "Pazartesi",
      "weekNo": 11,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-21-isem-61",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "İsem 3. Tema: Test 15 & Test 16 (18 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 15 & Test 16 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 15,
              "q_count": 12,
              "answers": [
                "A",
                "B",
                "C",
                "D",
                "D",
                "C",
                "B",
                "A",
                "B",
                "B",
                "D",
                "A"
              ],
              "title": "3. Tema Test 15 (12 Soru)"
            },
            {
              "test_no": 16,
              "q_count": 6,
              "answers": [
                "C",
                "D",
                "A",
                "D",
                "D",
                "C"
              ],
              "title": "3. Tema Test 16 (6 Soru)"
            }
          ],
          "questionCount": 18
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "İsem 3. Tema: Test 15 & Test 16 (18 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 15 & Test 16 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-22",
      "date": "2026-12-22",
      "dateFormatted": "22.12.2026",
      "dayName": "Salı",
      "weekNo": 11,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-22-parkur-62",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "activity",
          "title": "Parkur S. 110 - 115: Kesirleri Sadeleştirme ve Sıralama (6 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 110 - 115 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "110 - 115"
        }
      ],
      "type": "activity",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 110 - 115: Kesirleri Sadeleştirme ve Sıralama (6 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 110 - 115 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-12-23",
      "date": "2026-12-23",
      "dateFormatted": "23.12.2026",
      "dayName": "Çarşamba",
      "weekNo": 11,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-23-parkur-63",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "activity",
          "title": "Parkur S. 116 - 121: Kesirlerle Toplama ve Çıkarma (6 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 116 - 121 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "116 - 121"
        }
      ],
      "type": "activity",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 116 - 121: Kesirlerle Toplama ve Çıkarma (6 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 116 - 121 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-12-24",
      "date": "2026-12-24",
      "dateFormatted": "24.12.2026",
      "dayName": "Perşembe",
      "weekNo": 11,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-24-isem-64",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "İsem 3. Tema: Test 17 & Test 18 (20 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 17 & Test 18 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 17,
              "q_count": 4,
              "answers": [
                "B",
                "C",
                "D",
                "B"
              ],
              "title": "3. Tema Test 17 (4 Soru)"
            },
            {
              "test_no": 18,
              "q_count": 16,
              "answers": [
                "B",
                "C",
                "A",
                "C",
                "A",
                "D",
                "B",
                "D",
                "B",
                "B",
                "C",
                "A",
                "D",
                "C",
                "C",
                "B"
              ],
              "title": "3. Tema Test 18 (16 Soru)"
            }
          ],
          "questionCount": 20
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "İsem 3. Tema: Test 17 & Test 18 (20 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 17 & Test 18 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-25",
      "date": "2026-12-25",
      "dateFormatted": "25.12.2026",
      "dayName": "Cuma",
      "weekNo": 11,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-25-parkur-65",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "activity",
          "title": "Parkur S. 122 - 127: Kesirlerle Çarpma İşlemi (6 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 122 - 127 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "122 - 127"
        }
      ],
      "type": "activity",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 122 - 127: Kesirlerle Çarpma İşlemi (6 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 122 - 127 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-12-26",
      "date": "2026-12-26",
      "dateFormatted": "26.12.2026",
      "dayName": "Cumartesi",
      "weekNo": 11,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-12-26-isem-66",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "İsem 3. Tema: Test 19 & Test 20 (22 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 19 & Test 20 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 19,
              "q_count": 14,
              "answers": [
                "A",
                "D",
                "C",
                "A",
                "B",
                "D",
                "D",
                "C",
                "C",
                "D",
                "A",
                "C",
                "A",
                "B"
              ],
              "title": "3. Tema Test 19 (14 Soru)"
            },
            {
              "test_no": 20,
              "q_count": 8,
              "answers": [
                "D",
                "B",
                "B",
                "D",
                "B",
                "B",
                "C",
                "C"
              ],
              "title": "3. Tema Test 20 (8 Soru)"
            }
          ],
          "questionCount": 22
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "İsem 3. Tema: Test 19 & Test 20 (22 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 19 & Test 20 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-27",
      "date": "2026-12-27",
      "dateFormatted": "27.12.2026",
      "dayName": "Pazar",
      "weekNo": 11,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2026-12-27-deneme-9",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 9,
          "title": "Jumbo Deneme 9 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "B",
            "C",
            "A",
            "C",
            "A",
            "B",
            "A",
            "B",
            "C",
            "C",
            "D",
            "D",
            "B",
            "A",
            "B",
            "C",
            "D",
            "C",
            "C",
            "B"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 9",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2026-12-28",
      "date": "2026-12-28",
      "dateFormatted": "28.12.2026",
      "dayName": "Pazartesi",
      "weekNo": 12,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-28-parkur-67",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "activity",
          "title": "Parkur S. 128 - 135: Kesirlerle Bölme İşlemi (8 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 128 - 135 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "128 - 135"
        }
      ],
      "type": "activity",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 128 - 135: Kesirlerle Bölme İşlemi (8 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 128 - 135 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-12-29",
      "date": "2026-12-29",
      "dateFormatted": "29.12.2026",
      "dayName": "Salı",
      "weekNo": 12,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-29-parkur-68",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "activity",
          "title": "Parkur S. 136 - 145: Kesir Problemleri ve Uygulamalar (10 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 136 - 145 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "136 - 145"
        }
      ],
      "type": "activity",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 136 - 145: Kesir Problemleri ve Uygulamalar (10 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 136 - 145 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2026-12-30",
      "date": "2026-12-30",
      "dateFormatted": "30.12.2026",
      "dayName": "Çarşamba",
      "weekNo": 12,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-30-isem-69",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "İsem 3. Tema: Test 21 & Test 22 (20 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 21 & Test 22 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 21,
              "q_count": 6,
              "answers": [
                "A",
                "B",
                "D",
                "C",
                "B",
                "C"
              ],
              "title": "3. Tema Test 21 (6 Soru)"
            },
            {
              "test_no": 22,
              "q_count": 14,
              "answers": [
                "C",
                "B",
                "D",
                "A",
                "B",
                "C",
                "B",
                "D",
                "D",
                "B",
                "C",
                "C",
                "B",
                "D"
              ],
              "title": "3. Tema Test 22 (14 Soru)"
            }
          ],
          "questionCount": 20
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "İsem 3. Tema: Test 21 & Test 22 (20 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 21 & Test 22 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2026-12-31",
      "date": "2026-12-31",
      "dateFormatted": "31.12.2026",
      "dayName": "Perşembe",
      "weekNo": 12,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2026-12-31-parkur-70",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "Parkur S. 146 - 147: Kesirler Test 1 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 146 - 147 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "146 - 147",
          "answers": [
            "D",
            "B",
            "C",
            "A",
            "A",
            "D",
            "B",
            "C",
            "B",
            "C",
            "A",
            "D"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 146 - 147: Kesirler Test 1 (12 Soru)",
      "description": "Parkur Matematik Sayfa 146 - 147 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-01",
      "date": "2027-01-01",
      "dateFormatted": "01.01.2027",
      "dayName": "Cuma",
      "weekNo": 12,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-01-isem-71",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "İsem 3. Tema: Test 23 & Test 24 (13 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 23 & Test 24 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 23,
              "q_count": 9,
              "answers": [
                "C",
                "D",
                "B",
                "A",
                "B",
                "D",
                "B",
                "C",
                "A"
              ],
              "title": "3. Tema Test 23 (9 Soru)"
            },
            {
              "test_no": 24,
              "q_count": 4,
              "answers": [
                "A",
                "B",
                "D",
                "B"
              ],
              "title": "3. Tema Test 24 (4 Soru)"
            }
          ],
          "questionCount": 13
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "İsem 3. Tema: Test 23 & Test 24 (13 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 23 & Test 24 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-02",
      "date": "2027-01-02",
      "dateFormatted": "02.01.2027",
      "dayName": "Cumartesi",
      "weekNo": 12,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-01-02-isem-72",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "İsem 3. Tema: Test 25 & Test 26 (20 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 25 & Test 26 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 25,
              "q_count": 12,
              "answers": [
                "C",
                "B",
                "B",
                "C",
                "D",
                "D",
                "B",
                "D",
                "A",
                "D",
                "D",
                "A"
              ],
              "title": "3. Tema Test 25 (12 Soru)"
            },
            {
              "test_no": 26,
              "q_count": 8,
              "answers": [
                "C",
                "B",
                "A",
                "C",
                "D",
                "D",
                "B",
                "A"
              ],
              "title": "3. Tema Test 26 (8 Soru)"
            }
          ],
          "questionCount": 20
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "İsem 3. Tema: Test 25 & Test 26 (20 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 25 & Test 26 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-03",
      "date": "2027-01-03",
      "dateFormatted": "03.01.2027",
      "dayName": "Pazar",
      "weekNo": 12,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-01-03-deneme-10",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 10,
          "title": "Jumbo Deneme 10 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "B",
            "A",
            "B",
            "C",
            "A",
            "D",
            "D",
            "B",
            "B",
            "C",
            "C",
            "C",
            "B",
            "B",
            "A",
            "B",
            "B",
            "A",
            "D",
            "A"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 10",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-01-04",
      "date": "2027-01-04",
      "dateFormatted": "04.01.2027",
      "dayName": "Pazartesi",
      "weekNo": 13,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-04-parkur-73",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "Parkur S. 148 - 149: Kesirler Test 2 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 148 - 149 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "148 - 149",
          "answers": [
            "A",
            "C",
            "D",
            "B",
            "D",
            "A",
            "C",
            "B",
            "C",
            "A",
            "B",
            "D"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 148 - 149: Kesirler Test 2 (12 Soru)",
      "description": "Parkur Matematik Sayfa 148 - 149 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-05",
      "date": "2027-01-05",
      "dateFormatted": "05.01.2027",
      "dayName": "Salı",
      "weekNo": 13,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-05-isem-74",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "İsem 3. Tema: Test 27 & Test 28 (20 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 27 & Test 28 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 27,
              "q_count": 4,
              "answers": [
                "C",
                "D",
                "A",
                "B"
              ],
              "title": "3. Tema Test 27 (4 Soru)"
            },
            {
              "test_no": 28,
              "q_count": 16,
              "answers": [
                "D",
                "A",
                "D",
                "B",
                "D",
                "C",
                "C",
                "B",
                "D",
                "D",
                "C",
                "A",
                "A",
                "B",
                "C",
                "B"
              ],
              "title": "3. Tema Test 28 (16 Soru)"
            }
          ],
          "questionCount": 20
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "İsem 3. Tema: Test 27 & Test 28 (20 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 27 & Test 28 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-06",
      "date": "2027-01-06",
      "dateFormatted": "06.01.2027",
      "dayName": "Çarşamba",
      "weekNo": 13,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-06-isem-75",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "İsem 3. Tema: Test 29 (4 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 29 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 29,
              "q_count": 4,
              "answers": [
                "D",
                "A",
                "C",
                "C"
              ],
              "title": "3. Tema Test 29 (4 Soru)"
            }
          ],
          "questionCount": 4
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "İsem 3. Tema: Test 29 (4 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 29 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-07",
      "date": "2027-01-07",
      "dateFormatted": "07.01.2027",
      "dayName": "Perşembe",
      "weekNo": 13,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-07-parkur-76",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "Parkur S. 150 - 152: Kesirler Test 3 (14 Soru)",
          "detail": "Parkur Matematik Sayfa 150 - 152 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "150 - 152",
          "answers": [
            "B",
            "D",
            "A",
            "C",
            "C",
            "B",
            "D",
            "A",
            "A",
            "C",
            "B",
            "D",
            "B",
            "A"
          ],
          "questionCount": 14
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 150 - 152: Kesirler Test 3 (14 Soru)",
      "description": "Parkur Matematik Sayfa 150 - 152 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-08",
      "date": "2027-01-08",
      "dateFormatted": "08.01.2027",
      "dayName": "Cuma",
      "weekNo": 13,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-08-parkur-77",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "Parkur S. 153 - 155: Kesirler Test 4 (14 Soru)",
          "detail": "Parkur Matematik Sayfa 153 - 155 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "153 - 155",
          "answers": [
            "C",
            "A",
            "B",
            "D",
            "B",
            "D",
            "A",
            "C",
            "D",
            "B",
            "C",
            "A",
            "D",
            "C"
          ],
          "questionCount": 14
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 153 - 155: Kesirler Test 4 (14 Soru)",
      "description": "Parkur Matematik Sayfa 153 - 155 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-09",
      "date": "2027-01-09",
      "dateFormatted": "09.01.2027",
      "dayName": "Cumartesi",
      "weekNo": 13,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-01-09-parkur-78",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "Parkur S. 156 - 158: Kesirler Test 5 - Beceri Temelli (14 Soru)",
          "detail": "Parkur Matematik Sayfa 156 - 158 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "156 - 158",
          "answers": [
            "D",
            "B",
            "C",
            "A",
            "C",
            "A",
            "D",
            "B",
            "A",
            "D",
            "B",
            "C",
            "C",
            "B"
          ],
          "questionCount": 14
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 156 - 158: Kesirler Test 5 - Beceri Temelli (14 Soru)",
      "description": "Parkur Matematik Sayfa 156 - 158 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-10",
      "date": "2027-01-10",
      "dateFormatted": "10.01.2027",
      "dayName": "Pazar",
      "weekNo": 13,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-01-10-deneme-11",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 11,
          "title": "Jumbo Deneme 11 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "B",
            "D",
            "B",
            "C",
            "C",
            "B",
            "D",
            "C",
            "D",
            "C",
            "D",
            "B",
            "C",
            "B",
            "D",
            "B",
            "B",
            "A",
            "C",
            "D"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 11",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-01-11",
      "date": "2027-01-11",
      "dateFormatted": "11.01.2027",
      "dayName": "Pazartesi",
      "weekNo": 14,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-11-parkur-79",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "activity",
          "title": "Parkur S. 160 - 165: Bölme ve Ondalık Gösterim (6 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 160 - 165 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "160 - 165"
        }
      ],
      "type": "activity",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 160 - 165: Bölme ve Ondalık Gösterim (6 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 160 - 165 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-01-12",
      "date": "2027-01-12",
      "dateFormatted": "12.01.2027",
      "dayName": "Salı",
      "weekNo": 14,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-12-parkur-80",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "activity",
          "title": "Parkur S. 166 - 171: Ondalık Gösterimde Yuvarlama (6 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 166 - 171 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "166 - 171"
        }
      ],
      "type": "activity",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 166 - 171: Ondalık Gösterimde Yuvarlama (6 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 166 - 171 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-01-13",
      "date": "2027-01-13",
      "dateFormatted": "13.01.2027",
      "dayName": "Çarşamba",
      "weekNo": 14,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-13-parkur-81",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "activity",
          "title": "Parkur S. 172 - 178: Ondalık Sayılarda Çarpma ve Bölme (7 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 172 - 178 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "172 - 178"
        }
      ],
      "type": "activity",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 172 - 178: Ondalık Sayılarda Çarpma ve Bölme (7 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 172 - 178 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-01-14",
      "date": "2027-01-14",
      "dateFormatted": "14.01.2027",
      "dayName": "Perşembe",
      "weekNo": 14,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-14-parkur-82",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "Parkur S. 179 - 180: Ondalık Gösterim Test 1 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 179 - 180 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "179 - 180",
          "answers": [
            "A",
            "C",
            "B",
            "D",
            "D",
            "A",
            "B",
            "C",
            "C",
            "D",
            "A",
            "B"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 179 - 180: Ondalık Gösterim Test 1 (12 Soru)",
      "description": "Parkur Matematik Sayfa 179 - 180 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-15",
      "date": "2027-01-15",
      "dateFormatted": "15.01.2027",
      "dayName": "Cuma",
      "weekNo": 14,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-15-parkur-83",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "Parkur S. 181 - 182: Ondalık Gösterim Test 2 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 181 - 182 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "181 - 182",
          "answers": [
            "B",
            "D",
            "C",
            "A",
            "A",
            "C",
            "D",
            "B",
            "B",
            "A",
            "C",
            "D"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 181 - 182: Ondalık Gösterim Test 2 (12 Soru)",
      "description": "Parkur Matematik Sayfa 181 - 182 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-16",
      "date": "2027-01-16",
      "dateFormatted": "16.01.2027",
      "dayName": "Cumartesi",
      "weekNo": 14,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-01-16-parkur-84",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "Parkur S. 183 - 185: Ondalık Gösterim Test 3 (14 Soru)",
          "detail": "Parkur Matematik Sayfa 183 - 185 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "183 - 185",
          "answers": [
            "C",
            "A",
            "D",
            "B",
            "B",
            "C",
            "A",
            "D",
            "D",
            "B",
            "A",
            "C",
            "A",
            "D"
          ],
          "questionCount": 14
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 183 - 185: Ondalık Gösterim Test 3 (14 Soru)",
      "description": "Parkur Matematik Sayfa 183 - 185 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-17",
      "date": "2027-01-17",
      "dateFormatted": "17.01.2027",
      "dayName": "Pazar",
      "weekNo": 14,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-01-17-deneme-12",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 12,
          "title": "Jumbo Deneme 12 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "D",
            "B",
            "A",
            "B",
            "A",
            "C",
            "B",
            "C",
            "D",
            "A",
            "B",
            "A",
            "C",
            "B",
            "D",
            "A",
            "C",
            "C",
            "C",
            "D"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 12",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-01-18",
      "date": "2027-01-18",
      "dateFormatted": "18.01.2027",
      "dayName": "Pazartesi",
      "weekNo": 15,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-18-parkur-85",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "Parkur S. 186 - 188: Ondalık Gösterim Test 4 - Beceri Temelli (14 Soru)",
          "detail": "Parkur Matematik Sayfa 186 - 188 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "186 - 188",
          "answers": [
            "D",
            "B",
            "A",
            "C",
            "C",
            "D",
            "B",
            "A",
            "A",
            "C",
            "D",
            "B",
            "C",
            "B"
          ],
          "questionCount": 14
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 186 - 188: Ondalık Gösterim Test 4 - Beceri Temelli (14 Soru)",
      "description": "Parkur Matematik Sayfa 186 - 188 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-19",
      "date": "2027-01-19",
      "dateFormatted": "19.01.2027",
      "dayName": "Salı",
      "weekNo": 15,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-19-parkur-86",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "activity",
          "title": "Parkur S. 190 - 195: Çoklukları Karşılaştırma ve Oran (6 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 190 - 195 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "190 - 195"
        }
      ],
      "type": "activity",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 190 - 195: Çoklukları Karşılaştırma ve Oran (6 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 190 - 195 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-01-20",
      "date": "2027-01-20",
      "dateFormatted": "20.01.2027",
      "dayName": "Çarşamba",
      "weekNo": 15,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-20-parkur-87",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "activity",
          "title": "Parkur S. 196 - 200: Birimli ve Birimsiz Oran, Yüzdeler (5 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 196 - 200 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "196 - 200"
        }
      ],
      "type": "activity",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 196 - 200: Birimli ve Birimsiz Oran, Yüzdeler (5 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 196 - 200 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-01-21",
      "date": "2027-01-21",
      "dateFormatted": "21.01.2027",
      "dayName": "Perşembe",
      "weekNo": 15,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-21-parkur-88",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "Parkur S. 201 - 202: Oran & Yüzde Test 1 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 201 - 202 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "201 - 202",
          "answers": [
            "A",
            "D",
            "B",
            "C",
            "B",
            "A",
            "D",
            "C",
            "C",
            "B",
            "A",
            "D"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 201 - 202: Oran & Yüzde Test 1 (12 Soru)",
      "description": "Parkur Matematik Sayfa 201 - 202 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-22",
      "date": "2027-01-22",
      "dateFormatted": "22.01.2027",
      "dayName": "Cuma",
      "weekNo": 15,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-22-parkur-89",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "Parkur S. 203 - 204: Oran & Yüzde Test 2 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 203 - 204 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "203 - 204",
          "answers": [
            "B",
            "C",
            "A",
            "D",
            "D",
            "B",
            "C",
            "A",
            "A",
            "D",
            "B",
            "C"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 203 - 204: Oran & Yüzde Test 2 (12 Soru)",
      "description": "Parkur Matematik Sayfa 203 - 204 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-23",
      "date": "2027-01-23",
      "dateFormatted": "23.01.2027",
      "dayName": "Cumartesi",
      "weekNo": 15,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-01-23-parkur-90",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "3. Tema: Sayılar ve Nicelikler (2)",
          "type": "test",
          "title": "Parkur S. 205 - 206: Oran & Yüzde Test 3 - Beceri Temelli (12 Soru)",
          "detail": "Parkur Matematik Sayfa 205 - 206 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "205 - 206",
          "answers": [
            "C",
            "A",
            "D",
            "B",
            "A",
            "C",
            "B",
            "D",
            "D",
            "B",
            "A",
            "C"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "3. Tema: Sayılar ve Nicelikler (2)",
      "title": "Parkur S. 205 - 206: Oran & Yüzde Test 3 - Beceri Temelli (12 Soru)",
      "description": "Parkur Matematik Sayfa 205 - 206 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-24",
      "date": "2027-01-24",
      "dateFormatted": "24.01.2027",
      "dayName": "Pazar",
      "weekNo": 15,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-01-24-deneme-13",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 13,
          "title": "Jumbo Deneme 13 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "D",
            "B",
            "C",
            "D",
            "A",
            "B",
            "D",
            "C",
            "B",
            "D",
            "A",
            "D",
            "A",
            "B",
            "C",
            "A",
            "A",
            "D",
            "C",
            "D"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 13",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-01-25",
      "date": "2027-01-25",
      "dateFormatted": "25.01.2027",
      "dayName": "Pazartesi",
      "weekNo": 16,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-25-parkur-91",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "4. Tema: İstatistiksel Araştırma Süreci",
          "type": "activity",
          "title": "Parkur S. 208 - 209: İstatistiksel Araştırma Aşamaları (2 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 208 - 209 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "208 - 209"
        }
      ],
      "type": "activity",
      "tema": "4. Tema: İstatistiksel Araştırma Süreci",
      "title": "Parkur S. 208 - 209: İstatistiksel Araştırma Aşamaları (2 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 208 - 209 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-01-26",
      "date": "2027-01-26",
      "dateFormatted": "26.01.2027",
      "dayName": "Salı",
      "weekNo": 16,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-26-parkur-92",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "4. Tema: İstatistiksel Araştırma Süreci",
          "type": "activity",
          "title": "Parkur S. 210 - 212: Veri Toplama ve Çizelgeleme (3 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 210 - 212 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "210 - 212"
        }
      ],
      "type": "activity",
      "tema": "4. Tema: İstatistiksel Araştırma Süreci",
      "title": "Parkur S. 210 - 212: Veri Toplama ve Çizelgeleme (3 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 210 - 212 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-01-27",
      "date": "2027-01-27",
      "dateFormatted": "27.01.2027",
      "dayName": "Çarşamba",
      "weekNo": 16,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-27-isem-93",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "4. Tema: İstatistiksel Araştırma Süreci",
          "type": "test",
          "title": "İsem 4. Tema: Test 1 & Test 2 (23 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 1 & Test 2 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 1,
              "q_count": 12,
              "answers": [
                "C",
                "D",
                "B",
                "D",
                "B",
                "A",
                "A",
                "C",
                "D",
                "D",
                "C",
                "B"
              ],
              "title": "4. Tema Test 1 (12 Soru)"
            },
            {
              "test_no": 2,
              "q_count": 11,
              "answers": [
                "C",
                "A",
                "B",
                "D",
                "A",
                "B",
                "D",
                "C",
                "B",
                "A",
                "B"
              ],
              "title": "4. Tema Test 2 (11 Soru)"
            }
          ],
          "questionCount": 23
        }
      ],
      "type": "test",
      "tema": "4. Tema: İstatistiksel Araştırma Süreci",
      "title": "İsem 4. Tema: Test 1 & Test 2 (23 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 1 & Test 2 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-28",
      "date": "2027-01-28",
      "dateFormatted": "28.01.2027",
      "dayName": "Perşembe",
      "weekNo": 16,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-28-parkur-94",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "4. Tema: İstatistiksel Araştırma Süreci",
          "type": "test",
          "title": "Parkur S. 213 - 214: Tema 4: Test 1 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 213 - 214 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "213 - 214",
          "answers": [
            "D",
            "B",
            "C",
            "A",
            "A",
            "C",
            "D",
            "B",
            "B",
            "D",
            "A",
            "C"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "4. Tema: İstatistiksel Araştırma Süreci",
      "title": "Parkur S. 213 - 214: Tema 4: Test 1 (12 Soru)",
      "description": "Parkur Matematik Sayfa 213 - 214 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-29",
      "date": "2027-01-29",
      "dateFormatted": "29.01.2027",
      "dayName": "Cuma",
      "weekNo": 16,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-01-29-isem-95",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "4. Tema: İstatistiksel Araştırma Süreci",
          "type": "test",
          "title": "İsem 4. Tema: Test 3 & Test 4 (9 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 3 & Test 4 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 3,
              "q_count": 6,
              "answers": [
                "C",
                "B",
                "C",
                "C",
                "B",
                "D"
              ],
              "title": "4. Tema Test 3 (6 Soru)"
            },
            {
              "test_no": 4,
              "q_count": 3,
              "answers": [
                "C",
                "B",
                "D"
              ],
              "title": "4. Tema Test 4 (3 Soru)"
            }
          ],
          "questionCount": 9
        }
      ],
      "type": "test",
      "tema": "4. Tema: İstatistiksel Araştırma Süreci",
      "title": "İsem 4. Tema: Test 3 & Test 4 (9 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 3 & Test 4 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-30",
      "date": "2027-01-30",
      "dateFormatted": "30.01.2027",
      "dayName": "Cumartesi",
      "weekNo": 16,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-01-30-isem-96",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "4. Tema: İstatistiksel Araştırma Süreci",
          "type": "test",
          "title": "İsem 4. Tema: Test 5 & Test 6 (14 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 5 & Test 6 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 5,
              "q_count": 10,
              "answers": [
                "B",
                "A",
                "B",
                "C",
                "A",
                "D",
                "B",
                "D",
                "A",
                "B"
              ],
              "title": "4. Tema Test 5 (10 Soru)"
            },
            {
              "test_no": 6,
              "q_count": 4,
              "answers": [
                "B",
                "A",
                "C",
                "D"
              ],
              "title": "4. Tema Test 6 (4 Soru)"
            }
          ],
          "questionCount": 14
        }
      ],
      "type": "test",
      "tema": "4. Tema: İstatistiksel Araştırma Süreci",
      "title": "İsem 4. Tema: Test 5 & Test 6 (14 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 5 & Test 6 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-01-31",
      "date": "2027-01-31",
      "dateFormatted": "31.01.2027",
      "dayName": "Pazar",
      "weekNo": 16,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-01-31-deneme-14",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 14,
          "title": "Jumbo Deneme 14 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "B",
            "C",
            "D",
            "C",
            "A",
            "D",
            "B",
            "C",
            "D",
            "D",
            "B",
            "D",
            "A",
            "B",
            "C",
            "D",
            "C",
            "D",
            "D",
            "B"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 14",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-02-01",
      "date": "2027-02-01",
      "dateFormatted": "01.02.2027",
      "dayName": "Pazartesi",
      "weekNo": 17,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-01-parkur-97",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "4. Tema: İstatistiksel Araştırma Süreci",
          "type": "test",
          "title": "Parkur S. 215 - 216: Tema 4: Test 2 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 215 - 216 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "215 - 216",
          "answers": [
            "A",
            "C",
            "D",
            "B",
            "B",
            "A",
            "C",
            "D",
            "C",
            "A",
            "B",
            "D"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "4. Tema: İstatistiksel Araştırma Süreci",
      "title": "Parkur S. 215 - 216: Tema 4: Test 2 (12 Soru)",
      "description": "Parkur Matematik Sayfa 215 - 216 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-02",
      "date": "2027-02-02",
      "dateFormatted": "02.02.2027",
      "dayName": "Salı",
      "weekNo": 17,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-02-isem-98",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "4. Tema: İstatistiksel Araştırma Süreci",
          "type": "test",
          "title": "İsem 4. Tema: Test 7 & Test 8 (19 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 7 & Test 8 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 7,
              "q_count": 5,
              "answers": [
                "D",
                "B",
                "C",
                "C",
                "A"
              ],
              "title": "4. Tema Test 7 (5 Soru)"
            },
            {
              "test_no": 8,
              "q_count": 14,
              "answers": [
                "C",
                "D",
                "A",
                "D",
                "B",
                "A",
                "B",
                "D",
                "C",
                "A",
                "C",
                "D",
                "B",
                "C"
              ],
              "title": "4. Tema Test 8 (14 Soru)"
            }
          ],
          "questionCount": 19
        }
      ],
      "type": "test",
      "tema": "4. Tema: İstatistiksel Araştırma Süreci",
      "title": "İsem 4. Tema: Test 7 & Test 8 (19 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 7 & Test 8 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-03",
      "date": "2027-02-03",
      "dateFormatted": "03.02.2027",
      "dayName": "Çarşamba",
      "weekNo": 17,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-03-isem-99",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "4. Tema: İstatistiksel Araştırma Süreci",
          "type": "test",
          "title": "İsem 4. Tema: Test 9 & Test 10 (19 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 9 & Test 10 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 9,
              "q_count": 13,
              "answers": [
                "B",
                "D",
                "A",
                "B",
                "A",
                "B",
                "C",
                "C",
                "D",
                "A",
                "B",
                "A",
                "A"
              ],
              "title": "4. Tema Test 9 (13 Soru)"
            },
            {
              "test_no": 10,
              "q_count": 6,
              "answers": [
                "A",
                "B",
                "D",
                "A",
                "B",
                "C"
              ],
              "title": "4. Tema Test 10 (6 Soru)"
            }
          ],
          "questionCount": 19
        }
      ],
      "type": "test",
      "tema": "4. Tema: İstatistiksel Araştırma Süreci",
      "title": "İsem 4. Tema: Test 9 & Test 10 (19 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 9 & Test 10 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-04",
      "date": "2027-02-04",
      "dateFormatted": "04.02.2027",
      "dayName": "Perşembe",
      "weekNo": 17,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-04-parkur-100",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "4. Tema: İstatistiksel Araştırma Süreci",
          "type": "test",
          "title": "Parkur S. 217 - 218: Tema 4: Test 3 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 217 - 218 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "217 - 218",
          "answers": [
            "B",
            "D",
            "A",
            "C",
            "C",
            "B",
            "D",
            "A",
            "D",
            "B",
            "C",
            "A"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "4. Tema: İstatistiksel Araştırma Süreci",
      "title": "Parkur S. 217 - 218: Tema 4: Test 3 (12 Soru)",
      "description": "Parkur Matematik Sayfa 217 - 218 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-05",
      "date": "2027-02-05",
      "dateFormatted": "05.02.2027",
      "dayName": "Cuma",
      "weekNo": 17,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-05-isem-101",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "4. Tema: İstatistiksel Araştırma Süreci",
          "type": "test",
          "title": "İsem 4. Tema: Test 11 & Test 12 (11 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 11 & Test 12 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 11,
              "q_count": 6,
              "answers": [
                "D",
                "D",
                "C",
                "B",
                "A",
                "D"
              ],
              "title": "4. Tema Test 11 (6 Soru)"
            },
            {
              "test_no": 12,
              "q_count": 5,
              "answers": [
                "B",
                "C",
                "C",
                "C",
                "A"
              ],
              "title": "4. Tema Test 12 (5 Soru)"
            }
          ],
          "questionCount": 11
        }
      ],
      "type": "test",
      "tema": "4. Tema: İstatistiksel Araştırma Süreci",
      "title": "İsem 4. Tema: Test 11 & Test 12 (11 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 11 & Test 12 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-06",
      "date": "2027-02-06",
      "dateFormatted": "06.02.2027",
      "dayName": "Cumartesi",
      "weekNo": 17,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-02-06-isem-102",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "4. Tema: İstatistiksel Araştırma Süreci",
          "type": "test",
          "title": "İsem 4. Tema: Test 13 & Test 14 (12 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 13 & Test 14 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 13,
              "q_count": 4,
              "answers": [
                "C",
                "A",
                "C",
                "B"
              ],
              "title": "4. Tema Test 13 (4 Soru)"
            },
            {
              "test_no": 14,
              "q_count": 8,
              "answers": [
                "B",
                "C",
                "A",
                "C",
                "A",
                "D",
                "B",
                "B"
              ],
              "title": "4. Tema Test 14 (8 Soru)"
            }
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "4. Tema: İstatistiksel Araştırma Süreci",
      "title": "İsem 4. Tema: Test 13 & Test 14 (12 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 13 & Test 14 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-07",
      "date": "2027-02-07",
      "dateFormatted": "07.02.2027",
      "dayName": "Pazar",
      "weekNo": 17,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-02-07-deneme-15",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 15,
          "title": "Jumbo Deneme 15 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "B",
            "A",
            "C",
            "D",
            "D",
            "D",
            "C",
            "A",
            "B",
            "D",
            "C",
            "A",
            "C",
            "C",
            "D",
            "D",
            "C",
            "C",
            "B",
            "C"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 15",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-02-08",
      "date": "2027-02-08",
      "dateFormatted": "08.02.2027",
      "dayName": "Pazartesi",
      "weekNo": 18,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-08-parkur-103",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "4. Tema: İstatistiksel Araştırma Süreci",
          "type": "test",
          "title": "Parkur S. 219 - 220: Tema 4: Test 4 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 219 - 220 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "219 - 220",
          "answers": [
            "C",
            "A",
            "B",
            "D",
            "D",
            "C",
            "A",
            "B",
            "A",
            "D",
            "B",
            "C"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "4. Tema: İstatistiksel Araştırma Süreci",
      "title": "Parkur S. 219 - 220: Tema 4: Test 4 (12 Soru)",
      "description": "Parkur Matematik Sayfa 219 - 220 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-09",
      "date": "2027-02-09",
      "dateFormatted": "09.02.2027",
      "dayName": "Salı",
      "weekNo": 18,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-09-isem-104",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "4. Tema: İstatistiksel Araştırma Süreci",
          "type": "test",
          "title": "İsem 4. Tema: Test 15 & Test 16 (13 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 15 & Test 16 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 15,
              "q_count": 6,
              "answers": [
                "C",
                "D",
                "B",
                "A",
                "B",
                "D"
              ],
              "title": "4. Tema Test 15 (6 Soru)"
            },
            {
              "test_no": 16,
              "q_count": 7,
              "answers": [
                "D",
                "C",
                "D",
                "B",
                "C",
                "B",
                "D"
              ],
              "title": "4. Tema Test 16 (7 Soru)"
            }
          ],
          "questionCount": 13
        }
      ],
      "type": "test",
      "tema": "4. Tema: İstatistiksel Araştırma Süreci",
      "title": "İsem 4. Tema: Test 15 & Test 16 (13 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 15 & Test 16 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-10",
      "date": "2027-02-10",
      "dateFormatted": "10.02.2027",
      "dayName": "Çarşamba",
      "weekNo": 18,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-10-isem-105",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "4. Tema: İstatistiksel Araştırma Süreci",
          "type": "test",
          "title": "İsem 4. Tema: Test 17 & Test 18 (20 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 17 & Test 18 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 17,
              "q_count": 16,
              "answers": [
                "C",
                "A",
                "D",
                "C",
                "C",
                "A",
                "A",
                "B",
                "B",
                "C",
                "C",
                "A",
                "B",
                "D",
                "B",
                "B"
              ],
              "title": "4. Tema Test 17 (16 Soru)"
            },
            {
              "test_no": 18,
              "q_count": 4,
              "answers": [
                "D",
                "B",
                "B",
                "C"
              ],
              "title": "4. Tema Test 18 (4 Soru)"
            }
          ],
          "questionCount": 20
        }
      ],
      "type": "test",
      "tema": "4. Tema: İstatistiksel Araştırma Süreci",
      "title": "İsem 4. Tema: Test 17 & Test 18 (20 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 17 & Test 18 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-11",
      "date": "2027-02-11",
      "dateFormatted": "11.02.2027",
      "dayName": "Perşembe",
      "weekNo": 18,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-11-parkur-106",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "4. Tema: İstatistiksel Araştırma Süreci",
          "type": "test",
          "title": "Parkur S. 221 - 222: Tema 4: Test 5 - Beceri Temelli (12 Soru)",
          "detail": "Parkur Matematik Sayfa 221 - 222 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "221 - 222",
          "answers": [
            "D",
            "B",
            "C",
            "A",
            "A",
            "D",
            "B",
            "C",
            "B",
            "C",
            "A",
            "D"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "4. Tema: İstatistiksel Araştırma Süreci",
      "title": "Parkur S. 221 - 222: Tema 4: Test 5 - Beceri Temelli (12 Soru)",
      "description": "Parkur Matematik Sayfa 221 - 222 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-12",
      "date": "2027-02-12",
      "dateFormatted": "12.02.2027",
      "dayName": "Cuma",
      "weekNo": 18,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-12-parkur-107",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "activity",
          "title": "Parkur S. 224 - 227: Açının Tanımı ve Komşu Açılar (4 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 224 - 227 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "224 - 227"
        }
      ],
      "type": "activity",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "Parkur S. 224 - 227: Açının Tanımı ve Komşu Açılar (4 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 224 - 227 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-02-13",
      "date": "2027-02-13",
      "dateFormatted": "13.02.2027",
      "dayName": "Cumartesi",
      "weekNo": 18,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-02-13-parkur-108",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "activity",
          "title": "Parkur S. 228 - 232: Tümler, Bütünler ve Ters Açılar (5 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 228 - 232 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "228 - 232"
        }
      ],
      "type": "activity",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "Parkur S. 228 - 232: Tümler, Bütünler ve Ters Açılar (5 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 228 - 232 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-02-14",
      "date": "2027-02-14",
      "dateFormatted": "14.02.2027",
      "dayName": "Pazar",
      "weekNo": 18,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-02-14-deneme-16",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 16,
          "title": "Jumbo Deneme 16 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "A",
            "D",
            "B",
            "B",
            "B",
            "A",
            "B",
            "C",
            "A",
            "A",
            "D",
            "B",
            "D",
            "C",
            "D",
            "A",
            "D",
            "C",
            "A",
            "D"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 16",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-02-15",
      "date": "2027-02-15",
      "dateFormatted": "15.02.2027",
      "dayName": "Pazartesi",
      "weekNo": 19,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-15-isem-109",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "İsem 5. Tema: Test 1 & Test 2 (16 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 1 & Test 2 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 1,
              "q_count": 8,
              "answers": [
                "A",
                "C",
                "D",
                "C",
                "D",
                "B",
                "D",
                "A"
              ],
              "title": "5. Tema Test 1 (8 Soru)"
            },
            {
              "test_no": 2,
              "q_count": 8,
              "answers": [
                "B",
                "C",
                "A",
                "D",
                "C",
                "D",
                "B",
                "A"
              ],
              "title": "5. Tema Test 2 (8 Soru)"
            }
          ],
          "questionCount": 16
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "İsem 5. Tema: Test 1 & Test 2 (16 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 1 & Test 2 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-16",
      "date": "2027-02-16",
      "dateFormatted": "16.02.2027",
      "dayName": "Salı",
      "weekNo": 19,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-16-parkur-110",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "Parkur S. 233 - 234: Açılar Test 1 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 233 - 234 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "233 - 234",
          "answers": [
            "A",
            "D",
            "B",
            "C",
            "C",
            "A",
            "D",
            "B",
            "B",
            "D",
            "A",
            "C"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "Parkur S. 233 - 234: Açılar Test 1 (12 Soru)",
      "description": "Parkur Matematik Sayfa 233 - 234 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-17",
      "date": "2027-02-17",
      "dateFormatted": "17.02.2027",
      "dayName": "Çarşamba",
      "weekNo": 19,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-17-isem-111",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "İsem 5. Tema: Test 3 & Test 4 (12 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 3 & Test 4 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 3,
              "q_count": 4,
              "answers": [
                "A",
                "C",
                "A",
                "B"
              ],
              "title": "5. Tema Test 3 (4 Soru)"
            },
            {
              "test_no": 4,
              "q_count": 8,
              "answers": [
                "B",
                "A",
                "C",
                "C",
                "A",
                "D",
                "B",
                "C"
              ],
              "title": "5. Tema Test 4 (8 Soru)"
            }
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "İsem 5. Tema: Test 3 & Test 4 (12 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 3 & Test 4 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-18",
      "date": "2027-02-18",
      "dateFormatted": "18.02.2027",
      "dayName": "Perşembe",
      "weekNo": 19,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-18-isem-112",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "İsem 5. Tema: Test 5 & Test 6 (10 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 5 & Test 6 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 5,
              "q_count": 6,
              "answers": [
                "C",
                "A",
                "D",
                "B",
                "B",
                "D"
              ],
              "title": "5. Tema Test 5 (6 Soru)"
            },
            {
              "test_no": 6,
              "q_count": 4,
              "answers": [
                "A",
                "A",
                "B",
                "D"
              ],
              "title": "5. Tema Test 6 (4 Soru)"
            }
          ],
          "questionCount": 10
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "İsem 5. Tema: Test 5 & Test 6 (10 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 5 & Test 6 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-19",
      "date": "2027-02-19",
      "dateFormatted": "19.02.2027",
      "dayName": "Cuma",
      "weekNo": 19,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-19-parkur-113",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "Parkur S. 235 - 236: Açılar Test 2 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 235 - 236 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "235 - 236",
          "answers": [
            "B",
            "C",
            "A",
            "D",
            "A",
            "B",
            "D",
            "C",
            "C",
            "A",
            "B",
            "D"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "Parkur S. 235 - 236: Açılar Test 2 (12 Soru)",
      "description": "Parkur Matematik Sayfa 235 - 236 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-20",
      "date": "2027-02-20",
      "dateFormatted": "20.02.2027",
      "dayName": "Cumartesi",
      "weekNo": 19,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-02-20-isem-114",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "İsem 5. Tema: Test 7 & Test 8 (18 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 7 & Test 8 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 7,
              "q_count": 12,
              "answers": [
                "D",
                "C",
                "A",
                "C",
                "B",
                "D",
                "D",
                "B",
                "B",
                "B",
                "A",
                "C"
              ],
              "title": "5. Tema Test 7 (12 Soru)"
            },
            {
              "test_no": 8,
              "q_count": 6,
              "answers": [
                "A",
                "A",
                "C",
                "A",
                "D",
                "C"
              ],
              "title": "5. Tema Test 8 (6 Soru)"
            }
          ],
          "questionCount": 18
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "İsem 5. Tema: Test 7 & Test 8 (18 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 7 & Test 8 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-21",
      "date": "2027-02-21",
      "dateFormatted": "21.02.2027",
      "dayName": "Pazar",
      "weekNo": 19,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-02-21-deneme-17",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 17,
          "title": "Jumbo Deneme 17 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "A",
            "A",
            "D",
            "B",
            "C",
            "C",
            "A",
            "D",
            "B",
            "C",
            "B",
            "C",
            "B",
            "A",
            "B",
            "C",
            "B",
            "D",
            "C",
            "B"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 17",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-02-22",
      "date": "2027-02-22",
      "dateFormatted": "22.02.2027",
      "dayName": "Pazartesi",
      "weekNo": 20,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-22-isem-115",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "İsem 5. Tema: Test 9 & Test 10 (16 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 9 & Test 10 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 9,
              "q_count": 4,
              "answers": [
                "C",
                "C",
                "B",
                "B"
              ],
              "title": "5. Tema Test 9 (4 Soru)"
            },
            {
              "test_no": 10,
              "q_count": 12,
              "answers": [
                "D",
                "B",
                "A",
                "C",
                "D",
                "A",
                "B",
                "C",
                "D",
                "A",
                "C",
                "B"
              ],
              "title": "5. Tema Test 10 (12 Soru)"
            }
          ],
          "questionCount": 16
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "İsem 5. Tema: Test 9 & Test 10 (16 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 9 & Test 10 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-23",
      "date": "2027-02-23",
      "dateFormatted": "23.02.2027",
      "dayName": "Salı",
      "weekNo": 20,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-23-parkur-116",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "Parkur S. 237 - 238: Açılar Test 3 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 237 - 238 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "237 - 238",
          "answers": [
            "C",
            "A",
            "D",
            "B",
            "D",
            "C",
            "A",
            "B",
            "A",
            "D",
            "C",
            "B"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "Parkur S. 237 - 238: Açılar Test 3 (12 Soru)",
      "description": "Parkur Matematik Sayfa 237 - 238 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-24",
      "date": "2027-02-24",
      "dateFormatted": "24.02.2027",
      "dayName": "Çarşamba",
      "weekNo": 20,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-24-isem-117",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "İsem 5. Tema: Test 11 & Test 12 (11 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 11 & Test 12 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 11,
              "q_count": 7,
              "answers": [
                "A",
                "B",
                "C",
                "B",
                "D",
                "C",
                "A"
              ],
              "title": "5. Tema Test 11 (7 Soru)"
            },
            {
              "test_no": 12,
              "q_count": 4,
              "answers": [
                "B",
                "C",
                "A",
                "C"
              ],
              "title": "5. Tema Test 12 (4 Soru)"
            }
          ],
          "questionCount": 11
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "İsem 5. Tema: Test 11 & Test 12 (11 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 11 & Test 12 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-25",
      "date": "2027-02-25",
      "dateFormatted": "25.02.2027",
      "dayName": "Perşembe",
      "weekNo": 20,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-25-parkur-118",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "activity",
          "title": "Parkur S. 240 - 245: Üçgende Açılar ve Özellikleri (6 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 240 - 245 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "240 - 245"
        }
      ],
      "type": "activity",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "Parkur S. 240 - 245: Üçgende Açılar ve Özellikleri (6 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 240 - 245 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-02-26",
      "date": "2027-02-26",
      "dateFormatted": "26.02.2027",
      "dayName": "Cuma",
      "weekNo": 20,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-02-26-parkur-119",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "activity",
          "title": "Parkur S. 246 - 254: Dörtgenler ve İç Açı Toplamları (9 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 246 - 254 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "246 - 254"
        }
      ],
      "type": "activity",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "Parkur S. 246 - 254: Dörtgenler ve İç Açı Toplamları (9 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 246 - 254 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-02-27",
      "date": "2027-02-27",
      "dateFormatted": "27.02.2027",
      "dayName": "Cumartesi",
      "weekNo": 20,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-02-27-isem-120",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "İsem 5. Tema: Test 13 & Test 14 (14 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 13 & Test 14 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 13,
              "q_count": 8,
              "answers": [
                "A",
                "D",
                "C",
                "B",
                "B",
                "C",
                "D",
                "A"
              ],
              "title": "5. Tema Test 13 (8 Soru)"
            },
            {
              "test_no": 14,
              "q_count": 6,
              "answers": [
                "C",
                "B",
                "D",
                "A",
                "B",
                "A"
              ],
              "title": "5. Tema Test 14 (6 Soru)"
            }
          ],
          "questionCount": 14
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "İsem 5. Tema: Test 13 & Test 14 (14 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 13 & Test 14 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-02-28",
      "date": "2027-02-28",
      "dateFormatted": "28.02.2027",
      "dayName": "Pazar",
      "weekNo": 20,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-02-28-deneme-18",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 18,
          "title": "Jumbo Deneme 18 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "C",
            "A",
            "B",
            "D",
            "C",
            "D",
            "C",
            "A",
            "D",
            "A",
            "C",
            "A",
            "D",
            "A",
            "B",
            "A",
            "A",
            "D",
            "B",
            "A"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 18",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-03-01",
      "date": "2027-03-01",
      "dateFormatted": "01.03.2027",
      "dayName": "Pazartesi",
      "weekNo": 21,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-01-parkur-121",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "Parkur S. 255 - 256: Dörtgenler Test 1 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 255 - 256 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "255 - 256",
          "answers": [
            "D",
            "B",
            "A",
            "C",
            "B",
            "D",
            "C",
            "A",
            "C",
            "B",
            "D",
            "A"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "Parkur S. 255 - 256: Dörtgenler Test 1 (12 Soru)",
      "description": "Parkur Matematik Sayfa 255 - 256 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-02",
      "date": "2027-03-02",
      "dateFormatted": "02.03.2027",
      "dayName": "Salı",
      "weekNo": 21,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-02-isem-122",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "İsem 5. Tema: Test 15 & Test 16 (20 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 15 & Test 16 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 15,
              "q_count": 4,
              "answers": [
                "D",
                "A",
                "C",
                "B"
              ],
              "title": "5. Tema Test 15 (4 Soru)"
            },
            {
              "test_no": 16,
              "q_count": 16,
              "answers": [
                "D",
                "A",
                "C",
                "C",
                "D",
                "D",
                "A",
                "A",
                "C",
                "B",
                "A",
                "C",
                "A",
                "C",
                "C",
                "A"
              ],
              "title": "5. Tema Test 16 (16 Soru)"
            }
          ],
          "questionCount": 20
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "İsem 5. Tema: Test 15 & Test 16 (20 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 15 & Test 16 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-03",
      "date": "2027-03-03",
      "dateFormatted": "03.03.2027",
      "dayName": "Çarşamba",
      "weekNo": 21,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-03-isem-123",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "İsem 5. Tema: Test 17 (4 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 17 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 17,
              "q_count": 4,
              "answers": [
                "C",
                "D",
                "D",
                "C"
              ],
              "title": "5. Tema Test 17 (4 Soru)"
            }
          ],
          "questionCount": 4
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "İsem 5. Tema: Test 17 (4 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 17 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-04",
      "date": "2027-03-04",
      "dateFormatted": "04.03.2027",
      "dayName": "Perşembe",
      "weekNo": 21,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-04-parkur-124",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "Parkur S. 257 - 258: Dörtgenler Test 2 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 257 - 258 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "257 - 258",
          "answers": [
            "A",
            "C",
            "D",
            "B",
            "D",
            "A",
            "B",
            "C",
            "B",
            "C",
            "A",
            "D"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "Parkur S. 257 - 258: Dörtgenler Test 2 (12 Soru)",
      "description": "Parkur Matematik Sayfa 257 - 258 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-05",
      "date": "2027-03-05",
      "dateFormatted": "05.03.2027",
      "dayName": "Cuma",
      "weekNo": 21,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-05-parkur-125",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "Parkur S. 259 - 260: Dörtgenler Test 3 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 259 - 260 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "259 - 260",
          "answers": [
            "B",
            "D",
            "A",
            "C",
            "A",
            "B",
            "C",
            "D",
            "D",
            "A",
            "B",
            "C"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "Parkur S. 259 - 260: Dörtgenler Test 3 (12 Soru)",
      "description": "Parkur Matematik Sayfa 259 - 260 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-06",
      "date": "2027-03-06",
      "dateFormatted": "06.03.2027",
      "dayName": "Cumartesi",
      "weekNo": 21,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-03-06-parkur-126",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "Parkur S. 261 - 262: Dörtgenler Test 4 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 261 - 262 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "261 - 262",
          "answers": [
            "C",
            "A",
            "B",
            "D",
            "C",
            "D",
            "A",
            "B",
            "A",
            "C",
            "D",
            "B"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "Parkur S. 261 - 262: Dörtgenler Test 4 (12 Soru)",
      "description": "Parkur Matematik Sayfa 261 - 262 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-07",
      "date": "2027-03-07",
      "dateFormatted": "07.03.2027",
      "dayName": "Pazar",
      "weekNo": 21,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-03-07-deneme-19",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 19,
          "title": "Jumbo Deneme 19 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "B",
            "C",
            "A",
            "D",
            "C",
            "B",
            "A",
            "D",
            "C",
            "C",
            "B",
            "A",
            "C",
            "A",
            "D",
            "C",
            "B",
            "B",
            "D",
            "D"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 19",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-03-08",
      "date": "2027-03-08",
      "dateFormatted": "08.03.2027",
      "dayName": "Pazartesi",
      "weekNo": 22,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-08-parkur-127",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "5. Tema: Geometrik Şekiller",
          "type": "test",
          "title": "Parkur S. 263 - 264: Geometrik Şekiller Beceri Temelli Test (12 Soru)",
          "detail": "Parkur Matematik Sayfa 263 - 264 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "263 - 264",
          "answers": [
            "D",
            "B",
            "C",
            "A",
            "B",
            "A",
            "D",
            "C",
            "C",
            "D",
            "B",
            "A"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "5. Tema: Geometrik Şekiller",
      "title": "Parkur S. 263 - 264: Geometrik Şekiller Beceri Temelli Test (12 Soru)",
      "description": "Parkur Matematik Sayfa 263 - 264 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-09",
      "date": "2027-03-09",
      "dateFormatted": "09.03.2027",
      "dayName": "Salı",
      "weekNo": 22,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-09-parkur-128",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "activity",
          "title": "Parkur S. 266 - 271: Cebirsel İfadelerin Anlamı ve Yazılışı (6 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 266 - 271 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "266 - 271"
        }
      ],
      "type": "activity",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "Parkur S. 266 - 271: Cebirsel İfadelerin Anlamı ve Yazılışı (6 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 266 - 271 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-03-10",
      "date": "2027-03-10",
      "dateFormatted": "10.03.2027",
      "dayName": "Çarşamba",
      "weekNo": 22,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-10-parkur-129",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "activity",
          "title": "Parkur S. 272 - 277: Cebirsel İfadelerin Değerini Hesaplama (6 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 272 - 277 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "272 - 277"
        }
      ],
      "type": "activity",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "Parkur S. 272 - 277: Cebirsel İfadelerin Değerini Hesaplama (6 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 272 - 277 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-03-11",
      "date": "2027-03-11",
      "dateFormatted": "11.03.2027",
      "dayName": "Perşembe",
      "weekNo": 22,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-11-isem-130",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "İsem 6. Tema: Test 1 & Test 2 (24 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 1 & Test 2 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 1,
              "q_count": 12,
              "answers": [
                "C",
                "A",
                "D",
                "A",
                "B",
                "B",
                "D",
                "C",
                "B",
                "D",
                "B",
                "D"
              ],
              "title": "6. Tema Test 1 (12 Soru)"
            },
            {
              "test_no": 2,
              "q_count": 12,
              "answers": [
                "D",
                "D",
                "A",
                "C",
                "D",
                "C",
                "B",
                "B",
                "C",
                "C",
                "D",
                "A"
              ],
              "title": "6. Tema Test 2 (12 Soru)"
            }
          ],
          "questionCount": 24
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "İsem 6. Tema: Test 1 & Test 2 (24 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 1 & Test 2 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-12",
      "date": "2027-03-12",
      "dateFormatted": "12.03.2027",
      "dayName": "Cuma",
      "weekNo": 22,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-12-parkur-131",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "activity",
          "title": "Parkur S. 278 - 286: Sayı Örüntüleri ve Genel Kural (9 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 278 - 286 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "278 - 286"
        }
      ],
      "type": "activity",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "Parkur S. 278 - 286: Sayı Örüntüleri ve Genel Kural (9 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 278 - 286 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-03-13",
      "date": "2027-03-13",
      "dateFormatted": "13.03.2027",
      "dayName": "Cumartesi",
      "weekNo": 22,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-03-13-isem-132",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "İsem 6. Tema: Test 3 & Test 4 (12 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 3 & Test 4 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 3,
              "q_count": 6,
              "answers": [
                "C",
                "A",
                "A",
                "D",
                "A",
                "C"
              ],
              "title": "6. Tema Test 3 (6 Soru)"
            },
            {
              "test_no": 4,
              "q_count": 6,
              "answers": [
                "D",
                "A",
                "D",
                "B",
                "D",
                "A"
              ],
              "title": "6. Tema Test 4 (6 Soru)"
            }
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "İsem 6. Tema: Test 3 & Test 4 (12 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 3 & Test 4 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-14",
      "date": "2027-03-14",
      "dateFormatted": "14.03.2027",
      "dayName": "Pazar",
      "weekNo": 22,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-03-14-deneme-20",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 20,
          "title": "Jumbo Deneme 20 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "C",
            "A",
            "B",
            "C",
            "D",
            "B",
            "A",
            "C",
            "D",
            "B",
            "D",
            "C",
            "D",
            "A",
            "B",
            "B",
            "D",
            "A",
            "C",
            "D"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 20",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-03-15",
      "date": "2027-03-15",
      "dateFormatted": "15.03.2027",
      "dayName": "Pazartesi",
      "weekNo": 23,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-15-isem-133",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "İsem 6. Tema: Test 5 & Test 6 (19 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 5 & Test 6 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 5,
              "q_count": 4,
              "answers": [
                "D",
                "C",
                "B",
                "A"
              ],
              "title": "6. Tema Test 5 (4 Soru)"
            },
            {
              "test_no": 6,
              "q_count": 15,
              "answers": [
                "B",
                "B",
                "D",
                "C",
                "C",
                "A",
                "D",
                "B",
                "C",
                "C",
                "A",
                "D",
                "D",
                "B",
                "A"
              ],
              "title": "6. Tema Test 6 (15 Soru)"
            }
          ],
          "questionCount": 19
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "İsem 6. Tema: Test 5 & Test 6 (19 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 5 & Test 6 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-16",
      "date": "2027-03-16",
      "dateFormatted": "16.03.2027",
      "dayName": "Salı",
      "weekNo": 23,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-16-parkur-134",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "Parkur S. 287 - 288: Cebirsel Düşünme Test 1 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 287 - 288 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "287 - 288",
          "answers": [
            "A",
            "B",
            "C",
            "D",
            "B",
            "C",
            "A",
            "D",
            "C",
            "A",
            "D",
            "B"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "Parkur S. 287 - 288: Cebirsel Düşünme Test 1 (12 Soru)",
      "description": "Parkur Matematik Sayfa 287 - 288 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-17",
      "date": "2027-03-17",
      "dateFormatted": "17.03.2027",
      "dayName": "Çarşamba",
      "weekNo": 23,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-17-isem-135",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "İsem 6. Tema: Test 7 & Test 8 (17 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 7 & Test 8 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 7,
              "q_count": 12,
              "answers": [
                "C",
                "A",
                "D",
                "B",
                "C",
                "A",
                "B",
                "C",
                "B",
                "A",
                "D",
                "C"
              ],
              "title": "6. Tema Test 7 (12 Soru)"
            },
            {
              "test_no": 8,
              "q_count": 5,
              "answers": [
                "B",
                "C",
                "A",
                "D",
                "A"
              ],
              "title": "6. Tema Test 8 (5 Soru)"
            }
          ],
          "questionCount": 17
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "İsem 6. Tema: Test 7 & Test 8 (17 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 7 & Test 8 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-18",
      "date": "2027-03-18",
      "dateFormatted": "18.03.2027",
      "dayName": "Perşembe",
      "weekNo": 23,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-18-isem-136",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "İsem 6. Tema: Test 9 & Test 10 (11 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 9 & Test 10 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 9,
              "q_count": 6,
              "answers": [
                "A",
                "C",
                "C",
                "B",
                "C",
                "C"
              ],
              "title": "6. Tema Test 9 (6 Soru)"
            },
            {
              "test_no": 10,
              "q_count": 5,
              "answers": [
                "C",
                "B",
                "B",
                "C",
                "B"
              ],
              "title": "6. Tema Test 10 (5 Soru)"
            }
          ],
          "questionCount": 11
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "İsem 6. Tema: Test 9 & Test 10 (11 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 9 & Test 10 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-19",
      "date": "2027-03-19",
      "dateFormatted": "19.03.2027",
      "dayName": "Cuma",
      "weekNo": 23,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-19-parkur-137",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "Parkur S. 289 - 290: Cebirsel Düşünme Test 2 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 289 - 290 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "289 - 290",
          "answers": [
            "B",
            "D",
            "A",
            "C",
            "A",
            "D",
            "C",
            "B",
            "D",
            "B",
            "A",
            "C"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "Parkur S. 289 - 290: Cebirsel Düşünme Test 2 (12 Soru)",
      "description": "Parkur Matematik Sayfa 289 - 290 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-20",
      "date": "2027-03-20",
      "dateFormatted": "20.03.2027",
      "dayName": "Cumartesi",
      "weekNo": 23,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-03-20-isem-138",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "İsem 6. Tema: Test 11 & Test 12 (14 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 11 & Test 12 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 11,
              "q_count": 7,
              "answers": [
                "A",
                "D",
                "B",
                "B",
                "C",
                "A",
                "B"
              ],
              "title": "6. Tema Test 11 (7 Soru)"
            },
            {
              "test_no": 12,
              "q_count": 7,
              "answers": [
                "C",
                "C",
                "C",
                "D",
                "B",
                "B",
                "D"
              ],
              "title": "6. Tema Test 12 (7 Soru)"
            }
          ],
          "questionCount": 14
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "İsem 6. Tema: Test 11 & Test 12 (14 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 11 & Test 12 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-21",
      "date": "2027-03-21",
      "dateFormatted": "21.03.2027",
      "dayName": "Pazar",
      "weekNo": 23,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-03-21-deneme-21",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 21,
          "title": "Jumbo Deneme 21 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "C",
            "A",
            "D",
            "B",
            "B",
            "A",
            "B",
            "C",
            "D",
            "A",
            "B",
            "B",
            "C",
            "B",
            "C",
            "A",
            "C",
            "D",
            "A",
            "B"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 21",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-03-22",
      "date": "2027-03-22",
      "dateFormatted": "22.03.2027",
      "dayName": "Pazartesi",
      "weekNo": 24,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-22-isem-139",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "İsem 6. Tema: Test 13 & Test 14 (9 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 13 & Test 14 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 13,
              "q_count": 5,
              "answers": [
                "B",
                "C",
                "A",
                "D",
                "C"
              ],
              "title": "6. Tema Test 13 (5 Soru)"
            },
            {
              "test_no": 14,
              "q_count": 4,
              "answers": [
                "C",
                "D",
                "C",
                "B"
              ],
              "title": "6. Tema Test 14 (4 Soru)"
            }
          ],
          "questionCount": 9
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "İsem 6. Tema: Test 13 & Test 14 (9 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 13 & Test 14 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-23",
      "date": "2027-03-23",
      "dateFormatted": "23.03.2027",
      "dayName": "Salı",
      "weekNo": 24,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-23-parkur-140",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "Parkur S. 291 - 292: Cebirsel Düşünme Test 3 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 291 - 292 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "291 - 292",
          "answers": [
            "C",
            "A",
            "D",
            "B",
            "C",
            "B",
            "D",
            "A",
            "A",
            "C",
            "B",
            "D"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "Parkur S. 291 - 292: Cebirsel Düşünme Test 3 (12 Soru)",
      "description": "Parkur Matematik Sayfa 291 - 292 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-24",
      "date": "2027-03-24",
      "dateFormatted": "24.03.2027",
      "dayName": "Çarşamba",
      "weekNo": 24,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-24-isem-141",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "İsem 6. Tema: Test 15 & Test 16 (7 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 15 & Test 16 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 15,
              "q_count": 5,
              "answers": [
                "A",
                "D",
                "B",
                "A",
                "D"
              ],
              "title": "6. Tema Test 15 (5 Soru)"
            },
            {
              "test_no": 16,
              "q_count": 2,
              "answers": [
                "C",
                "B"
              ],
              "title": "6. Tema Test 16 (2 Soru)"
            }
          ],
          "questionCount": 7
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "İsem 6. Tema: Test 15 & Test 16 (7 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 15 & Test 16 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-25",
      "date": "2027-03-25",
      "dateFormatted": "25.03.2027",
      "dayName": "Perşembe",
      "weekNo": 24,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-25-isem-142",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "İsem 6. Tema: Test 17 & Test 18 (16 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 17 & Test 18 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 17,
              "q_count": 12,
              "answers": [
                "B",
                "A",
                "D",
                "C",
                "A",
                "C",
                "B",
                "D",
                "C",
                "B",
                "C",
                "B"
              ],
              "title": "6. Tema Test 17 (12 Soru)"
            },
            {
              "test_no": 18,
              "q_count": 4,
              "answers": [
                "B",
                "C",
                "D",
                "B"
              ],
              "title": "6. Tema Test 18 (4 Soru)"
            }
          ],
          "questionCount": 16
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "İsem 6. Tema: Test 17 & Test 18 (16 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 17 & Test 18 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-26",
      "date": "2027-03-26",
      "dateFormatted": "26.03.2027",
      "dayName": "Cuma",
      "weekNo": 24,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-26-parkur-143",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "Parkur S. 293 - 294: Cebirsel Düşünme Test 4 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 293 - 294 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "293 - 294",
          "answers": [
            "D",
            "C",
            "B",
            "A",
            "B",
            "A",
            "C",
            "D",
            "B",
            "D",
            "C",
            "A"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "Parkur S. 293 - 294: Cebirsel Düşünme Test 4 (12 Soru)",
      "description": "Parkur Matematik Sayfa 293 - 294 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-27",
      "date": "2027-03-27",
      "dateFormatted": "27.03.2027",
      "dayName": "Cumartesi",
      "weekNo": 24,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-03-27-parkur-144",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "Parkur S. 295 - 296: Cebirsel Düşünme Test 5 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 295 - 296 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "295 - 296",
          "answers": [
            "A",
            "D",
            "C",
            "B",
            "D",
            "C",
            "A",
            "B",
            "C",
            "A",
            "D",
            "B"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "Parkur S. 295 - 296: Cebirsel Düşünme Test 5 (12 Soru)",
      "description": "Parkur Matematik Sayfa 295 - 296 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-28",
      "date": "2027-03-28",
      "dateFormatted": "28.03.2027",
      "dayName": "Pazar",
      "weekNo": 24,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-03-28-deneme-22",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 22,
          "title": "Jumbo Deneme 22 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "B",
            "B",
            "A",
            "C",
            "C",
            "D",
            "C",
            "C",
            "A",
            "D",
            "B",
            "D",
            "B",
            "C",
            "C",
            "B",
            "D",
            "C",
            "C",
            "C"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 22",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-03-29",
      "date": "2027-03-29",
      "dateFormatted": "29.03.2027",
      "dayName": "Pazartesi",
      "weekNo": 25,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-29-parkur-145",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "Parkur S. 297 - 298: Cebirsel Düşünme Test 6 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 297 - 298 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "297 - 298",
          "answers": [
            "B",
            "A",
            "D",
            "C",
            "A",
            "B",
            "D",
            "C",
            "D",
            "B",
            "C",
            "A"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "Parkur S. 297 - 298: Cebirsel Düşünme Test 6 (12 Soru)",
      "description": "Parkur Matematik Sayfa 297 - 298 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-30",
      "date": "2027-03-30",
      "dateFormatted": "30.03.2027",
      "dayName": "Salı",
      "weekNo": 25,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-30-parkur-146",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "Parkur S. 299 - 300: Cebirsel Düşünme Test 7 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 299 - 300 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "299 - 300",
          "answers": [
            "C",
            "B",
            "A",
            "D",
            "C",
            "D",
            "B",
            "A",
            "A",
            "D",
            "B",
            "C"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "Parkur S. 299 - 300: Cebirsel Düşünme Test 7 (12 Soru)",
      "description": "Parkur Matematik Sayfa 299 - 300 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-03-31",
      "date": "2027-03-31",
      "dateFormatted": "31.03.2027",
      "dayName": "Çarşamba",
      "weekNo": 25,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-03-31-parkur-147",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
          "type": "test",
          "title": "Parkur S. 301 - 302: Cebirsel Düşünme Beceri Temelli Test (12 Soru)",
          "detail": "Parkur Matematik Sayfa 301 - 302 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "301 - 302",
          "answers": [
            "D",
            "A",
            "B",
            "C",
            "B",
            "C",
            "A",
            "D",
            "B",
            "C",
            "D",
            "A"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",
      "title": "Parkur S. 301 - 302: Cebirsel Düşünme Beceri Temelli Test (12 Soru)",
      "description": "Parkur Matematik Sayfa 301 - 302 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-04-01",
      "date": "2027-04-01",
      "dateFormatted": "01.04.2027",
      "dayName": "Perşembe",
      "weekNo": 25,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-01-parkur-148",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "activity",
          "title": "Parkur S. 304 - 311: Alan Ölçü Birimleri ve Dönüşümler (8 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 304 - 311 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "304 - 311"
        }
      ],
      "type": "activity",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "Parkur S. 304 - 311: Alan Ölçü Birimleri ve Dönüşümler (8 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 304 - 311 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-04-02",
      "date": "2027-04-02",
      "dateFormatted": "02.04.2027",
      "dayName": "Cuma",
      "weekNo": 25,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-02-parkur-149",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "activity",
          "title": "Parkur S. 312 - 315: Arazi Ölçüleri (Ar, Dekar, Hektar) (4 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 312 - 315 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "312 - 315"
        }
      ],
      "type": "activity",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "Parkur S. 312 - 315: Arazi Ölçüleri (Ar, Dekar, Hektar) (4 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 312 - 315 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-04-03",
      "date": "2027-04-03",
      "dateFormatted": "03.04.2027",
      "dayName": "Cumartesi",
      "weekNo": 25,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-04-03-isem-150",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "test",
          "title": "İsem 7. Tema: Test 1 & Test 2 (18 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 1 & Test 2 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 1,
              "q_count": 12,
              "answers": [
                "A",
                "A",
                "B",
                "D",
                "A",
                "C",
                "A",
                "C",
                "D",
                "D",
                "B",
                "C"
              ],
              "title": "7. Tema Test 1 (12 Soru)"
            },
            {
              "test_no": 2,
              "q_count": 6,
              "answers": [
                "C",
                "C",
                "B",
                "B",
                "C",
                "D"
              ],
              "title": "7. Tema Test 2 (6 Soru)"
            }
          ],
          "questionCount": 18
        }
      ],
      "type": "test",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "İsem 7. Tema: Test 1 & Test 2 (18 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 1 & Test 2 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-04-04",
      "date": "2027-04-04",
      "dateFormatted": "04.04.2027",
      "dayName": "Pazar",
      "weekNo": 25,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-04-04-deneme-23",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 23,
          "title": "Jumbo Deneme 23 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "B",
            "B",
            "D",
            "C",
            "C",
            "B",
            "D",
            "C",
            "A",
            "D",
            "A",
            "B",
            "B",
            "C",
            "B",
            "D",
            "C",
            "A",
            "B",
            "C"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 23",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-04-05",
      "date": "2027-04-05",
      "dateFormatted": "05.04.2027",
      "dayName": "Pazartesi",
      "weekNo": 26,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-05-parkur-151",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "test",
          "title": "Parkur S. 316 - 318: Alan Ölçüleri Test 1 (14 Soru)",
          "detail": "Parkur Matematik Sayfa 316 - 318 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "316 - 318",
          "answers": [
            "A",
            "C",
            "D",
            "B",
            "B",
            "A",
            "D",
            "C",
            "C",
            "B",
            "A",
            "D",
            "A",
            "C"
          ],
          "questionCount": 14
        }
      ],
      "type": "test",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "Parkur S. 316 - 318: Alan Ölçüleri Test 1 (14 Soru)",
      "description": "Parkur Matematik Sayfa 316 - 318 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-04-06",
      "date": "2027-04-06",
      "dateFormatted": "06.04.2027",
      "dayName": "Salı",
      "weekNo": 26,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-06-isem-152",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "test",
          "title": "İsem 7. Tema: Test 3 & Test 4 (16 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 3 & Test 4 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 3,
              "q_count": 4,
              "answers": [
                "A",
                "C",
                "A",
                "C"
              ],
              "title": "7. Tema Test 3 (4 Soru)"
            },
            {
              "test_no": 4,
              "q_count": 12,
              "answers": [
                "C",
                "B",
                "B",
                "A",
                "C",
                "D",
                "C",
                "D",
                "B",
                "A",
                "B",
                "C"
              ],
              "title": "7. Tema Test 4 (12 Soru)"
            }
          ],
          "questionCount": 16
        }
      ],
      "type": "test",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "İsem 7. Tema: Test 3 & Test 4 (16 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 3 & Test 4 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-04-07",
      "date": "2027-04-07",
      "dateFormatted": "07.04.2027",
      "dayName": "Çarşamba",
      "weekNo": 26,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-07-parkur-153",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "activity",
          "title": "Parkur S. 320 - 327: Paralelkenarda Yükseklik ve Alan (8 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 320 - 327 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "320 - 327"
        }
      ],
      "type": "activity",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "Parkur S. 320 - 327: Paralelkenarda Yükseklik ve Alan (8 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 320 - 327 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-04-08",
      "date": "2027-04-08",
      "dateFormatted": "08.04.2027",
      "dayName": "Perşembe",
      "weekNo": 26,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-08-parkur-154",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "activity",
          "title": "Parkur S. 328 - 336: Paralelkenar Alan Problemleri (9 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 328 - 336 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "328 - 336"
        }
      ],
      "type": "activity",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "Parkur S. 328 - 336: Paralelkenar Alan Problemleri (9 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 328 - 336 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-04-09",
      "date": "2027-04-09",
      "dateFormatted": "09.04.2027",
      "dayName": "Cuma",
      "weekNo": 26,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-09-isem-155",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "test",
          "title": "İsem 7. Tema: Test 5 & Test 6 (10 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 5 & Test 6 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 5,
              "q_count": 6,
              "answers": [
                "C",
                "C",
                "D",
                "B",
                "B",
                "A"
              ],
              "title": "7. Tema Test 5 (6 Soru)"
            },
            {
              "test_no": 6,
              "q_count": 4,
              "answers": [
                "C",
                "B",
                "D",
                "A"
              ],
              "title": "7. Tema Test 6 (4 Soru)"
            }
          ],
          "questionCount": 10
        }
      ],
      "type": "test",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "İsem 7. Tema: Test 5 & Test 6 (10 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 5 & Test 6 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-04-10",
      "date": "2027-04-10",
      "dateFormatted": "10.04.2027",
      "dayName": "Cumartesi",
      "weekNo": 26,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-04-10-parkur-156",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "test",
          "title": "Parkur S. 337 - 338: Paralelkenar Test 1 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 337 - 338 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "337 - 338",
          "answers": [
            "B",
            "D",
            "A",
            "C",
            "C",
            "B",
            "D",
            "A",
            "D",
            "A",
            "C",
            "B"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "Parkur S. 337 - 338: Paralelkenar Test 1 (12 Soru)",
      "description": "Parkur Matematik Sayfa 337 - 338 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-04-11",
      "date": "2027-04-11",
      "dateFormatted": "11.04.2027",
      "dayName": "Pazar",
      "weekNo": 26,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-04-11-deneme-24",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 24,
          "title": "Jumbo Deneme 24 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "C",
            "B",
            "C",
            "B",
            "C",
            "B",
            "A",
            "B",
            "A",
            "C",
            "D",
            "D",
            "D",
            "D",
            "D",
            "C",
            "D",
            "A",
            "A",
            "C"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 24",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-04-12",
      "date": "2027-04-12",
      "dateFormatted": "12.04.2027",
      "dayName": "Pazartesi",
      "weekNo": 27,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-12-isem-157",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "test",
          "title": "İsem 7. Tema: Test 7 & Test 8 (20 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 7 & Test 8 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 7,
              "q_count": 10,
              "answers": [
                "A",
                "D",
                "C",
                "D",
                "B",
                "A",
                "B",
                "A",
                "C",
                "D"
              ],
              "title": "7. Tema Test 7 (10 Soru)"
            },
            {
              "test_no": 8,
              "q_count": 10,
              "answers": [
                "B",
                "C",
                "D",
                "C",
                "B",
                "C",
                "D",
                "C",
                "B",
                "D"
              ],
              "title": "7. Tema Test 8 (10 Soru)"
            }
          ],
          "questionCount": 20
        }
      ],
      "type": "test",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "İsem 7. Tema: Test 7 & Test 8 (20 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 7 & Test 8 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-04-13",
      "date": "2027-04-13",
      "dateFormatted": "13.04.2027",
      "dayName": "Salı",
      "weekNo": 27,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-13-parkur-158",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "activity",
          "title": "Parkur S. 339 - 344: Üçgende Yükseklik ve Alan Bağıntısı (6 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 339 - 344 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "339 - 344"
        }
      ],
      "type": "activity",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "Parkur S. 339 - 344: Üçgende Yükseklik ve Alan Bağıntısı (6 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 339 - 344 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-04-14",
      "date": "2027-04-14",
      "dateFormatted": "14.04.2027",
      "dayName": "Çarşamba",
      "weekNo": 27,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-14-parkur-159",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "activity",
          "title": "Parkur S. 345 - 349: Üçgende Alan Problemleri (5 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 345 - 349 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "345 - 349"
        }
      ],
      "type": "activity",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "Parkur S. 345 - 349: Üçgende Alan Problemleri (5 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 345 - 349 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-04-15",
      "date": "2027-04-15",
      "dateFormatted": "15.04.2027",
      "dayName": "Perşembe",
      "weekNo": 27,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-15-isem-160",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "test",
          "title": "İsem 7. Tema: Test 9 & Test 10 (11 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 9 & Test 10 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 9,
              "q_count": 6,
              "answers": [
                "B",
                "A",
                "D",
                "C",
                "B",
                "D"
              ],
              "title": "7. Tema Test 9 (6 Soru)"
            },
            {
              "test_no": 10,
              "q_count": 5,
              "answers": [
                "A",
                "A",
                "A",
                "C",
                "D"
              ],
              "title": "7. Tema Test 10 (5 Soru)"
            }
          ],
          "questionCount": 11
        }
      ],
      "type": "test",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "İsem 7. Tema: Test 9 & Test 10 (11 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 9 & Test 10 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-04-16",
      "date": "2027-04-16",
      "dateFormatted": "16.04.2027",
      "dayName": "Cuma",
      "weekNo": 27,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-16-parkur-161",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "test",
          "title": "Parkur S. 350 - 352: Üçgen Alanı Test 1 (14 Soru)",
          "detail": "Parkur Matematik Sayfa 350 - 352 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "350 - 352",
          "answers": [
            "C",
            "A",
            "B",
            "D",
            "D",
            "C",
            "A",
            "B",
            "A",
            "D",
            "B",
            "C",
            "B",
            "D"
          ],
          "questionCount": 14
        }
      ],
      "type": "test",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "Parkur S. 350 - 352: Üçgen Alanı Test 1 (14 Soru)",
      "description": "Parkur Matematik Sayfa 350 - 352 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-04-17",
      "date": "2027-04-17",
      "dateFormatted": "17.04.2027",
      "dayName": "Cumartesi",
      "weekNo": 27,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-04-17-isem-162",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "test",
          "title": "İsem 7. Tema: Test 11 & Test 12 (12 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 11 & Test 12 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 11,
              "q_count": 8,
              "answers": [
                "D",
                "D",
                "A",
                "A",
                "A",
                "D",
                "A",
                "A"
              ],
              "title": "7. Tema Test 11 (8 Soru)"
            },
            {
              "test_no": 12,
              "q_count": 4,
              "answers": [
                "A",
                "B",
                "C",
                "B"
              ],
              "title": "7. Tema Test 12 (4 Soru)"
            }
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "İsem 7. Tema: Test 11 & Test 12 (12 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 11 & Test 12 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-04-18",
      "date": "2027-04-18",
      "dateFormatted": "18.04.2027",
      "dayName": "Pazar",
      "weekNo": 27,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-04-18-deneme-25",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 25,
          "title": "Jumbo Deneme 25 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "D",
            "A",
            "D",
            "C",
            "B",
            "B",
            "A",
            "D",
            "B",
            "C",
            "D",
            "B",
            "B",
            "C",
            "A",
            "C",
            "D",
            "B",
            "C",
            "B"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 25",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-04-19",
      "date": "2027-04-19",
      "dateFormatted": "19.04.2027",
      "dayName": "Pazartesi",
      "weekNo": 28,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-19-parkur-163",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "activity",
          "title": "Parkur S. 354 - 361: Çember, Çap, Yarıçap ve Pi Sayısı (8 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 354 - 361 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "354 - 361"
        }
      ],
      "type": "activity",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "Parkur S. 354 - 361: Çember, Çap, Yarıçap ve Pi Sayısı (8 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 354 - 361 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-04-20",
      "date": "2027-04-20",
      "dateFormatted": "20.04.2027",
      "dayName": "Salı",
      "weekNo": 28,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-20-parkur-164",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "activity",
          "title": "Parkur S. 362 - 366: Çemberin Çevre Uzunluğu (5 Sayfa Etkinlik)",
          "detail": "Parkur Matematik kitabından Sayfa 362 - 366 etkinliklerini dikkatle çözünüz.",
          "durationMinutes": 30,
          "isCompleted": false,
          "pages": "362 - 366"
        }
      ],
      "type": "activity",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "Parkur S. 362 - 366: Çemberin Çevre Uzunluğu (5 Sayfa Etkinlik)",
      "description": "Parkur Matematik kitabından Sayfa 362 - 366 etkinliklerini dikkatle çözünüz."
    },
    {
      "id": "day-2027-04-21",
      "date": "2027-04-21",
      "dateFormatted": "21.04.2027",
      "dayName": "Çarşamba",
      "weekNo": 28,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-21-isem-165",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "test",
          "title": "İsem 7. Tema: Test 13 & Test 14 (16 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 13 & Test 14 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 13,
              "q_count": 4,
              "answers": [
                "B",
                "D",
                "A",
                "C"
              ],
              "title": "7. Tema Test 13 (4 Soru)"
            },
            {
              "test_no": 14,
              "q_count": 12,
              "answers": [
                "D",
                "D",
                "B",
                "A",
                "C",
                "C",
                "B",
                "A",
                "C",
                "A",
                "D",
                "B"
              ],
              "title": "7. Tema Test 14 (12 Soru)"
            }
          ],
          "questionCount": 16
        }
      ],
      "type": "test",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "İsem 7. Tema: Test 13 & Test 14 (16 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 13 & Test 14 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-04-22",
      "date": "2027-04-22",
      "dateFormatted": "22.04.2027",
      "dayName": "Perşembe",
      "weekNo": 28,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-22-parkur-166",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "test",
          "title": "Parkur S. 367 - 368: Çember Test 1 (12 Soru)",
          "detail": "Parkur Matematik Sayfa 367 - 368 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "367 - 368",
          "answers": [
            "D",
            "B",
            "C",
            "A",
            "A",
            "D",
            "B",
            "C",
            "B",
            "C",
            "A",
            "D"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "Parkur S. 367 - 368: Çember Test 1 (12 Soru)",
      "description": "Parkur Matematik Sayfa 367 - 368 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-04-23",
      "date": "2027-04-23",
      "dateFormatted": "23.04.2027",
      "dayName": "Cuma",
      "weekNo": 28,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-23-isem-167",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "test",
          "title": "İsem 7. Tema: Test 15 & Test 16 (11 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 15 & Test 16 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 15,
              "q_count": 7,
              "answers": [
                "C",
                "C",
                "B",
                "B",
                "D",
                "C",
                "A"
              ],
              "title": "7. Tema Test 15 (7 Soru)"
            },
            {
              "test_no": 16,
              "q_count": 4,
              "answers": [
                "B",
                "A",
                "A",
                "A"
              ],
              "title": "7. Tema Test 16 (4 Soru)"
            }
          ],
          "questionCount": 11
        }
      ],
      "type": "test",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "İsem 7. Tema: Test 15 & Test 16 (11 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 15 & Test 16 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-04-24",
      "date": "2027-04-24",
      "dateFormatted": "24.04.2027",
      "dayName": "Cumartesi",
      "weekNo": 28,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-04-24-isem-168",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "test",
          "title": "İsem 7. Tema: Test 17 & Test 18 (18 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 17 & Test 18 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 17,
              "q_count": 12,
              "answers": [
                "B",
                "D",
                "D",
                "A",
                "B",
                "C",
                "D",
                "D",
                "D",
                "C",
                "D",
                "C"
              ],
              "title": "7. Tema Test 17 (12 Soru)"
            },
            {
              "test_no": 18,
              "q_count": 6,
              "answers": [
                "B",
                "D",
                "A",
                "D",
                "B",
                "A"
              ],
              "title": "7. Tema Test 18 (6 Soru)"
            }
          ],
          "questionCount": 18
        }
      ],
      "type": "test",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "İsem 7. Tema: Test 17 & Test 18 (18 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 17 & Test 18 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-04-25",
      "date": "2027-04-25",
      "dateFormatted": "25.04.2027",
      "dayName": "Pazar",
      "weekNo": 28,
      "isWeekend": true,
      "tasks": [
        {
          "id": "task-2027-04-25-deneme-26",
          "book": "6 Jumbo Deneme Bankası",
          "bookCode": "jumbo",
          "type": "deneme",
          "denemeNo": 26,
          "title": "Jumbo Deneme 26 (20 Soru)",
          "detail": "Gerçek sınav provası: 40 dakika süre tutunuz. Cevaplarınızı optik forma işaretleyip hemen kontrol ediniz.",
          "questionCount": 20,
          "durationMinutes": 40,
          "answers": [
            "A",
            "D",
            "A",
            "B",
            "D",
            "B",
            "C",
            "C",
            "D",
            "A",
            "C",
            "B",
            "B",
            "B",
            "D",
            "D",
            "B",
            "C",
            "B",
            "D"
          ],
          "isCompleted": false
        }
      ],
      "type": "deneme",
      "title": "🏆 6 Jumbo Matematik Deneme 26",
      "description": "20 Soru - 40 Dakika Deneme Sınavı Uygulaması. Süre tutarak çözünüz ve optik forma kodlayınız."
    },
    {
      "id": "day-2027-04-26",
      "date": "2027-04-26",
      "dateFormatted": "26.04.2027",
      "dayName": "Pazartesi",
      "weekNo": 29,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-26-parkur-169",
          "book": "Parkur Matematik",
          "bookCode": "parkur",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "test",
          "title": "Parkur S. 369 - 370: Geometrik Nicelikler Beceri Temelli Test (12 Soru)",
          "detail": "Parkur Matematik Sayfa 369 - 370 testini çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 25,
          "isCompleted": false,
          "pages": "369 - 370",
          "answers": [
            "A",
            "D",
            "B",
            "C",
            "C",
            "A",
            "D",
            "B",
            "D",
            "B",
            "A",
            "C"
          ],
          "questionCount": 12
        }
      ],
      "type": "test",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "Parkur S. 369 - 370: Geometrik Nicelikler Beceri Temelli Test (12 Soru)",
      "description": "Parkur Matematik Sayfa 369 - 370 testini çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-04-27",
      "date": "2027-04-27",
      "dateFormatted": "27.04.2027",
      "dayName": "Salı",
      "weekNo": 29,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-27-isem-170",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "test",
          "title": "İsem 7. Tema: Test 19 & Test 20 (16 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 19 & Test 20 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 19,
              "q_count": 4,
              "answers": [
                "C",
                "B",
                "C",
                "D"
              ],
              "title": "7. Tema Test 19 (4 Soru)"
            },
            {
              "test_no": 20,
              "q_count": 12,
              "answers": [
                "D",
                "B",
                "C",
                "C",
                "D",
                "C",
                "B",
                "A",
                "B",
                "D",
                "A",
                "B"
              ],
              "title": "7. Tema Test 20 (12 Soru)"
            }
          ],
          "questionCount": 16
        }
      ],
      "type": "test",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "İsem 7. Tema: Test 19 & Test 20 (16 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 19 & Test 20 çözünüz ve optik formdan kontrol ediniz."
    },
    {
      "id": "day-2027-04-28",
      "date": "2027-04-28",
      "dateFormatted": "28.04.2027",
      "dayName": "Çarşamba",
      "weekNo": 29,
      "isWeekend": false,
      "tasks": [
        {
          "id": "task-2027-04-28-isem-171",
          "book": "İsem Yayıncılık",
          "bookCode": "isem",
          "tema": "7. Tema: Geometrik Nicelikler",
          "type": "test",
          "title": "İsem 7. Tema: Test 21 (4 Soru)",
          "detail": "İsem 6. Sınıf Matematik kitabından Test 21 çözünüz ve optik formdan kontrol ediniz.",
          "durationMinutes": 35,
          "isCompleted": false,
          "tests": [
            {
              "test_no": 21,
              "q_count": 4,
              "answers": [
                "C",
                "B",
                "C",
                "D"
              ],
              "title": "7. Tema Test 21 (4 Soru)"
            }
          ],
          "questionCount": 4
        }
      ],
      "type": "test",
      "tema": "7. Tema: Geometrik Nicelikler",
      "title": "İsem 7. Tema: Test 21 (4 Soru)",
      "description": "İsem 6. Sınıf Matematik kitabından Test 21 çözünüz ve optik formdan kontrol ediniz."
    }
  ]
};
