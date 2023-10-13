import { BOOKING_LINK } from "../components/Home/MainBanner";
import { getEnvironment } from "./config";

export function gtag() {
    console.log('gtag()', arguments)
    dataLayer.push(arguments);
}

export function initializeGoogleTags() {
    window.dataLayer = window.dataLayer || [];

    gtag('js', new Date());
    gtag('config', 'AW-11302960449');
}

export function gtag_report_conversion_book_discovery(url) {
    if (getEnvironment() === 'production') {
        var callback = function () {
            window.open(BOOKING_LINK, "_blank");
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-11302960449/tDWDCISi8OsYEMH61Y0q',
            'event_callback': callback
        });
        return false;
    }
}

export function gtag_report_conversion_visit_whitepaper(url) {
    if (getEnvironment() === 'production') {
        var callback = function () {
            window.open("https://www.canva.com/design/DAFnktNOWKU/Ps1zXw3XICaEMiB0R4Ghkg/view", "_blank");
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-11302960449/3RQlCIei8OsYEMH61Y0q',
            'event_callback': callback
        });
        return false;
    }
}

export function gtag_report_conversion_read_developer_docs(url) {
    if (getEnvironment() === 'production') {
        var callback = function () {
            window.open("https://docs.tonomy.foundation", "_blank");
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-11302960449/-gMfCIqi8OsYEMH61Y0q',
            'event_callback': callback
        });
        return false;
    }
}

export function gtag_report_conversion_contact_us(url) {
    if (getEnvironment() === 'production') {
        gtag('event', 'conversion', {
            'send_to': 'AW-11302960449/r9BZCI2i8OsYEMH61Y0q',
        });
        return false;
    }
}

export function gtag_report_conversion_join_discord(url) {
    if (getEnvironment() === 'production') {
        var callback = function () {
            window.open("https://www.canva.com/design/DAFnktNOWKU/Ps1zXw3XICaEMiB0R4Ghkg/view", "_blank");
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-11302960449/jYj2CJCi8OsYEMH61Y0q',
            'event_callback': callback
        });
        return false;
    }
}
