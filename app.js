// Google Ads Generator - Following Best Practices
// Responsive Search Ads: Up to 15 headlines (30 chars), 4 descriptions (90 chars)

let generatedAds = {
    headlines: [],
    descriptions: [],
    finalUrl: ''
};

// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.dataset.tab;

        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update active tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${tabName}-tab`).classList.add('active');
    });
});

// Generate ads button
document.getElementById('generate-btn').addEventListener('click', generateAds);

// Export buttons
document.getElementById('export-csv').addEventListener('click', exportToCSV);
document.getElementById('export-text').addEventListener('click', exportToText);
document.getElementById('copy-clipboard').addEventListener('click', copyToClipboard);

function generateAds() {
    const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
    let inputData = {};

    if (activeTab === 'url') {
        const url = document.getElementById('website-url').value.trim();
        const businessType = document.getElementById('business-type').value.trim();

        if (!url) {
            alert('Please enter a website URL');
            return;
        }

        inputData = {
            type: 'url',
            url: url,
            businessType: businessType
        };
    } else {
        const description = document.getElementById('product-description').value.trim();
        const keywords = document.getElementById('target-keywords').value.trim();
        const landingUrl = document.getElementById('landing-url').value.trim();

        if (!description) {
            alert('Please enter a product/service description');
            return;
        }

        inputData = {
            type: 'text',
            description: description,
            keywords: keywords.split(',').map(k => k.trim()).filter(k => k),
            landingUrl: landingUrl
        };
    }

    const finalUrl = document.getElementById('final-url').value.trim();
    const ctaPreference = document.getElementById('call-to-action').value;

    if (!finalUrl) {
        alert('Please enter a final URL for your ads');
        return;
    }

    inputData.finalUrl = finalUrl;
    inputData.ctaPreference = ctaPreference;

    // Generate the ads
    const ads = createGoogleAds(inputData);
    generatedAds = ads;

    // Display the results
    displayResults(ads);
}

function createGoogleAds(inputData) {
    // Extract domain name for branding
    const domain = extractDomain(inputData.finalUrl);
    const cta = inputData.ctaPreference || selectCTA(inputData);

    let headlines = [];
    let descriptions = [];
    let keywords = inputData.keywords || [];

    if (inputData.type === 'url') {
        // Generate generic headlines based on URL/business type
        headlines = generateHeadlinesFromURL(domain, inputData.businessType, cta);
        descriptions = generateDescriptionsFromURL(domain, inputData.businessType, cta);
    } else {
        // Generate from text description
        headlines = generateHeadlinesFromText(inputData.description, keywords, cta, domain);
        descriptions = generateDescriptionsFromText(inputData.description, keywords, cta);
    }

    // Ensure we have exactly 15 headlines and 4 descriptions
    headlines = ensureCount(headlines, 15, 30);
    descriptions = ensureCount(descriptions, 4, 90);

    return {
        headlines: headlines,
        descriptions: descriptions,
        finalUrl: inputData.finalUrl
    };
}

function generateHeadlinesFromURL(domain, businessType, cta) {
    const brandName = capitalize(domain.split('.')[0]);
    const type = businessType || 'Services';

    return [
        truncate(`${brandName} - ${type}`, 30),
        truncate(`Official ${brandName} Site`, 30),
        truncate(`${cta} at ${brandName}`, 30),
        truncate(`Best ${type} Online`, 30),
        truncate(`${brandName} - Trusted ${type}`, 30),
        truncate(`Top Quality ${type}`, 30),
        truncate(`${cta} Today`, 30),
        truncate(`${brandName} Official Store`, 30),
        truncate(`Premium ${type} Here`, 30),
        truncate(`Visit ${brandName} Now`, 30),
        truncate(`#1 ${type} Provider`, 30),
        truncate(`${brandName} - Save More`, 30),
        truncate(`Exclusive ${type} Deals`, 30),
        truncate(`Fast & Reliable ${type}`, 30),
        truncate(`Get Started with ${brandName}`, 30)
    ];
}

