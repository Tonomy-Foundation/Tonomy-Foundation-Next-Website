import { getEnvironment } from "./config";

export function gtag_report_conversion_book_discovery(url) {
    if (getEnvironment() === 'production') {
        var callback = function () {
            if (typeof (url) != 'undefined') {
                window.location = url;
            }
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
            if (typeof (url) != 'undefined') {
                window.location = url;
            }
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
            if (typeof (url) != 'undefined') {
                window.location = url;
            }
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
        var callback = function () {
            if (typeof (url) != 'undefined') {
                window.location = url;
            }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-11302960449/r9BZCI2i8OsYEMH61Y0q',
            'event_callback': callback
        });
        return false;
    }
}

export function gtag_report_conversion_join_discord(url) {
    if (getEnvironment() === 'production') {
        var callback = function () {
            if (typeof (url) != 'undefined') {
                window.location = url;
            }
        };
        gtag('event', 'conversion', {
            'send_to': 'AW-11302960449/jYj2CJCi8OsYEMH61Y0q',
            'event_callback': callback
        });
        return false;
    }
}
