import { EventEmitter } from "@angular/core"

export class ProductService {
    products = [
        { id: 1, name: 'Mini Etek', type: 'Alt', price: 74, color: 'Siyah', available: 'Stokta yok', image: '/assets/product/etek.jpeg', details:'Siyah mini etek.' },
        { id: 2, name: 'Polo Yaka ÇizgiliTriko Kazak.', type: 'Üst', price: 89, color: 'Siyah&Beyaz', available: 'Stokta var', image: '/assets/product/Kazak.jpeg', details:'Triko kumaş, çizgili kazak ' },
        { id: 3, name: 'Yüksek Bel Pantolon', type: 'Alt', price: 125, color: 'Siyah', available: 'Stokta yok', image: '/assets/product/Pantolon.jpeg', details:'Plazzo , önü dikişli pantolon.' },
        { id: 4, name: 'Damalı Unisex Hırka', type: 'Üst', price: 219, color: 'Siyah&Beyaz', available: 'Stokta var', image: '/assets/product/hırka.jpg', details:'aAnime Kuromi Siyah Damalı Hırka İle Benzersiz Gothic Stilini Yansıtır Ve Fark Yaratırsın. Touz Tekstil Ürünü Olan Bu Ürünü Üzerinden Çıkartmayacaksın Kalite Garantilidir. Ürün Özellikleri : 100% Akrilik, Triko Unisex Touz Marka Genç Modası Kalite Garantilidir Kolay Kombinlenir Sokak Stilidir.' },
        { id: 5, name: 'Yüksek Bel Palazzo Pantolon', type: 'Alt', price: 185, color: 'Bej', available: 'Stokta var', image: '/assets/product/p.jpg', details:'Mankenin üzerindeki 36 bedendir Ultra yüksel beldir çift pilelidir' },
        { id: 6, name: 'Şort Etek', type: 'Alt', price: 150, color: 'Siyah', available: 'Stokta var', image: '/assets/product/şe.jpg', details:'Mankenin üzerindeki ürün S/36 bedendir.74% Akrilik,12% Polyester,6% Pamuk,5% Viskoz,3% Yün, Dokuma Kumaş' },
        { id: 7, name: 'Bluz', type: 'Üst', price: 80, color: 'Bordo', available: 'Stokta var', image: '/assets/product/b.jpg', details:'Mankenin üzerindeki ürün S/36 bedendir..96% Polyester,4% Elastan, Örme Kumaş' },
        { id: 8, name: 'Mini Etek', type: 'Alt', price: 74, color: 'Siyah', available: 'Stokta yok', image: '/assets/product/etek.jpeg', details:'Siyah mini etek.' },
        { id: 9, name: 'Polo Yaka ÇizgiliTriko Kazak.', type: 'Üst', price: 89, color: 'Siyah&Beyaz', available: 'Stokta var', image: '/assets/product/Kazak.jpeg', details:'Triko kumaş, çizgili kazak ' },
        { id: 10, name: 'Yüksek Bel Pantolon', type: 'Alt', price: 125, color: 'Siyah', available: 'Stokta yok', image: '/assets/product/Pantolon.jpeg', details:'Plazzo , önü dikişli pantolon.' },
        { id: 11, name: 'Damalı Unisex Hırka', type: 'Üst', price: 219, color: 'Siyah&Beyaz', available: 'Stokta var', image: '/assets/product/hırka.jpg', details:'aAnime Kuromi Siyah Damalı Hırka İle Benzersiz Gothic Stilini Yansıtır Ve Fark Yaratırsın. Touz Tekstil Ürünü Olan Bu Ürünü Üzerinden Çıkartmayacaksın Kalite Garantilidir. Ürün Özellikleri : 100% Akrilik, Triko Unisex Touz Marka Genç Modası Kalite Garantilidir Kolay Kombinlenir Sokak Stilidir.' },
        { id: 12, name: 'Yüksek Bel Palazzo Pantolon', type: 'Alt', price: 185, color: 'Bej', available: 'Stokta var', image: '/assets/product/p.jpg', details:'Mankenin üzerindeki 36 bedendir Ultra yüksel beldir çift pilelidir' },
        { id: 13, name: 'Şort Etek', type: 'Alt', price: 150, color: 'Siyah', available: 'Stokta var', image: '/assets/product/şe.jpg', details:'Mankenin üzerindeki ürün S/36 bedendir.74% Akrilik,12% Polyester,6% Pamuk,5% Viskoz,3% Yün, Dokuma Kumaş' },
        { id: 14, name: 'Bluz', type: 'Üst', price: 80, color: 'Bordo', available: 'Stokta var', image: '/assets/product/b.jpg', details:'Mankenin üzerindeki ürün S/36 bedendir..96% Polyester,4% Elastan, Örme Kumaş' },


    ]


 
}    
