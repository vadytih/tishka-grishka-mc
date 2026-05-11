// Интерфейс товара из ответа Wildberries
export interface WBProduct {
    id: number;
    name: string;
    brand: string;
    priceU: number; // цена в копейках * 100 (например, 199900 = 1999₽)
    salePriceU?: number;
    images: string[]; // массив названий изображений
    description?: string;
    rating?: number;
    feedbacks?: number;
}

// Вспомогательная функция: форматирование цены
export const formatPrice = (priceU: number): string => {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0
    }).format(priceU / 100);
};

