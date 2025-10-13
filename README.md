# 🚀 3PA-Y SDK - Accept Crypto Payments Easily

[![npm version](https://badge.fury.io/js/3pa-y.svg)](https://badge.fury.io/js/3pa-y)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dt/3pa-y.svg)](https://www.npmjs.com/package/3pa-y)

**The easiest way to accept cryptocurrency payments in your application.** Start accepting USDT, USDC, and other stablecoins in just 5 minutes!

## 🌟 Why Choose 3PA-Y SDK?

- ⚡ **5-minute integration** - Get started quickly
- 💰 **Multiple cryptocurrencies** - USDT (TRC20/ERC20), USDC, and more
- 🌐 **Universal compatibility** - Works in Node.js and browsers
- 🎨 **Customizable UI** - Popup, embedded, or custom checkout
- 🔒 **Secure by default** - Enterprise-grade security
- 📱 **Mobile optimized** - Perfect on all devices
- 🔄 **Real-time updates** - Instant payment notifications

## 📦 Installation

### npm
```bash
npm install 3pa-y
```

### yarn
```bash
yarn add 3pa-y
```

### CDN (Browser)
```html
<script src="https://unpkg.com/3pa-y@latest/dist/3pa-y.min.js"></script>
```

### TypeScript
```bash
npm install 3pa-y
npm install @types/node  # For Node.js projects
```

### pnpm
```bash
pnpm add 3pa-y
```

## 🚀 Quick Start

### 1. Get Your API Keys
Sign up at [3pa-y.com](https://3pa-y.com) to get your API credentials.

### 2. Initialize the SDK

```javascript
const ThreePay = require('3pa-y');

const threePay = new ThreePay({
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
  baseUrl: 'https://3pa-y.com'
});
```

### 3. Create Your First Payment

```javascript
async function createPayment() {
  try {
    const payment = await threePay.createTransaction({
      amount: 100,                    // $100 USD
      currencyType: 'USDT-TRC20',     // Accept USDT on TRON
      callbackUrl: 'https://your-site.com'
    });
    
    console.log('Payment created:', payment.data.transactionId);
    return payment;
  } catch (error) {
    console.error('Payment failed:', error.message);
  }
}
```

### Browser Integration

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3Pa-Y - Create Checkout</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 40px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        h1 {
            color: #667eea;
            text-align: center;
            margin-bottom: 30px;
            font-size: 32px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #333;
            font-weight: 600;
        }

        input,
        select {
            width: 100%;
            padding: 12px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 14px;
        }

        input:focus,
        select:focus {
            outline: none;
            border-color: #667eea;
        }

        .checkbox-group {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .checkbox-group input[type="checkbox"] {
            width: auto;
            margin: 0;
        }

        button {
            width: 100%;
            padding: 14px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 20px;
            transition: background 0.3s;
        }

        button:hover {
            background: #5a6fd8;
        }

        button:disabled {
            background: #ccc;
            cursor: not-allowed;
        }

        .result {
            margin-top: 20px;
            padding: 15px;
            border-radius: 8px;
            display: none;
        }

        .result.success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
            display: block;
        }

        .result.error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
            display: block;
        }

        .result pre {
            margin-top: 10px;
            padding: 10px;
            background: rgba(0, 0, 0, 0.05);
            border-radius: 4px;
            overflow-x: auto;
            font-size: 12px;
        }

        .info {
            background: #e7f3ff;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            border-left: 4px solid #667eea;
        }

        .info h3 {
            color: #667eea;
            margin-bottom: 8px;
            font-size: 16px;
        }

        .info p {
            color: #555;
            font-size: 14px;
            line-height: 1.6;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>3Pa-Y - Create Checkout</h1>

        <form id="paymentForm">
            <div class="form-group">
                <label for="amount">Amount *</label>
                <input type="number" id="amount" step="0.01" value="100.00" required>
            </div>

            <div class="form-group">
                <label for="currency">Currency Type *</label>
                <select id="currency" required>
                    <option value="USDT-TRC20">USDT-TRC20</option>
                    <option value="USDT-ERC20">USDT-ERC20</option>
                </select>
            </div>

            <div class="form-group">
                <label for="callbackUrl">Callback URL *</label>
                <input type="url" id="callbackUrl" value="https://your-site.com/webhook" required>
            </div>

            <button type="submit" id="submitBtn">
                Create
            </button>
        </form>

        <div id="result" class="result"></div>
    </div>

    <!-- Load the 3PA-Y SDK -->
    <script src="https://unpkg.com/3pa-y@1.0.0/dist/3pa-y.min.js"></script>
    <script>
        // Wait for the SDK to load before initializing
        function initializeSDK() {
            console.log('Checking for ThreePay...', typeof ThreePay);

            if (typeof ThreePay === 'undefined') {
                console.log('ThreePay not loaded yet, retrying...');
                setTimeout(initializeSDK, 100);
                return;
            }

            console.log('ThreePay loaded successfully!');

            // Initialize 3PA-Y SDK
            const threePay = new ThreePay({
                apiKey: '617ffe6b1784f902ce290e3653051562',
                apiSecret: '4e6b816cfe2d706187019a9349f233ff1fca89341e8d931ff37f18c8af474f04',
                baseUrl: 'http://localhost:5000'
            });

            const form = document.getElementById('paymentForm');
            const submitBtn = document.getElementById('submitBtn');
            const resultDiv = document.getElementById('result');

            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                // Get form values
                const amount = parseFloat(document.getElementById('amount').value);
                const currencyType = document.getElementById('currency').value;
                const callbackUrl = document.getElementById('callbackUrl').value;

                // Update button state
                submitBtn.disabled = true;
                submitBtn.textContent = 'Creating Transaction...';
                resultDiv.className = 'result';
                resultDiv.style.display = 'none';

                try {
                    // Create transaction with auto checkout
                    const transactionData = {
                        amount,
                        currencyType,
                        callbackUrl,
                        openCheckout: true,
                        checkoutOptions: {
                            // openInSameTab: true,
                            openInNewTab: true
                        }
                    };

                    const response = await threePay.createTransaction(transactionData);
                    console.log('Transaction Response:', response);

                } catch (error) {
                    // Show error result
                    resultDiv.className = 'result error';
                    resultDiv.innerHTML = `
                        <strong>❌ Error Creating Transaction</strong>
                        <pre>${error.message}</pre>
                    `;
                    console.error('Transaction error:', error);
                } finally {
                    // Reset button state
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Create';
                }
            });
        }

        // Start trying to initialize once the page loads
        document.addEventListener('DOMContentLoaded', initializeSDK);
        // Also try immediately in case DOMContentLoaded already fired
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeSDK);
        } else {
            initializeSDK();
        }
    </script>
