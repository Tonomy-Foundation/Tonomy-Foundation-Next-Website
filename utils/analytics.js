import { getEnvironment } from './config';

function injectScriptInHead(id, _script) {
    const script = document.getElementById(id);
    if (!script) {
        const script = document.createElement('script');
        script.id = id;
        script.type = 'text/javascript';
        if (_script.async) script.async = true;
        if (_script.src) script.src = _script.src;
        if (_script.innerHTML) script.innerHTML = _script.innerHTML;
        if (_script.onload) script.onload = _script.onload;
        document.head.appendChild(script);
    }
}

// From Matomo Cloud
// https://tonomy.matomo.cloud/index.php?module=TagManager&action=dashboard&idContainer=Lj4VYEcS&idSite=1&period=day&date=yesterday
function injectMatomoAnalytics() {
    let containerId = 'RXRDLtp6';
    if (getEnvironment() === 'staging') {
        containerId = 'RXRDLtp6_staging_26602f4a5a44c919cf77fe34';
    } else if (getEnvironment() === 'development') {
        containerId = 'RXRDLtp6_dev_cad796ebfa71c1b0b5f26c1c';
    }

    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({ 'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start' });

    // Inject the above script into the head of the page if it is not there already
    injectScriptInHead('matomo', { async: true, src: `https://cdn.matomo.cloud/tonomy.matomo.cloud/container_${containerId}.js` });
}

function injectCookieYes() {
    if (getEnvironment() === 'production') {
        injectScriptInHead('cookieyes', { src: 'https://cdn-cookieyes.com/client_data/6d04ffe6c90654e0d3d29b73/script.js' });
    }
}

export function injectAnalytics() {
    injectMatomoAnalytics();
    injectCookieYes();
}