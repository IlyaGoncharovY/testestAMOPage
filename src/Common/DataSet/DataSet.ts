import {phone1, telegram1, watsApp1} from "./UrlImg";

export type ContactsDataType = {
    href: string
    title: string
}

export type DataLogoType = {
    href: string
    style: { backgroundImage: string; }
}

export type BodyRightColumnDataType = {
    title: string
    bodyUp: string
    bodyDown: string
}

export type AfterColumnData = {
    title: string
}

export const ContactsData: ContactsDataType[] = [
    {href: "", title: "Услуги"},
    {href: "", title: "Виджеты"},
    {href: "", title: "Интеграции"},
    {href: "", title: "Кейсы"},
    {href: "", title: "Сертификаты"},
]

export const AboutTheCompanyData: ContactsDataType[] = [
    {href: "", title: "Партнёрская программа"},
    {href: "", title: "Вакансии"},
]

export const LeftColumnData: ContactsDataType[] = [
    {href: "", title: "Расчёт стоимости"},
    {href: "", title: "Услуги"},
    {href: "", title: "Виджеты"},
    {href: "", title: "Интеграции"},
    {href: "", title: "Наши клиенты"},
]

export const RightColumnData: ContactsDataType[] = [
    {href: "", title: "Кейсы"},
    {href: "", title: "Благодарственные письма"},
    {href: "", title: "Сертификаты"},
    {href: "", title: "Блог на Youtube"},
    {href: "", title: "Вопрос / Ответ"},
]

export const LogoContactData: DataLogoType[] = [
    {href: "", style: telegram1},
    {href: "", style: phone1},
    {href: "", style: watsApp1}
]

export const BodyRightColumnLeftData: BodyRightColumnDataType[] = [
    {title: "ВИДЖЕТЫ", bodyUp: "30 готовых", bodyDown: "решений"},
    {title: "SKYPE АУДИТ", bodyUp: "отдела продаж", bodyDown: "и CRM"},
]

export const BodyRightColumnRightData: BodyRightColumnDataType[] = [
    {title: "DASHBOARD", bodyUp: "с показателями", bodyDown: "вашего бизнеса"},
    {title: "35 ДНЕЙ", bodyUp: "использования", bodyDown: "CRM"},
]

export const AfterLeftColumn: AfterColumnData[] = [
    {title: "SKYPE АУДИТ"},
    {title: "DASHBOARD"},
]

export const AfterRightColumn: AfterColumnData[] = [
    {title: "30 ВИДЖЕТОВ"},
    {title: "МЕСЯЦ AMOCRM"},
]