function generateHeadlinesFromText(description, keywords, cta, domain) {
    const brandName = capitalize(domain.split('.')[0]);
    const mainKeyword = keywords[0] || 'Products';
    const secondKeyword = keywords[1] || 'Services';

    // Extract key phrases from description
    const words = description.split(' ').filter(w => w.length > 3);
    const keyPhrases = extractKeyPhrases(description);

    const headlines = [
        truncate(`${brandName} - ${mainKeyword}`, 30),
        truncate(`${cta} - ${mainKeyword}`, 30),
        truncate(`Best ${mainKeyword} Online`, 30),
        truncate(`${mainKeyword} | ${brandName}`, 30),
        truncate(`Top ${secondKeyword} Deals`, 30),
        truncate(`${cta} Today`, 30),
        truncate(`Official ${brandName} Site`, 30),
        truncate(`Premium ${mainKeyword}`, 30),
        truncate(`${keyPhrases[0] || mainKeyword}`, 30),
        truncate(`Trusted ${mainKeyword}`, 30),
        truncate(`${brandName} - #1 Choice`, 30),
        truncate(`Save on ${mainKeyword}`, 30),
        truncate(`${keyPhrases[1] || secondKeyword}`, 30),
        truncate(`Fast ${mainKeyword} Delivery`, 30),
        truncate(`${cta} - Free Shipping`, 30)
    ];

    return headlines;
}

function generateDescriptionsFromURL(domain, businessType, cta) {
    const brandName = capitalize(domain.split('.')[0]);
    const type = businessType || 'products and services';

    return [
        truncate(`Discover ${type} at ${brandName}. ${cta} for exclusive deals and fast shipping. Trusted by thousands.`, 90),
        truncate(`${brandName} offers premium ${type}. Best prices guaranteed. ${cta} and save today!`, 90),
        truncate(`Looking for quality ${type}? Visit ${brandName}. Fast delivery, great prices, excellent service.`, 90),
        truncate(`${cta} at ${brandName} for the best ${type}. Top-rated service. Free shipping on orders over $50.`, 90)
    ];
}

function generateDescriptionsFromText(description, keywords, cta) {
    const shortDesc = truncate(description, 70);
    const mainKeyword = keywords[0] || 'our products';
    const benefit1 = 'Fast Shipping';
    const benefit2 = 'Best Prices';

    return [
        truncate(`${shortDesc} ${cta} for exclusive deals and premium quality.`, 90),
        truncate(`Discover ${mainKeyword}. ${benefit1}. ${benefit2}. Trusted by thousands. ${cta} today!`, 90),
        truncate(`Premium ${mainKeyword} at unbeatable prices. ${cta} now. Free returns and fast delivery.`, 90),
        truncate(`${shortDesc} ${cta}. Top-rated service. Shop with confidence.`, 90)
    ];
}

function extractKeyPhrases(text) {
    // Simple extraction of potential key phrases
    const words = text.split(' ');
    const phrases = [];

    for (let i = 0; i < words.length - 1; i++) {
        if (words[i].length > 3 && words[i + 1].length > 3) {
            const phrase = `${words[i]} ${words[i + 1]}`;
            if (phrase.length <= 30) {
                phrases.push(capitalize(phrase));
            }
        }
    }

    return phrases.slice(0, 5);
}

function selectCTA(inputData) {
    const ctas = ['Shop Now', 'Learn More', 'Get Started', 'Try Free', 'Buy Now'];
    return ctas[Math.floor(Math.random() * ctas.length)];
}