</body>

</html>
```

## 🎨 Checkout Options

### 1. Popup Checkout

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3PA-Y SDK</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 40px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .container {
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        h1 {
            color: #667eea;
            text-align: center;
            margin-bottom: 30px;
            font-size: 32px;
        }

        button {
            width: 100%;
            padding: 14px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            margin-top: 20px;
            transition: background 0.3s;
        }

        button:hover {
            background: #5a6fd8;
        }

        button:disabled {
            background: #ccc;
            cursor: not-allowed;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>3PA-Y SDK</h1>

        <div style="margin-top: 20px; text-align: center;">
            <button type="button" id="openCheckoutPageBtn" style="background: #28a745; margin-right: 10px;">
                Open Checkout Page
            </button>
        </div>

        <div id="result" class="result"></div>
    </div>

    <!-- Load the 3PA-Y SDK -->
    <script src="https://unpkg.com/3pa-y@1.0.0/dist/3pa-y.min.js"></script>
    <script>
        // Wait for the SDK to load before initializing
        function initializeSDK() {
            console.log('Checking for ThreePay...', typeof ThreePay);

            if (typeof ThreePay === 'undefined') {
                console.log('ThreePay not loaded yet, retrying...');
                setTimeout(initializeSDK, 100);
                return;
            }

            console.log('ThreePay loaded successfully!');

            // Initialize 3PAY SDK
            const threePay = new ThreePay({
                apiKey: '617ffe6b1784f902ce290e3653051562',
                apiSecret: '4e6b816cfe2d706187019a9349f233ff1fca89341e8d931ff37f18c8af474f04',
                baseUrl: 'http://localhost:5000'
            });

            const openCheckoutPageBtn = document.getElementById('openCheckoutPageBtn');

            // Add event listeners for the new buttons
            openCheckoutPageBtn.addEventListener('click', () => {
                try {
                    threePay.openCheckoutPage({
                        width: 800,
                        height: 600,
                        defaultValues: {
                            amount: 100.00,
                            currencyType: 'USDT-TRC20',
                            callbackUrl: 'https://your-site.com/webhook',
                        },
                        openInSameTab: true,
                        openInNewTab: false
                    });
                } catch (error) {
                    console.error('Error opening checkout page:', error);
                    alert('Error opening checkout page: ' + error.message);
                }
            });
        }

        // Start trying to initialize once the page loads
        document.addEventListener('DOMContentLoaded', initializeSDK);
        // Also try immediately in case DOMContentLoaded already fired
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeSDK);
        } else {
            initializeSDK();
        }
    </script>
</body>

</html>
```

