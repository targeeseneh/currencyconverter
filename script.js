$(document).ready(function () {
    // Simulate loading delay
    setTimeout(function () {
        $("#loading").fadeOut();
        $("#app").fadeIn();
    }, 2000);

    // Populate currency dropdowns
    populateCurrencyDropdowns();

    // Toggle dark mode
    $("#theme-switch").change(function () {
        $("body").toggleClass("dark-mode");
    });
});

function populateCurrencyDropdowns() {
    // Replace with your currency API endpoint or static data
    // Example API endpoint: https://api.exchangerate-api.com/v4/latest/USD
    const currencyList = [
        { name: 'US Dollar', abbreviation: 'USD' },
        { name: 'Euro', abbreviation: 'EUR' },
        { name: 'British Pound Sterling', abbreviation: 'GBP' },
        { name: 'Japanese Yen', abbreviation: 'JPY' },
        { name: 'Canadian Dollar', abbreviation: 'CAD' },
        { name: 'Australian Dollar', abbreviation: 'AUD' },
        { name: 'Swiss Franc', abbreviation: 'CHF' },
        { name: 'Chinese Yuan', abbreviation: 'CNY' },
        { name: 'Swedish Krona', abbreviation: 'SEK' },
        { name: 'New Zealand Dollar', abbreviation: 'NZD' },
        { name: 'South Korean Won', abbreviation: 'KRW' },
        { name: 'Singapore Dollar', abbreviation: 'SGD' },
        { name: 'Norwegian Krone', abbreviation: 'NOK' },
        { name: 'Mexican Peso', abbreviation: 'MXN' },
        { name: 'Indian Rupee', abbreviation: 'INR' },
        { name: 'Brazilian Real', abbreviation: 'BRL' },
        { name: 'South African Rand', abbreviation: 'ZAR' },
        { name: 'Russian Ruble', abbreviation: 'RUB' },
        { name: 'Turkish Lira', abbreviation: 'TRY' },
        { name: 'Hong Kong Dollar', abbreviation: 'HKD' },
        { name: 'Indonesian Rupiah', abbreviation: 'IDR' },
        { name: 'Philippine Peso', abbreviation: 'PHP' },
        { name: 'Thai Baht', abbreviation: 'THB' },
        { name: 'Malaysian Ringgit', abbreviation: 'MYR' },
        { name: 'United Arab Emirates Dirham', abbreviation: 'AED' },
        { name: 'Saudi Riyal', abbreviation: 'SAR' },
        { name: 'Qatari Riyal', abbreviation: 'QAR' },
        { name: 'Egyptian Pound', abbreviation: 'EGP' },
        { name: 'Nigerian Naira', abbreviation: 'NGN' },
        { name: 'Kuwaiti Dinar', abbreviation: 'KWD' },
        { name: 'Algerian Dinar', abbreviation: 'DZD' },
        { name: 'Angolan Kwanza', abbreviation: 'AOA' },
        { name: 'Botswana Pula', abbreviation: 'BWP' },
        { name: 'Burundian Franc', abbreviation: 'BIF' },
        { name: 'Central African CFA franc', abbreviation: 'XAF' },
        { name: 'Cape Verdean Escudo', abbreviation: 'CVE' },
        { name: 'Comorian Franc', abbreviation: 'KMF' },
        { name: 'Djiboutian Franc', abbreviation: 'DJF' },
        { name: 'Eritrean Nakfa', abbreviation: 'ERN' },
        { name: 'Swazi Lilangeni', abbreviation: 'SZL' },
        { name: 'Ethiopian Birr', abbreviation: 'ETB' },
        { name: 'Gambian Dalasi', abbreviation: 'GMD' },
        { name: 'Ghanaian Cedi', abbreviation: 'GHS' },
        { name: 'Guinean Franc', abbreviation: 'GNF' },
        { name: 'West African CFA franc', abbreviation: 'XOF' },
        { name: 'Kenyan Shilling', abbreviation: 'KES' },
        { name: 'Lesotho Loti', abbreviation: 'LSL' },
        { name: 'Liberian Dollar', abbreviation: 'LRD' },
        { name: 'Libyan Dinar', abbreviation: 'LYD' },
        { name: 'Moroccan Dirham', abbreviation: 'MAD' },
        { name: 'Malawian Kwacha', abbreviation: 'MWK' },
        { name: 'Mauritian Rupee', abbreviation: 'MUR' },
        { name: 'Mozambican Metical', abbreviation: 'MZN' },
        { name: 'Namibian Dollar', abbreviation: 'NAD' },
        { name: 'West African CFA franc', abbreviation: 'XOF' },
        { name: 'Nigerian Naira', abbreviation: 'NGN' },
        { name: 'Rwandan Franc', abbreviation: 'RWF' },
        { name: 'São Tomé and Príncipe Dobra', abbreviation: 'STN' },
        { name: 'Saint Helena Pound', abbreviation: 'SHP' },
        { name: 'Seychellois Rupee', abbreviation: 'SCR' },
        { name: 'Sierra Leonean Leone', abbreviation: 'SLL' },
        { name: 'Somali Shilling', abbreviation: 'SOS' },
        { name: 'South African Rand', abbreviation: 'ZAR' },
        { name: 'South Sudanese Pound', abbreviation: 'SSP' },
        { name: 'Sudanese Pound', abbreviation: 'SDG' },
        { name: 'Swazi Lilangeni', abbreviation: 'SZL' },
        { name: 'Tanzanian Shilling', abbreviation: 'TZS' },
        { name: 'Tunisian Dinar', abbreviation: 'TND' },
        { name: 'Ugandan Shilling', abbreviation: 'UGX' },
        { name: 'Zambian Kwacha', abbreviation: 'ZMW' },
        { name: 'Zimbabwean Dollar', abbreviation: 'ZWL' },
    ];

    // Populate "From Currency" dropdown
    const fromCurrencyDropdown = $("#fromCurrency");
    populateDropdownOptions(fromCurrencyDropdown, currencyList);

    // Populate "To Currency" dropdown
    const toCurrencyDropdown = $("#toCurrency");
    populateDropdownOptions(toCurrencyDropdown, currencyList);
}

function populateDropdownOptions(dropdown, options) {
    dropdown.empty();
    for (let option of options) {
        dropdown.append($("<option>").val(option.abbreviation).text(option.name));
    }
}

function convertCurrency() {
    // Replace with your currency conversion logic
    const fromCurrency = $("#fromCurrency").val();
    const toCurrency = $("#toCurrency").val();
    const amount = $("#amount").val();

    // Example: Displaying the converted amount
    const convertedAmount = amount * 1.2; // Replace with your conversion factor
    $("#convertedAmount").val(convertedAmount.toFixed(2));
}
function convertCurrency() {
    const fromCurrency = $("#fromCurrency").val();
    const toCurrency = $("#toCurrency").val();
    const amount = $("#amount").val();

    // Make sure to replace 'YOUR_API_KEY' with your actual API key from exchangerate-api.com
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}?apikey=${apiKey}`;

    $.ajax({
        url: apiUrl,
        type: 'GET',
        success: function (data) {
            const exchangeRate = data.rates[toCurrency];
            if (exchangeRate) {
                const convertedAmount = amount * exchangeRate;
                $("#convertedAmount").val(convertedAmount.toFixed(2));
            } else {
                alert('Invalid currency selection');
            }
        },
        error: function () {
            alert('Error fetching exchange rates');
        }
    });
}
