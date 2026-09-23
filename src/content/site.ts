// ============================================================
//  ВЕСЬ КОНТЕНТ САЙТА — В ЭТОМ ФАЙЛЕ
//  Меняешь текст здесь → он меняется на сайте.
//  Скрины: положи файл с нужным именем в public/media/projects/<slug>/
//  (.png, .jpg или .webp) — он появится на сайте сам. Нет файла — будет заглушка.
// ============================================================

export type Media = { src: string | null; alt: string; caption?: string };
export type Screen = Media & { device: 'phone' | 'browser' | 'scheme' };
export type Block = { title: string; text: string };
export type StackLayer = { layer: string; items: string[] };

export type Project = {
  slug: string;
  title: string;
  kind: string;               // тип проекта одной строкой
  status: string;             // коммерческий / свой / учебный
  commercial: boolean;
  summary: string;            // текст карточки на главной (1–2 предложения)
  lead: string;               // вступление на странице кейса
  tags: string[];             // 4–6 технологий для карточки
  cover: Screen;              // что показываем на карточке
  links: { label: string; url: string }[];
  note?: string;              // пометка вроде «код под NDA»
  role: string;
  roleList: string[];
  stack: StackLayer[];
  features: string[];
  architecture: Block[];
  decisions: Block[];
  debugging: Block[];
  screens: Screen[];          // пустой список — раздела «Экраны» не будет
  scheme?: string[];          // шаги схемы, если вместо скрина показываем схему (device: 'scheme')
};

