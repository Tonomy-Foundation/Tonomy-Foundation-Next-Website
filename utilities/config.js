export function getEnvironment() {
    if (window.location.origin === 'https://tonomy.io') {
        return 'production';
    } else if (window.location.origin === 'https://staging-website.tonomy.io') {
        return 'staging';
    } else if (window.location.origin === 'http://localhost:3000' || window.location.origin.endsWith('vercel.app')) {
        return 'development';
    } else {
        throw new Error('Unknown environment');
    }
}