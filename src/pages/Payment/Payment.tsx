import styles from './Payment.module.scss'

import { Layout } from '~/shared'

export const Payment = () => {
  return (
    <>
      <Layout>
        <div className={styles.page}>
          <div className={styles.payment_wrapper}>
            <h1 className={styles.page_title}>Оплата</h1>
            <ul className={styles.payment_types}>
              <li className={styles.payment_type}>
                <div className={styles.payment_image_wrapper}>
                  <img
                    src="https://cdn.farfor.ru/media/content/payment/types/online_o9tid00.png"
                    alt="payment image"
                    className={styles.payment_image}
                  />
                </div>
                <div className={styles.payment_text}>
                  <div className={styles.payment_title}>Банковской картой онлайн*</div>
                  <div className={styles.payment_description}>
                    Мы принимаем VISA, Mastercard, МИР. Также внедряем Apple Pay и Google Pay**
                  </div>
                </div>
              </li>
              <li className={styles.payment_type}>
                <div className={styles.payment_image_wrapper}>
                  <img
                    src="https://cdn.farfor.ru/media/content/payment/types/terminal.png"
                    alt="payment image"
                    className={styles.payment_image}
                  />
                </div>
                <div className={styles.payment_text}>
                  <div className={styles.payment_title}>Оплата картой курьеру*</div>
                  <div className={styles.payment_description}>
                    Курьер приедет с терминалом. Мы принимаем VISA, Mastercard, МИР
                  </div>
                </div>
              </li>
              <li className={styles.payment_type}>
                <div className={styles.payment_image_wrapper}>
                  <img
                    src="https://cdn.farfor.ru/media/content/payment/types/cash_Hlm0tfO.png"
                    alt="payment image"
                    className={styles.payment_image}
                  />
                </div>
                <div className={styles.payment_text}>
                  <div className={styles.payment_title}>Наличными курьеру</div>
                  <div className={styles.payment_description}>
                    Если вы указали в корзине, что необходима сдача, курьер приедет с нужной суммой
                  </div>
                </div>
              </li>
            </ul>
            <ul className={styles.attentions}>
              <li className={styles.attention}>
                <div className={styles.stars}>
                  <img
                    src="https://lipetsk.farfor.ru/_nuxt/img/star-symbol.e8d1eb3.svg"
                    alt="star image"
                    className={styles.star}
                  />
                </div>
                <span className={styles.description}>
                  Оплата картой через терминал курьеру или онлайн может быть не во всех городах. Доступные варианты
                  оплаты вы сможете выбрать в корзине
                </span>
              </li>
              <li className={styles.attention}>
                <div className={styles.stars}>
                  <img
                    src="https://lipetsk.farfor.ru/_nuxt/img/star-symbol.e8d1eb3.svg"
                    alt="star image"
                    className={styles.star}
                  />
                  <img
                    src="https://lipetsk.farfor.ru/_nuxt/img/star-symbol.e8d1eb3.svg"
                    alt="star image"
                    className={styles.star}
                  />
                </div>
                <span className={styles.description}>
                  При отмене заказа с оплатой онлайн, деньги возвращаются на ваш счёт в течение 14 дней. Такие сроки
                  устанавливаются банком
                </span>
              </li>
            </ul>
            <div className={styles.warnings}>
              <img
                src="https://cdn.farfor.ru/media/content/payment/warnings/warning.png"
                alt="warning"
                className={styles.warning_imаgе}
              />
              <div className={styles.warning_text}>
                <h2 className={styles.warning_title}>Осторожно - мошенники!</h2>
                <div className={styles.warning_description}>
                  <h5 className={styles.warning_little}> Мы не принимаем заказы в соцсетях </h5>
                  Не переводите деньги посторонним людям, которые выдают себя за менеджеров FARFOR в соцсетях!
                </div>
              </div>
            </div>
            <div className={styles.delivery_info__html}>
              <h4 className={styles.h4}>Порядок проведения операций с использованием карт в интернет-магазинах</h4>
              <h5 className={styles.h5}>1. Перечень карт</h5>
              <p className={styles.text}>Указан выше, в данном разделе в пункте «Банковской картой».</p>
              <h5 className={styles.h5}>2. Контактные телефоны</h5>
              <p className={styles.text}>Поддержка по вопросам работы программного и аппаратного обеспечения СПЭП:</p>
              <div className={styles.phone}>
                <a href="tel:+79631369222">
                  <img src="https://lipetsk.farfor.ru/phone24.png" alt="phone icon" className={styles.phone_img} />
                  +7 (963) 13-69-222
                </a>
              </div>
              <p>Телефоны банка (решение организационных, финансовых и иных вопросов):</p>
              <div className={styles.phone}>
                <a href="tel:+74955005550" className={styles.phone}>
                  <img src="https://lipetsk.farfor.ru/phone24.png" alt="phone icon" className={styles.phone_img} />
                  +7 (495) 500-55-50
                </a>
              </div>
              <p className={styles.text}>
                Держатель карты обращается на сайт Интернет-магазина и формирует заказ наоплату товара/услуг,
                подтверждает условия оформления заказа (наименование товаров, способ доставки, выбор средства оплаты,
                сумма платежа) и выбирает в качестве средства оплаты банковскую карту.
              </p>
              <p className={styles.text}>
                Проведение операций оплаты товаров/услуг с использованием банковских карт в сети Интернет осуществляется
                с применением 3DSecure технологий.
              </p>
              <p className={styles.text}>
                Интернет-магазин обрабатывает заказ и создает запрос в СПЭП на регистрацию заказа Держателя карты. В
                запросе Интернет-магазина передается набор данных о заказе–описание заказа, сумма, обратные адреса, на
                которые необходимо возвращать Держателя карты в случае успешного и в случае неуспешного платежа, и др. В
                случае успешной регистрации заказа СПЭП возвращает уникальный номер заказа в Интернет-магазин.
              </p>
              <p className={styles.text}>
                Интернет-магазин осуществляет переадресацию Держателя карты на платежную страницу СПЭП, на которой
                отображаются параметры платежа, также предлагается ввести реквизиты карты. Держатель карты выбирает тип
                карты, которой он будет расплачиваться, и вводит информацию о параметрах своей карты:
              </p>
              <ul className={styles.list}>
                <li className={styles.list_item}>тип карты;</li>
                <li className={styles.list_item}>номер карты;</li>
                <li className={styles.list_item}>дату окончания срока действия карты;</li>
                <li className={styles.list_item}>имя и фамилию, как указано на карте;</li>
                <li className={styles.list_item}>начения CVC2 или CVV2;</li>
                <li className={styles.list_item}>
                  подтверждает свое согласие оплатить заказ вводом специального пароля. Специальный пароль представляет
                  собой цифровую/буквенно-цифровую последовательность, однозначно идентифицирующую клиента как Держателя
                  карты. Проверка специального пароля обеспечивается банком-эмитентом.
                </li>
              </ul>
              <p>
                Провайдер услуг проверяет корректность формата вводимых параметров карты и осуществляет дополнительные
                процедуры аутентификации Держателя карты в соответствии с международными стандартами (3DSecure) и
                передает запрос на авторизацию операции в Банк.
              </p>
              <p>
                Банк проверяет право Интернет-магазина провести операцию в соответствии с регистрацией и проводит
                авторизацию операций в установленном соответствующими международными платежными системами порядке.
              </p>
              <p>
                При получении отрицательного результата авторизации Банк отправляет уведомление об отказе в СПЭП,
                который, в свою очередь, передает данную информацию Интернет-магазину и Держателю карты с указанием
                причин отказа.
              </p>
              <p>
                При получении положительного результата авторизации Банк передает в СПЭП подтверждение положительного
                результата авторизации операции. СПЭП одновременно передает подтверждения положительного результата
                проводимой авторизации операции в Интернет-магазин и Держателю карты.
              </p>
              <p>
                После получения подтверждения о положительном результате авторизации Интернет-магазин оказывает услугу
                (осуществляет работу, отпускает товар) Держателю карты.
              </p>
              <p>
                Обработка успешно авторизованных операций осуществляется автоматически не позднее следующего рабочего
                дня за днем совершения операции
              </p>

              <h5>3. Отмена операции оплаты товаров/услуг в сети Интернет</h5>
              <p>
                В случае если после проведения операции оплаты товара/услуг с использованием карты в сети Интернет
                возникла необходимость ее отмены (Держатель карты отказался от заказа и т.п.) Интернет-магазин может
                провести отмену операции. Отмена операции осуществляется до проведения Банком процедуры закрытия дня(до
                23:59 часов Московского времени дня совершения операции) в соответствии с «Руководством по использованию
                аппаратно-программного комплекса электронной коммерции».
              </p>
              <p>
                Для отмены операции после проведения Банком процедуры закрытия дня необходимо заполнить «Заявку на
                отмену операции» по форме Приложения №5 к настоящему Договору и предоставить ее в Банк.
              </p>
              <h4>Описание процесса передачи данных</h4>
              <p>
                Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платежный шлюз ПАО СБЕРБАНК.
                Соединение с платежным шлюзом и передача информации осуществляется в защищенном режиме с использованием
                протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения
                интернет-платежей Verified By Visa или MasterCard SecureCode, для проведения платежа также может
                потребоваться ввод специального пароля. Настоящий сайт поддерживает 256-битное шифрование.
                Конфиденциальность сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК. Введенная информация
                не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ.
                Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платежных
                систем МИР, Visa Int. и MasterCard Europe Sprl.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
