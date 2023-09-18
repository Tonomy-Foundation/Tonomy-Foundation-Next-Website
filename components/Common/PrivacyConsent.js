import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TagManager from 'react-gtm-module';

// Matomo settings variable
// https://developer.matomo.org/guides/tracking-javascript-guide
let _paq = [];
if (typeof window !== 'undefined') {
    if (window._paq) {
        _paq = window._paq;
    }
    window._paq = _paq;
}

function injectMatomoAnalytics() {
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    // https://developer.matomo.org/guides/tracking-javascript-guide
    _paq.push(['requireCookieConsent']);
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);

    (function () {
        const u = "https://tonomy.matomo.cloud/";
        _paq.push(['setTrackerUrl', u + 'matomo.php']);
        _paq.push(['setSiteId', '1']);

        const d = document;
        const g = d.createElement('script');
        const s = d.getElementsByTagName('script')[0];

        g.async = true;
        g.src = '//cdn.matomo.cloud/tonomy.matomo.cloud/matomo.js';
        s.parentNode.insertBefore(g, s);
    })();
}

function acceptMatomoCookies() {
    // https://developer.matomo.org/guides/tracking-consent
    _paq.push(['setCookieConsentGiven']);
    _paq.push(['rememberCookieConsentGiven']);
}

function acceptGoogleCookies() {
    // https://developers.google.com/tag-platform/tag-manager/templates/consent-apis#consent_state_and_consent_types
    TagManager.dataLayer({
        ad_storage: 'granted',
        analytics_storage: 'granted',
    });
}

function rejectGoogleCookies() {
    // https://developers.google.com/tag-platform/tag-manager/templates/consent-apis#consent_state_and_consent_types
    TagManager.dataLayer({
        ad_storage: 'denied',
        analytics_storage: 'denied',
    });
}

function rejectMatomoCookies() {
    // https://developer.matomo.org/guides/tracking-consent
    _paq.push(['forgetCookieConsentGiven']);
}

function injectGoogleTagManager() {
    // Disable ad_storage and analytics_storage layer to disable cookies
    // https://developers.google.com/tag-platform/tag-manager/templates/consent-apis#consent_state_and_consent_types
    // https://support.google.com/tagmanager/answer/10718549?hl=en
    TagManager.initialize({
        gtmId: 'G-736JT4GEW4',
        dataLayer: {
            ad_storage: 'denied',
            analytics_storage: 'denied',
        }
    })
}

function injectAnalytics() {
    if (process.env.NODE_ENV === 'production' && window.location.origin === 'https://tonomy.io') {
        injectMatomoAnalytics();
        injectGoogleTagManager();
    }
}

const PrivacyConsent = () => {
    const page = typeof window !== "undefined" ? window.location.pathname : '';
    const [show, setShow] = useState(false);



    function onAccept() {
        localStorage.setItem('cookieConsent', 'true');
        acceptMatomoCookies();
        acceptGoogleCookies();
        setShow(false);
    }

    function onReject() {
        localStorage.setItem('cookieConsent', 'false');
        rejectMatomoCookies();
        rejectGoogleCookies();
        setShow(false);
    }

    useEffect(() => {
        console.log("_paq", _paq);
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (cookieConsent !== 'true' && cookieConsent !== 'false') {
            if (page !== '/privacy-notice/') {
                setShow(true);
            } else {
                setShow(false);
            }
        }

        injectAnalytics();
    }, [page]);

    return (
        <>
            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Your Privacy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>We use cookies on our website. These are used to monitor the effectiveness of our Google Ads.</p>

                    <p>
                        <Link href="/privacy-notice">View Privacy Notice</Link>
                    </p>

                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" onClick={onAccept}>Accept Cookies</Button>
                        <Button variant="secondary" size="lg" onClick={onReject}>Reject All Cookies</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default PrivacyConsent;