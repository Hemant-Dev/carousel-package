/**
 * @description
 * @param {string , string} carouselId, carouselClass
 * @returns {HTMLDivElement}
 *  */
/**
 *
 * @param carouselData
 */
declare function initializeCarousel(carouselData: any[]): void;
declare const carouselData: {
    carouselClass: string;
    carouselId: string;
    slides: {
        id: string;
        imgSrc: string;
    }[];
}[];

export { carouselData, initializeCarousel };
