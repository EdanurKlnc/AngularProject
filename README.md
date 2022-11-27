# AngularProject
![angular](https://onerbilisim.com/wp-content/uploads/2021/09/Angular-logo.png)

Bu proje [Angular CLI](https://github.com/angular/angular-cli)  14.2.8. versiyonu ile oluşturulmuştur.

## Proje İçeriği
- Uygulama responsive tasarımı desteklemektedir.
- Kullanıcı uygulamaya üye olup giriş sağlayabilir.
- Ürün kartı bulunmaktadır. Kartın içeriğinde ürünün resmi, adı ve fiyatı bulunmaktadır.
- Kullanıcı ürüne tıkladığında ürün detay sayfasına gidilmektedir. 
- Ürün detayında; ürünün ismi, fiyatı ve açıklaması bulunmaktadır.

* Ürünlerin filtrelenmesi için; kategori seçeneği ve bir arama çubuğu oluşturulmuştur, anahtar kelimesinin ürün adında geçip geçmediğine bakılmaktadır.
* Reactive form yaklaşımı kullanılmıştır.
* Sayfa yönlendirmelerinde routing yöntemi kullanılmıştır.
* JSON, HTTPClient ve servisler kullanılmıştır.


### Json Sunucusunu Başlatın
Projeyi çalıştırdığınızda login sayfası açılmaktadır. Kullanıcı bilgileri sahte REST API'de tutulmaktadır. Kullanıcı kayıt etmek ve kullanıcı girişi için JSON sunucusunu başlatınız.

`json-server --watch db.json`

http://localhost:3000/signup adresine yönlendirilirsiniz. 

Detaylar için https://github.com/typicode/json-server sayfasını ziyaret ediniz.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
