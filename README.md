# Google Ads Generator 🎯

A powerful web application that generates Google Ads (Responsive Search Ads) following Google's best practices. Simply input your URL or product description, and get professionally crafted ads ready to copy and paste into Google Ads.

## Features

✨ **Automatic Ad Generation**
- 15 unique headlines (max 30 characters each)
- 4 compelling descriptions (max 90 characters each)
- Follows Google Ads best practices automatically

🎨 **Two Input Methods**
- **URL Input**: Enter your website URL and business type
- **Text Input**: Provide detailed product/service description and keywords

📊 **Multiple Export Formats**
- CSV file for bulk upload
- Text file with formatted output
- Copy to clipboard for quick use

✓ **Best Practices Applied**
- Keywords naturally integrated
- Clear call-to-action phrases
- Mobile-optimized copy
- Character count validation
- Ad preview before export

## How to Use

### 1. Open the Application
Simply open `index.html` in your web browser. No installation or build process required!

### 2. Choose Input Method

#### Option A: URL Input
1. Select the "URL Input" tab
2. Enter your website URL (e.g., https://example.com)
3. Optionally specify your business type (e.g., E-commerce, SaaS)

#### Option B: Text Input
1. Select the "Text Input" tab
2. Describe your product/service in detail
3. Add target keywords (comma-separated)
4. Enter your landing page URL

### 3. Configure Settings
- **Final URL**: The URL where users will land when clicking your ad
- **Call-to-Action**: Choose or let the system auto-select (Shop Now, Learn More, etc.)

### 4. Generate Ads
Click the "Generate Ads" button to create your ads instantly!

### 5. Review & Export
- Preview your ad appearance
- Review all 15 headlines and 4 descriptions
- Check character counts (warnings shown if near limit)
- Export using your preferred format:
  - **CSV**: Best for bulk uploads to Google Ads
  - **Text File**: Human-readable format with usage instructions
  - **Copy to Clipboard**: Quick copy for manual entry

## Google Ads Best Practices Implemented

This tool automatically applies these best practices:

1. **Character Limits**
   - Headlines: 30 characters maximum
   - Descriptions: 90 characters maximum
   - Visual warnings at 28 and 85 characters respectively

2. **Content Guidelines**
   - Keyword inclusion in headlines
   - Clear call-to-action phrases
   - Unique selling propositions
   - Mobile-friendly language
   - No excessive punctuation or capitalization

3. **Variety & Testing**
   - 15 different headlines for Google's AI to test
   - 4 descriptions to maximize ad combinations
   - Diverse messaging angles

4. **Ad Structure**
   - Brand name inclusion
   - Benefit-focused messaging
   - Action-oriented language
   - Trust signals

## Using Generated Ads in Google Ads

1. Log in to your Google Ads account
2. Navigate to **Campaigns > Ads & extensions**
3. Click the **+ button** and select **Responsive search ad**
4. Copy and paste each headline into the headline fields
5. Copy and paste each description into the description fields
6. Enter your final URL
7. Preview your ad
8. Save and publish!

## File Structure

```
.
├── index.html      # Main application interface
├── styles.css      # Styling and responsive design
├── app.js          # Core logic and ad generation
├── README.md       # This file
└── LICENSE         # License information
```

## Technical Details

- **Pure HTML/CSS/JavaScript**: No frameworks or dependencies
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Client-Side Only**: All processing happens in your browser
- **No Data Collection**: Your information stays private

## Best Use Cases

- **E-commerce**: Product launches, seasonal sales
- **SaaS**: Feature announcements, free trial promotion
- **Local Business**: Service offerings, special deals
- **B2B**: Lead generation, whitepaper downloads
- **Content Sites**: Newsletter signups, premium content

## Tips for Better Results

1. **Be Specific**: Include specific features, benefits, or offers
2. **Use Numbers**: Prices, percentages, statistics perform well
3. **Keywords Matter**: Include your most important keywords
4. **Test Variations**: Use all 15 headlines for maximum testing
5. **Update Regularly**: Refresh ads based on performance data

## Limitations

- Ad generation is template-based (not AI-powered)
- Best suited for standard promotional ads
- May require manual tweaking for specialized industries
- Character limits are strict (as per Google's requirements)

## License

See LICENSE file for details.

## Support & Feedback

For issues, suggestions, or contributions, please open an issue on the repository.

---

**Note**: This tool generates ad copy suggestions. Always review and ensure your ads comply with [Google Ads policies](https://support.google.com/adspolicy/answer/6008942) before publishing.
