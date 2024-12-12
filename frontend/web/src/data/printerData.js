let printers = [
    {
        "id": "1",
        "brand": "HP",
        "model": "ABCXYZ",
        "room": "420",
        "building": "A1",
        "campus": "BK1",
        "status": "Kích hoạt",
        "printables": [
            "pdf, docx"
        ]
    },
    {
        "id": "2",
        "brand": "Cannon",
        "model": "LBP 29000",
        "room": "811",
        "building": "H6",
        "campus": "BK2",
        "status": "Kich hoạt",
        "printables": [
            "pdf, docx"
        ]
    }
];

export const getPrinters = () => {
    return printers;
};

export const addPrinter = (newPrinter) => {
    printers.push(newPrinter);
};

export const updatePrinter = (updatedPrinter) => {
    printers = printers.map(printer =>
        printer.id === updatedPrinter.id ? updatedPrinter : printer
    );
};