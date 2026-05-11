import { WBProduct } from '../types/wb';

// Базовый URL через прокси (настроен в vite.config.ts)
const WB_PROXY_BASE = '/api/wb';

/**
 * Получает данные товара по его артикулу/идентификатору
 * @param productId - ID товара на Wildberries
 */
export const fetchWBProduct = async (productId: number): Promise<WBProduct | null> => {
    try {
        // Пример endpoint: карточки товаров (публичный, но без CORS)
        const response = await fetch(
            `${WB_PROXY_BASE}/cards/v1/detail?appType=1&curr=rub&dest=-1257786&spp=0&nm=${productId}`
        );

        if (!response.ok) throw new Error(`WB API error: ${response.status}`);

        const data = await response.json();

        // Парсим ответ (структура зависит от эндпоинта, адаптируем под наши нужды)
        if (data?.data?.products?.[0]) {
            const product = data.data.products[0];
            return {
                id: product.id,
                name: product.name || 'Без названия',
                brand: product.brand || 'Tishka Grishka',
                priceU: product.priceU || 0,
                salePriceU: product.salePriceU,
                images: product.images?.map((img: string) =>
                    `https://avatars.mds.yandex.net/get-mpic/${img}/orig`
                ) || [],
                description: product.description,
                rating: product.reviewRating,
                feedbacks: product.feedbacks
            };
        }
        return null;
    } catch (error) {
        console.error('Ошибка при получении товара:', error);
        return null;
    }
};

