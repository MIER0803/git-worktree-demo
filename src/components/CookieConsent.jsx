import { useState, useEffect } from 'react';

const STORAGE_KEY = 'salespilot-cookie-consent';

function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored !== 'accepted' && stored !== 'rejected') setVisible(true);
    }, []);

    const accept = () => {
        window.localStorage.setItem(STORAGE_KEY, 'accepted');
        setVisible(false);
    };

    const reject = () => {
        window.localStorage.setItem(STORAGE_KEY, 'rejected');
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-consent" role="dialog" aria-labelledby="cookie-consent-title" aria-describedby="cookie-consent-desc">
            <div className="cookie-consent__backdrop" aria-hidden="true" />
            <div className="cookie-consent__panel">
                <h2 id="cookie-consent-title" className="cookie-consent__title">
                    Cookie 使用說明
                </h2>
                <p id="cookie-consent-desc" className="cookie-consent__desc">
                    我們使用 Cookie 以提供最佳瀏覽體驗、記住您的偏好並分析流量。您可選擇接受全部或僅使用必要 Cookie。
                </p>
                <div className="cookie-consent__actions">
                    <button type="button" className="btn btn--outline btn--sm" onClick={reject}>
                        拒絕
                    </button>
                    <button type="button" className="btn btn--primary btn--sm" onClick={accept}>
                        接受
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;