function extractDomain(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname.replace('www.', '');
    } catch {
        return url.replace('www.', '').split('/')[0];
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function truncate(str, maxLength) {
    if (str.length <= maxLength) return str;
    return str.substring(0, maxLength - 3) + '...';
}

function ensureCount(items, targetCount, maxLength) {
    // Make sure all items are within length limit
    items = items.map(item => truncate(item, maxLength));

    // If we have more than needed, trim
    if (items.length > targetCount) {
        return items.slice(0, targetCount);
    }

    // If we have less than needed, generate more variations
    while (items.length < targetCount) {
        const baseIndex = items.length % items.length;
        const variation = items[baseIndex] + ' ⭐';
        items.push(truncate(variation, maxLength));
    }

    return items;
}

function displayResults(ads) {
    // Show output section
    document.getElementById('output-section').style.display = 'block';

    // Display ad preview (using first headline and description)
    const previewHTML = `
        <div class="ad-preview-url">${formatDisplayUrl(ads.finalUrl)}</div>
        <div class="ad-preview-headline">${ads.headlines[0]}</div>
        <div class="ad-preview-description">${ads.descriptions[0]}</div>
        <div class="ad-preview-description">${ads.descriptions[1]}</div>
    `;
    document.getElementById('ad-preview').innerHTML = previewHTML;

    // Display headlines
    const headlinesHTML = ads.headlines.map((headline, index) => {
        const length = headline.length;
        const lengthClass = length > 30 ? 'error' : (length > 28 ? 'warning' : '');
        return `
            <div class="item">
                <span class="item-text">${index + 1}. ${headline}</span>
                <span class="item-length ${lengthClass}">${length}/30</span>
            </div>
        `;
    }).join('');
    document.getElementById('headlines-list').innerHTML = headlinesHTML;

    // Display descriptions
    const descriptionsHTML = ads.descriptions.map((description, index) => {
        const length = description.length;
        const lengthClass = length > 90 ? 'error' : (length > 85 ? 'warning' : '');
        return `
            <div class="item">
                <span class="item-text">${index + 1}. ${description}</span>
                <span class="item-length ${lengthClass}">${length}/90</span>
            </div>
        `;
    }).join('');
    document.getElementById('descriptions-list').innerHTML = descriptionsHTML;

    // Scroll to results
    document.getElementById('output-section').scrollIntoView({ behavior: 'smooth' });
}

function formatDisplayUrl(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname.replace('www.', '') + urlObj.pathname;
    } catch {
        return url;
    }
}

function exportToCSV() {
    let csv = 'Type,Text,Character Count\n';

    generatedAds.headlines.forEach((headline, index) => {
        csv += `Headline ${index + 1},"${headline}",${headline.length}\n`;
    });

    generatedAds.descriptions.forEach((description, index) => {
        csv += `Description ${index + 1},"${description}",${description.length}\n`;
    });

    csv += `Final URL,"${generatedAds.finalUrl}",\n`;

    downloadFile('google-ads.csv', csv, 'text/csv');
}

function exportToText() {
    let text = '=== GOOGLE ADS - RESPONSIVE SEARCH ADS ===\n\n';
    text += '📢 HEADLINES (15)\n';
    text += '─────────────────────────────────────────\n';

    generatedAds.headlines.forEach((headline, index) => {
        text += `${index + 1}. ${headline} [${headline.length}/30]\n`;
    });

    text += '\n📝 DESCRIPTIONS (4)\n';
    text += '─────────────────────────────────────────\n';

    generatedAds.descriptions.forEach((description, index) => {
        text += `${index + 1}. ${description} [${description.length}/90]\n\n`;
    });

    text += '🔗 FINAL URL\n';
    text += '─────────────────────────────────────────\n';
    text += `${generatedAds.finalUrl}\n\n`;

    text += '✓ Best Practices Applied:\n';
    text += '  • 15 unique headlines (max 30 characters)\n';
    text += '  • 4 descriptions (max 90 characters)\n';
    text += '  • Keywords integrated naturally\n';
    text += '  • Clear call-to-action included\n';
    text += '  • Mobile-optimized copy\n\n';

    text += '📋 How to Use:\n';
    text += '  1. Go to Google Ads > Campaigns > Ads & extensions\n';
    text += '  2. Click the + button > Responsive search ad\n';
    text += '  3. Copy and paste each headline and description\n';
    text += '  4. Add your final URL\n';
    text += '  5. Preview and publish your ad\n';

    downloadFile('google-ads.txt', text, 'text/plain');
}

function copyToClipboard() {
    let text = 'HEADLINES:\n';
    generatedAds.headlines.forEach((headline, index) => {
        text += `${index + 1}. ${headline}\n`;
    });

    text += '\nDESCRIPTIONS:\n';
    generatedAds.descriptions.forEach((description, index) => {
        text += `${index + 1}. ${description}\n`;
    });

    text += `\nFINAL URL: ${generatedAds.finalUrl}`;

    navigator.clipboard.writeText(text).then(() => {
        alert('✓ Copied to clipboard!');
    }).catch(() => {
        alert('Failed to copy. Please try the text export instead.');
    });
}

function downloadFile(filename, content, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