export const site = {
  // true — сайт закрыт от поисковиков (noindex). В конце работы ставим false.
  demo: true,
  url: 'https://krishtopova.vercel.app',
  lang: 'ru',

  person: {
    firstName: 'Ксения',
    lastName: 'Криштопова',
    fullName: 'Ксения Криштопова',
    initials: 'КК',
    role: 'Python-разработчица',
    tagline: 'Пишу backend на Python, делаю сайты и Telegram-ботов. Довожу проект от модели данных до работающего сервера.',
    status: 'Открыта к практике',
    practice: '21 января – 28 апреля 2027',
  },

  seo: {
    title: 'Ксения Криштопова — Python-разработчица: backend, сайты, Telegram-боты',
    description:
      'Портфолио Ксении Криштоповой: backend на Django и FastAPI, сайты на Astro и GSAP, Telegram-боты и Mini Apps. Ищу производственную практику с 21 января по 28 апреля 2027.',
    ogImage: '/og.png',
  },

  // Главная кнопка — одинаковая по всему сайту
  cta: {
    label: 'Написать в Telegram',
    url: 'https://t.me/pkxgdt',
  },

  // Резюме: положи файл в public/resume.pdf и впиши '/resume.pdf'. Пока null — кнопки нет.
  resume: null as string | null,

  contacts: {
    telegram: { label: '@pkxgdt', url: 'https://t.me/pkxgdt' },
    email: { label: 'krishtpvapractika23@gmail.com', url: 'mailto:krishtpvapractika23@gmail.com' },
  },

  nav: [
    { label: 'Работы', href: '/#works' },
    { label: 'Навыки', href: '/#skills' },
    { label: 'Обо мне', href: '/#about' },
    { label: 'Контакты', href: '/#contact' },
  ],

  // Бегущая строка под первым экраном
  marquee: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'aiogram', 'Telegram Mini Apps', 'Astro', 'GSAP', 'JavaScript', 'LLM API', 'nginx'],

  // Короткие факты — только правда
  facts: [
    { value: '1+', label: 'год в коммерческой и своей разработке' },
    { value: '4', label: 'курс, «Разработка и сопровождение ПО»' },
    { value: '3', label: 'проекта работают в продакшене' },
  ],

  about: {
    title: 'Обо мне',
    paragraphs: [
      'Занимаюсь разработкой больше года: делаю реальные коммерческие проекты и свои. Основа — backend на Python: Django, Django REST Framework и FastAPI, PostgreSQL, Redis, Celery, API и интеграции.',
      'Делаю и фронтенд: современные сайты на Astro с GSAP, интерфейсы на HTML, CSS и JavaScript. Пишу Telegram-ботов и Mini Apps, парсеры и автоматизацию работы с данными, сама разворачиваю проекты на сервере.',
      'Внедряю AI в реальный функционал: разбор смет, консультанты, обработка текстов. Умею быстро разбираться в новом, искать причину ошибки, а не гадать, и доводить задачу до рабочего результата.',
    ],
    study: 'Учусь на 4 курсе по специальности «Разработка и сопровождение программного обеспечения».',
    practiceText: 'Ищу место для производственной практики с 21 января по 28 апреля 2027 года.',
  },

  skills: [
    { group: 'Backend', items: ['Python', 'Django', 'Django REST Framework', 'FastAPI', 'ООП', 'REST API', 'Celery'] },
    { group: 'Базы данных', items: ['PostgreSQL', 'SQLite', 'SQL', 'Redis'] },
    { group: 'Frontend', items: ['Astro', 'GSAP', 'JavaScript', 'HTML', 'CSS'] },
    { group: 'Telegram', items: ['Telegram-боты', 'Mini Apps', 'aiogram', 'Bot API'] },
    { group: 'Данные и AI', items: ['Парсинг', 'Обработка данных', 'LLM через API', 'Промпт-инжиниринг'] },
    { group: 'Сервер', items: ['Linux VPS', 'nginx', 'SSL', 'systemd', 'cron', 'Деплой'] },
  ],

  // Другие сайты для SV House — показываются под работами строкой ссылок
  moreSites: [
    { label: 'Сайт компании SV House', url: 'https://svhouse-api.by' },
    { label: 'HomeCare', url: 'https://homecare.svhouse-api.by' },
    { label: 'Svidno House', url: 'https://svidno.svhouse-api.by' },
  ],

  // Наброски и учебные проекты. Пока пусто — блок на сайте не показывается.
  // Пример: { title: 'Бот-напоминалка', text: 'Учебный бот на aiogram', tags: ['aiogram', 'SQLite'] }
  experiments: [] as { title: string; text: string; tags: string[] }[],

  projects: [
    {
      slug: 'sv-house',
      title: 'SV House',
      kind: 'Telegram Mini App, бот и backend',
      status: 'Коммерческий, в работе',
      commercial: true,
      summary:
        'Система контроля стройки и ремонта: кабинет заказчика в Telegram, бот для всей бригады и AI-консультант в Instagram.',
      lead:
        'Заказчик видит всё, что происходит на объекте, и не зависит от бригады: этапы, бюджет, фотоотчёты, задачи и проблемы собраны в одном кабинете внутри Telegram. Отдельное направление HomeCare — обслуживание дома, участка и клининг.',
      tags: ['Django', 'PostgreSQL', 'aiogram', 'Mini App', 'FastAPI', 'LLM'],
      cover: { src: '/media/projects/sv-house/00-cover', alt: 'Кабинет клиента SV House в Telegram', device: 'phone' },
      links: [
        { label: 'Сайт компании', url: 'https://svhouse-api.by' },
        { label: 'HomeCare', url: 'https://homecare.svhouse-api.by' },
      ],
      note: 'Код закрыт: коммерческий проект',
      role: 'Разработка полностью, одна',
      roleList: [
        'Модели данных и API на Django',
        'Админ-панель для менеджеров',
        'Многоролевой бот на aiogram',
        'Интерфейс Mini App на HTML, CSS и JS',
        'AI-функции и промпты',
        'Деплой, nginx, SSL, отладка на проде',
      ],
      stack: [
        { layer: 'Backend', items: ['Django', 'Gunicorn + Uvicorn', 'aiogram', 'FastAPI'] },
        { layer: 'Frontend', items: ['Telegram Mini App', 'HTML', 'CSS', 'JavaScript'] },
        { layer: 'Данные', items: ['PostgreSQL', 'Redis'] },
        { layer: 'Интеграции', items: ['Telegram Bot API', 'SendPulse', 'OpenRouter'] },
        { layer: 'Сервер', items: ['Ubuntu VPS', 'nginx', "Let's Encrypt", 'cron'] },
      ],
      features: [
        'Кабинет клиента: объект, этапы, фотоотчёты, задачи, проблемы, бюджет и команда',
        'AI-чат по смете с поиском цен на стройматериалы по нескольким сайтам',
        'Раздел «Обслуживание»: подписка на услуги HomeCare, задачи с обязательным фотоотчётом и напоминаниями',
        'Бот для пяти ролей: мастер, бригадир, технадзор, бухгалтер, менеджер',
        'AI-консультант в Instagram: отвечает по реальным тарифам и сам решает, когда позвать менеджера',
        'Уведомления о просроченных задачах, превышении бюджета и новых заявках',
        'Интерфейс на русском и английском',
      ],
      architecture: [
        { title: 'Django', text: 'API для Mini App и админка. Работает через Gunicorn с Uvicorn-воркерами.' },
        { title: 'Telegram-бот', text: 'Отдельный процесс на aiogram для всех ролей команды.' },
        { title: 'Поиск цен', text: 'Отдельный сервис на FastAPI, ищет стройматериалы по сайтам.' },
        { title: 'Instagram-модуль', text: 'Изолированное Django-приложение: свои модели и маршруты, общий AI-клиент.' },
        { title: 'PostgreSQL и Redis', text: 'Основные данные и кэш.' },
        { title: 'nginx', text: 'Разводит поддомены: кабинет, API и админку.' },
      ],
      decisions: [
        {
          title: 'Новый модуль — без нового сервера',
          text: 'AI-консультант для Instagram вынесен в отдельное Django-приложение: код не смешан с основным, а сервер и AI-клиент общие.',
        },
        {
          title: 'Маркеры вместо JSON',
          text: 'Решение «передать менеджеру» модель отдаёт маркером в тексте. На практике это надёжнее, чем каждый раз требовать от неё валидный JSON.',
        },
        {
          title: 'Страховка поверх промпта',
          text: 'Если модель нарушит инструкцию — добавит Markdown, обрывки скобок или http вместо https, — код сам чистит ответ до того, как его увидит клиент.',
        },
        {
          title: 'Контекст диалога задаёт код',
          text: 'Код явно говорит модели, первое это сообщение или продолжение. Так ушла проблема повторного приветствия.',
        },
        {
          title: 'Функции включаются по объекту',
          text: 'Флажки доступа на уровне участника проекта: менеджер включает контроль, смету и обслуживание отдельно для каждого объекта.',
        },
      ],
      debugging: [
        {
          title: 'Тесты проходят, живые сообщения — нет',
          text: 'Связка SendPulse → сервер работала на тестовых вызовах и молчала на реальных. Проверила путь через свой Django-сервер и через n8n; в n8n причина оказалась в том, что опубликованная версия цепочки не подхватывала правки без повторной публикации.',
        },
        {
          title: 'Сервер игнорировал новое значение',
          text: 'Адрес Mini App в коде менялся, а на проде оставался старый. Нашла, что значение из переменных окружения имеет приоритет над значением по умолчанию в коде.',
        },
        {
          title: 'Падение из-за одной скобки',
          text: 'Форматирование промпта падало из-за одиночной фигурной скобки — она стояла в самой инструкции «не добавляй фигурные скобки».',
        },
      ],
      screens: [
        { src: '/media/projects/sv-house/01-object', alt: 'Главная страница объекта в кабинете', caption: 'Объект', device: 'phone' },
        { src: '/media/projects/sv-house/02-photo-reports', alt: 'Вкладка фотоотчётов', caption: 'Фотоотчёты', device: 'phone' },
        { src: '/media/projects/sv-house/03-stages', alt: 'Этапы работ на объекте', caption: 'Этапы', device: 'phone' },
        { src: '/media/projects/sv-house/04-budget', alt: 'Бюджет объекта', caption: 'Бюджет', device: 'phone' },
        { src: '/media/projects/sv-house/05-prices', alt: 'Анализ цен на материалы', caption: 'Анализ цен', device: 'phone' },
      ],
    },

    {
      slug: 'mayak',
      title: 'Маяк',
      kind: 'Telegram-бот и автоматизация',
      status: 'Свой проект, работает',
      commercial: false,
      summary:
        'Бот сам находит местные новости, AI переписывает их в посты, а модератор публикует в районные каналы одной кнопкой.',
      lead:
        'Сеть гиперлокальных новостных каналов: посёлки Минского района, районы Минска и отдельный тревел-канал о Беларуси. Бот снимает ручную работу — поиск, написание и публикацию новостей.',
      tags: ['Python', 'Bot API', 'SQLite', 'BeautifulSoup', 'LLM', 'VPS'],
      cover: { src: null, alt: 'Схема работы бота Маяк', device: 'scheme' },
      scheme: ['Сайты и Telegram-каналы', 'Парсеры собирают новости', 'AI пишет пост', 'Модератор одобряет', 'Публикация в районные каналы'],
      links: [],
      note: 'Код закрыт: приватный репозиторий',
      role: 'Разработка и запуск, одна',
      roleList: [
        'Парсеры сайтов и Telegram-каналов',
        'AI-обработка текстов',
        'Бот модерации и меню для читателей',
        'База данных и защита от дублей',
        'Деплой на VPS: systemd и cron',
      ],
      stack: [
        { layer: 'Backend', items: ['Python 3', 'свой long-polling поверх Bot API', 'requests'] },
        { layer: 'Данные', items: ['SQLite', 'BeautifulSoup'] },
        { layer: 'Интеграции', items: ['Telegram Bot API', 'OpenRouter', 'Open-Meteo'] },
        { layer: 'Сервер', items: ['VPS', 'systemd', 'cron'] },
      ],
      features: [
        'Сбор новостей с сайтов и Telegram-каналов по многим районам сразу',
        'Защита от дублей и от «наводнения» старыми постами при подключении нового источника',
        'AI переписывает новость в пост с хэштегами и следит за лимитом длины Telegram',
        'Модерация кнопками: опубликовать, изменить, отклонить, выбрать несколько каналов',
        'Ручные посты с несколькими фото, видео и GIF',
        'Меню читателя: список каналов, отправка своей новости, конфиденциальность',
        'Ежедневная погода по каждому району',
        'Тревел-канал: AI с веб-поиском пишет тизер, подробности раскрываются по кнопке',
      ],
      architecture: [
        { title: 'Оркестратор', text: 'Запускается по расписанию, собирает новости и передаёт дальше.' },
        { title: 'Парсеры', text: 'Свой модуль под каждый тип источника: сайты и Telegram-каналы.' },
        { title: 'AI-редактор', text: 'Переписывает текст в пост, для тревел-постов ищет факты в сети.' },
        { title: 'База', text: 'SQLite: новости, статусы, источники.' },
        { title: 'Бот модерации', text: 'Работает постоянно как системная служба, публикует в каналы.' },
        { title: 'Конфиг районов', text: 'Все районы и их источники описаны в одном месте.' },
      ],
      decisions: [
        {
          title: 'Двойная публикация невозможна',
          text: 'Вместо «проверить статус, потом обновить» — один SQL-запрос UPDATE … WHERE status != published. Два модератора не опубликуют пост дважды, даже нажав одновременно.',
        },
        {
          title: 'Обход блокировки картинок',
          text: 'Когда Telegram не может сам скачать фото по ссылке, бот скачивает файл с браузерными заголовками и загружает готовые байты.',
        },
        {
          title: 'Одна статья — десятки мест',
          text: 'Парсер разбирает большую статью-подборку на отдельные места, каждое со своим текстом и фото из реальной вёрстки.',
        },
        {
          title: 'Baseline по категориям',
          text: 'Новая категория у старого источника не выливает в очередь всю свою историю как «свежие новости».',
        },
      ],
      debugging: [
        {
          title: 'Пропадали фото',
          text: 'Похожая логика сохранения жила в двух скриптах, баг был в одном. Нашла по постам без картинок, исправила в обоих местах.',
        },
        {
          title: 'AI выдумывал подписи к фото',
          text: 'Фраза «добавь эти фото» уходила в модель как инструкция к тексту, и она дописывала несуществующие описания. Разделила фото-часть и текстовую до отправки в AI.',
        },
        {
          title: '«Message is too long»',
          text: 'Кнопка «Подробнее» падала на длинных текстах. Нашла по логам, добавила обрезку по границе предложения — без разрыва слова или ссылки.',
        },
      ],
      screens: [],
    },

    {
      slug: 'svidno',
      title: 'Svidno House',
      kind: 'Инвестиционный лендинг',
      status: 'Коммерческий, опубликован',
      commercial: true,
      summary:
        'Сайт для продажи загородного комплекса у воды: калькулятор выручки, галерея с фильтрами, карта и честные оговорки для покупателя.',
      lead:
        'Три строения на берегу пруда ищут покупателя, который доведёт их до готового бизнеса. Сайт объясняет инвестору, что он покупает, и показывает экономику проекта.',
      tags: ['Лендинг', 'Адаптив', 'Калькулятор', 'Галерея'],
      cover: { src: '/media/projects/svidno/00-cover', alt: 'Первый экран сайта Svidno House', device: 'browser' },
      links: [{ label: 'Открыть сайт', url: 'https://svidno.svhouse-api.by' }],
      role: 'Разработка сайта',
      roleList: ['Вёрстка и адаптив', 'Интерактив: калькулятор, галерея, окно связи', 'SEO и превью для соцсетей'],
      stack: [],
      features: [
        'Калькулятор валовой выручки с тремя сценариями и формулами',
        'Галерея из реальных фото с фильтрами по категориям и просмотрщиком',
        'Карта загружается только по клику — без лишних cookie',
        'Окно связи с выбором канала вместо формы',
        'Честный блок «проверить до покупки»',
      ],
      architecture: [],
      decisions: [],
      debugging: [],
      screens: [
        { src: '/media/projects/svidno/01-hero', alt: 'Первый экран', caption: 'Первый экран', device: 'browser' },
        { src: '/media/projects/svidno/02-economy', alt: 'Калькулятор выручки', caption: 'Экономика проекта', device: 'browser' },
        { src: '/media/projects/svidno/03-mobile', alt: 'Мобильная версия', caption: 'Телефон', device: 'phone' },
      ],
    },
  ] as Project[],
};

export const getProject = (slug: string) => site.projects.find((p) => p.slug === slug);
