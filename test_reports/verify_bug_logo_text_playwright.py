"""Focused Playwright verification for the reported About/Meet Us text and logo bug.

Run in the same preview environment with Playwright installed. This mirrors the
browser automation executed by the testing agent.
"""

from playwright.async_api import async_playwright


BASE_URL = "https://koodh-digital.preview.emergentagent.com"


EXPECTED_TITLES = [
    "Made to remember",
    "We fit your brand",
    "Bringing the energy",
    "Always on time, there where it hits",
]

OLD_TERMS = [
    "Made to move",
    "On-brand, always",
    "Live energy",
    "Fast & reliable",
    "Thomas More",
    "Studio Wonderland",
]


async def collect_values(page):
    return await page.evaluate(
        """() => {
            const sections = Array.from(document.querySelectorAll('section'));
            const valueSection = sections.find(s => s.textContent.includes('What we stand') && s.textContent.includes('Made to remember'));
            return valueSection ? Array.from(valueSection.querySelectorAll('h3')).map(h => ({
                title: h.textContent.trim(),
                text: (h.parentElement.querySelector('p')?.textContent || '').trim()
            })) : [];
        }"""
    )


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1920, "height": 1080})

        await page.goto(f"{BASE_URL}/about", wait_until="networkidle")
        about_values = await collect_values(page)
        assert [v["title"] for v in about_values] == EXPECTED_TITLES
        assert about_values[0]["text"] == "Every moment we capture with a sound that fits, with an image that fits."

        about_body = await page.locator("body").inner_text()
        assert all(term not in about_body for term in OLD_TERMS)

        logos = await page.evaluate(
            """() => {
                const trusted = Array.from(document.querySelectorAll('section')).find(s => s.textContent.includes('Trusted') && s.textContent.includes('by'));
                return Array.from(trusted.querySelectorAll('img')).map(img => ({
                    alt: img.getAttribute('alt'),
                    src: img.currentSrc || img.src,
                    loaded: img.complete && img.naturalWidth > 0,
                    naturalWidth: img.naturalWidth,
                    naturalHeight: img.naturalHeight
                }));
            }"""
        )
        assert [logo["alt"] for logo in logos] == ["Radiogroep", "GRK", "OVB Congres", "TOP"]
        assert all(logo["loaded"] for logo in logos)
        assert any(logo["alt"] == "TOP" and "/static/media/top_w" in logo["src"] for logo in logos)
        assert any(logo["alt"] == "OVB Congres" and "/static/media/ovb_w" in logo["src"] for logo in logos)

        await page.goto(f"{BASE_URL}/meet-us", wait_until="networkidle")
        meet_values = await collect_values(page)
        assert [v["title"] for v in meet_values] == EXPECTED_TITLES

        await browser.close()


if __name__ == "__main__":
    import asyncio

    asyncio.run(main())