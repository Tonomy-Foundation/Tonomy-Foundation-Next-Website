import { getEnvironment } from './config';
import { initializeGoogleTags } from './googleTags';

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
    let containerId = 'Lj4VYEcS';
    if (getEnvironment() === 'staging') {
        containerId = 'Lj4VYEcS_staging_c2158c9fdd88f029cff13ded';
    } else if (getEnvironment() === 'development') {
        containerId = 'Lj4VYEcS_dev_8466b1cf90f83bb3339d2417';
    }

    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({ 'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start' });

    // Inject the above script into the head of the page if it is not there already
    injectScriptInHead('matomo', { async: true, src: `https://cdn.matomo.cloud/tonomy.matomo.cloud/container_${containerId}.js` });
}

// From Google Tags
// https://ads.google.com/aw/tagsettings?ocid=1404064964&euid=670195084&__u=3704246316&uscid=1404064964&__c=4633174436&authuser=0&subid=nl-nl-awhp-g-aw-c-home-signin%21o2-adshp-hv-q4-22
// TODO?? why is this different from the Google Ads one?

// From Google Ads
// https://ads.google.com/aw/tagsettings?ocid=1404064964&euid=670195084&__u=3704246316&uscid=1404064964&__c=4633174436&authuser=0&subid=nl-nl-awhp-g-aw-c-home-signin%21o2-adshp-hv-q4-22
async function injectGoogleTagManager() {
    if (getEnvironment() === 'production') {
        injectScriptInHead('google-tag-manager', {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=AW-11302960449',
        });
        initializeGoogleTags();
    }
}

function injectCookieYes() {
    if (getEnvironment() === 'production') {
        injectScriptInHead('cookieyes', { src: 'https://cdn-cookieyes.com/client_data/c5a48a66a801939ac8cc7e81/script.js' });
    }
}

export function injectAnalytics() {
    injectMatomoAnalytics();
    injectGoogleTagManager();
    injectCookieYes();
}