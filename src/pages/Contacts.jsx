import contact1 from '../assets/contacts/contact-1.jpg'
import contact2 from '../assets/contacts/contact-2.jpg'
import contact3 from '../assets/contacts/contact-3.jpg'
import contact4 from '../assets/contacts/contact-4.jpg'

function Contacts() {
  return (
    <main className="contacts">
      <h1>Контакты</h1>

      <section className="contact-info">
        <div>
          <h3>Адрес магазина</h3>
          <p>Санкт-Петербург, м. Площадь Восстания, ул. 2-я Советская, 7</p>
        </div>

        <div>
          <h3>Время работы</h3>
          <p>Пн–вс: с 11:00 до 19:00</p>
        </div>

        <div>
          <h3>Телефон</h3>
          <p>+7 (900) 123-45-67</p>
        </div>

        <div>
          <h3>Email</h3>
          <p>hello@react-store.example</p>
        </div>
      </section>

      <section className="how-to-find">
        <h2>Как нас найти</h2>
        <ol>
          <li>Доехать до станции метро «Площадь Восстания».</li>
          <li>Найти бизнес-центр на 2-й Советской улице.</li>
          <li>Подняться на первый этаж и обратиться к администратору.</li>
        </ol>
      </section>

      <section className="contact-photos">
        <h2>Фотографии места</h2>
        <div>
          <img src={contact1} alt="Фасад бизнес-центра Сенатор" />
          <img src={contact2} alt="Входная зона бизнес-центра" />
          <img src={contact3} alt="Зона оформления заказов" />
          <img src={contact4} alt="Зона ожидания" />
        </div>
      </section>
    </main>
  )
}

export default Contacts
