import puppeteer from 'puppeteer';
import getPort from 'get-port';
import execa from 'execa';
import delay from 'delay';

export function withPage(debug = false) {
    return async (t, run) => {
        const port = await getPort();
        const browser = await puppeteer.launch({
            headless: !debug,
            devtools: debug,
            defaultViewport: null,
        });
        const page = await browser.newPage();

        execa('yarn', ['start'], {
            env: {
                PORT: port,
            },
        });

        try {
            await delay(2000);
            await page.goto(`http://0.0.0.0:${port}`, {
                waitUntil: 'load',
            });
            await run(t, page);
        } catch {
        } finally {
            await page.close();
            await browser.close();
        }
    };
}

export function getHelpers(page) {
    async function getValidationMessages() {
        return page.$$eval('.formv-messages li', items => {
            return Array.from(items).map(item => item.innerHTML);
        });
    }

    async function includesClassName(selector, className) {
        return page.evaluate(
            ({ selector, className }) => {
                const element = document.querySelector(selector);
                return element.classList.contains(className);
            },
            { selector, className },
        );
    }

    return { getValidationMessages, includesClassName };
}