## 💰 Supported Cryptocurrencies

| Currency | Network | Type | Example |
|----------|---------|------|---------|
| USDT | TRON (TRC20) | `'USDT-TRC20'` | Lowest fees ⭐ |
| USDT | Ethereum (ERC20) | `'USDT-ERC20'` | Wide support |

*More currencies coming soon! Contact support for custom integrations.*

## 📡 API Reference

### Constructor

```javascript
const threePay = new ThreePay({
  apiKey: 'string',        // Required: Your API key
  apiSecret: 'string',     // Required: Your API secret
  baseUrl: 'string'        // Optional: API base URL
});
```

### Methods

#### `createTransaction(paymentData)`

Create a new payment transaction.

```javascript
const payment = await threePay.createTransaction({
  amount: 100,                    // Required: Payment amount in USD
  currencyType: 'USDT-TRC20',     // Optional: Default 'USDT-TRC20'
  callbackUrl: 'https://...',     // Required: Webhook URL
  openCheckout: false,            // Optional: Auto-open checkout (browser only)
  checkoutOptions: {              // Optional: Checkout window options
    width: 500,                   // Popup width (default: 500)
    height: 700,                  // Popup height (default: 700)
    openInSameTab: false,         // Open in same tab instead of popup
    openInNewTab: false           // Open in new tab instead of popup
  }
});

// Returns:
{
  success: true,
  data: {
    transactionId: 'txn_abc123',
    amount: 100,
    currencyType: 'USDT-TRC20',
    status: 'pending',
    walletAddress: 'TXyz...',
    createdAt: '2025-10-01T10:00:00Z'
  }
}
```

#### `getTransaction(transactionId)`

Get payment status and details.

```javascript
const status = await threePay.getTransaction('txn_abc123');

console.log('Payment status:', status.data.status);
// Status: 'pending' | 'completed' | 'failed' | 'expired'
```

#### `withdraw(withdrawData)`

Create a withdrawal request.

```javascript
const withdrawal = await threePay.withdraw({
  walletAddress: 'TXyz123...',    // Destination wallet
  amount: '50',                   // Amount to withdraw
  currencyType: 'USDT-TRC20',     // Currency type
  callbackUrl: 'https://...'      // Webhook URL
});
```

#### `openCheckoutPage(options)`

Open a complete checkout creation page with form interface.

```javascript
threePay.openCheckoutPage({
  openInSameTab: false,           // Open in same tab (default: false)
  openInNewTab: false,            // Open in new tab (default: false)
  width: 800,                     // Popup width (default: 800)
  height: 600,                    // Popup height (default: 600)
  defaultValues: {                // Default form values
    amount: 100.00,               // Default amount
    currencyType: 'USDT-TRC20',   // Default currency
    callbackUrl: 'https://...',   // Default callback URL
    checkoutType: 'popup'         // Default checkout type
  }
});
```
## 🔒 Security Best Practices

### Environment Variables
```bash
# .env file
THREEPAY_API_KEY=your_api_key_here
THREEPAY_API_SECRET=your_api_secret_here
```

### Server-Side Validation
```javascript
// Always verify payments on your server
app.post('/verify-payment', async (req, res) => {
  const { transactionId } = req.body;
  
  try {
    const result = await threePay.verifyPayment(transactionId);
    
    if (result.data.status === 'completed') {
      // Payment verified - safe to fulfill order
      res.json({ verified: true, amount: result.data.amount });
    } else {
      res.json({ verified: false });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

## 📞 Support & Resources

- 📧 **Email**: support@3pa-y.com
- 📖 **Documentation**: [docs.3pa-y.com](https://docs.3pa-y.com/docs/getting-started)
- 💬 **Discord**: [Join our community](https://github.com/rivalfinance/3pay-sdk.git)
- 🐛 **Issues**: [GitHub Issues](https://github.com/rivalfinance/3pay-sdk.git)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/rivalfinance/3pay-sdk.git)

## 📊 Package Stats

- **Bundle Size**: 88.6 KB (minified)
- **Dependencies**: 1 (axios)
- **TypeScript**: Full support included
- **Browsers**: IE11+, Chrome, Firefox, Safari, Edge
- **Node.js**: 14.0+

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by the 3PAY team**

[Website](https://3pa-y.com) • [Documentation](https://docs.3pa-y.com) • [Discord](https://discord.gg) • [Twitter](https://twitter.com)

**⭐ Star us on GitHub if this helped you!**

</div>